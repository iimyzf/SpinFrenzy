import "./Chat.css";
import Apollo from "../assets/Apollo.jpg";
import noChat from "../assets/no-chat.svg";
import { FiLogOut } from "react-icons/fi";
import { BsArrowRightShort, BsSendFill } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import MessageContainer from "../components/MessageContainer";
import "../components/AddChannel.css";
import { Socket, io } from "socket.io-client";
import AddChannel from "../components/AddChannel";

import axios from "axios";
import { ClassNames } from "@emotion/react";

const Chat = () => {
    const [socket, setSocket] = useState<Socket | null>(null);
    const [channels, setChannels] = useState<
        { name: string; img: File | null }[]
    >([]);
    // const socket = io('http://localhost:3000', {
    //     withCredentials: true,
    // })
    const [inputValue, setInputValue] = useState("");
    const [messages, setMessages] = useState<
        {
            message: string;
            isSentByMe: boolean;
        }[]
    >([]);
    const [selectedChannel, setSelectedChannel] = useState<{
        name: string;
        img: File | null;
    } | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleArrowClick = () => {
        if (inputValue.trim() !== "") {
            setMessages((prevMessages) => [
                ...prevMessages,
                {
                    message: inputValue.trim(),
                    isSentByMe: false,
                },
            ]);
            setInputValue("");
            const dto = {
                id: 1,
                message: inputValue.trim(),
                receiverId: 2,
            };
            socket?.emit("createMessage", dto, {
                withCredentials: true,
            });
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleArrowClick();
        }
    };

    const addChannel = async (currentChannel: { name: string; img: File }) => {
        const newChannel = [...channels, currentChannel];
        try {
            const formData = new FormData();
            formData.append("file", currentChannel.img);
            formData.append("name", currentChannel.name);
            const data = {
                name: currentChannel.name,
            };

            await axios.post("http://localhost:3000/chat/new", formData, {
                withCredentials: true,
            });
        } catch (error) {
            console.log(error);
        }
        setChannels(newChannel);
    };

    const [popup, setPopup] = useState(false);
    const togglePopup = () => {
        setPopup(!popup);
    };

    const messagesContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Scroll to the bottom when a new message is added
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTop =
                messagesContainerRef.current.scrollHeight;
        }
    }, [messages]);

    //-------------------------------------------casper-------------------------------------//
    const socketRef = useRef<Socket | null>(null);

    useEffect(() => {
        if (socketRef.current === null) {
            socketRef.current = io("http://localhost:3000", {
                withCredentials: true,
            });
        }
        setSocket(socketRef.current);

        socket?.on("newmessage", (dto: any) => {
            console.log("message received: ", dto[0].message);
            setMessages((prevMessages) => [
                ...prevMessages,
                {
                    message: dto[0].message,
                    isSentByMe: false,
                },
            ]);
        });
    }, [socket]);

    return (
        <div className="parent flex flex-row justify-center items-center gap-[1vw] h-screen">
            <div className="child-container-1">
                <div className="container-1 font-satoshi text-white w-[18vw] h-[91.5vh] flex flex-col justify-center items-center relative">
                    <h3 className="absolute top-[1.6vw] uppercase font-bold text-[1vw]">
                        Channels
                    </h3>
                    <span className="line absolute top-[4.7vw]"></span>
                    <span className="line absolute bottom-[5.7vw]"></span>
                    <a onClick={togglePopup}>
                        <span className="plus-icon w-[3vw] h-[3vw] rounded-full absolute bottom-[1.3vw] right-[1.5vw] flex justify-center items-center cursor-pointer">
                            <FiPlus className="text-[1.2vw]" />
                        </span>
                    </a>
                    <div className="red-divs h-[73vh] mb-[1.1vw] w-full overflow-y-scroll no-scrollbar overflow-hidden">
                        {channels.map((channel, idx) => (
                            <div
                                key={idx}
                                className={`channel flex relative top-0 items-center px-[1vw] scroll-auto h-[5vw] hover:cursor-pointer ${
                                    selectedChannel === channel
                                        ? "active-channel"
                                        : ""
                                }`}
                                onClick={() => setSelectedChannel(channel)}
                            >
                                <img
                                    className="w-[2.5vw] h-[2.5vw] rounded-full object-cover"
                                    src={
                                        channel.img
                                            ? URL.createObjectURL(channel.img)
                                            : Apollo
                                    }
                                    alt="Apollo"
                                />
                                <h4 className="font-medium ml-[.6vw] text-[1vw]">
                                    {channel.name}
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {selectedChannel ? (
                <div className="child-container-2">
                    <div className="container-2 font-satoshi text-white w-[60vw] h-[91.5vh] flex flex-col justify-center items-start relative overflow-hidden">
                        <img
                            className="w-[2.5vw] h-[2.5vw] rounded-full absolute top-[1.2vw] left-[2vw] object-cover"
                            src={
                                selectedChannel?.img
                                    ? URL.createObjectURL(selectedChannel?.img)
                                    : Apollo
                            }
                            alt="Apollo"
                        />
                        <h3 className="absolute top-[1.6vw] font-bold left-[5.5vw] text-[1vw]">
                            {selectedChannel?.name || "Create a channel"}
                        </h3>
                        {/* <a href="#">
                            <FiLogOut className="absolute top-7 right-10 text-2xl" />
                        </a> */}
                        <span className="line absolute top-[4.7vw]"></span>
                        <span className="line absolute bottom-[5.7vw]"></span>
                        <div className="h-[73vh] w-full mb-[1vw] px-[1.5vw] overflow-y-scroll no-scrollbar overflow-hidden">
                            <div
                                className="max-h-[43.8em] overflow-y-scroll no-scrollbar overflow-hidden"
                                ref={messagesContainerRef}
                            >
                                {messages.map((message, idx) => (
                                    <MessageContainer
                                        key={idx}
                                        message={message.message}
                                        isSentByMe={message.isSentByMe}
                                    />
                                ))}
                            </div>
                        </div>
                        <input
                            placeholder="Type your message here..."
                            type="text"
                            maxLength={250}
                            value={inputValue}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                            className="w-[52.5vw] rounded-[.5vw] input-container outline-none resize px-[1vw] h-[5.5vh] absolute bottom-[1.2vw] left-[1.5vw] text-[1vw]"
                        />
                        <span
                            className="input-container w-[3.5vw] h-[3.2vw] rounded-[.5vw] flex justify-center items-center absolute right-[1.5vw] bottom-[1.2vw] cursor-pointer"
                            onClick={handleArrowClick}
                        >
                            <BsSendFill className="check-icon text-[1vw]" />
                        </span>
                    </div>
                </div>
            ) : (
                <div className="child-container-2">
                    <div className="container-2 font-satoshi text-white w-[60vw] h-[91.5vh] flex flex-col justify-center items-center relative overflow-hidden">
                        <div className="w-[30vw] h-[50vh] p-[2vw] flex justify-center items-center object-cover overflow-hidden">
                            <img
                                src={noChat}
                                alt="nochat"
                                className="opacity-75"
                            />
                        </div>
                        <h1 className="font-normal font-satoshi whitespace-nowrap text-center uppercase text-[1vw]">
                            OPS! There's no channel at this moment. <br />
                            Please consider creating one by clicking on the{" "}
                            <span className="font-black"> [ + ] </span>
                            on your{" "}
                            <span className="font-black underline">
                                left sidebar.
                            </span>
                        </h1>
                    </div>
                </div>
            )}
            <div className="child-container-1">
                <div className="container-1 font-satoshi text-white w-[18vw] h-[91.5vh] flex flex-col justify-center items-center relative">
                    <h3 className="absolute top-[1.6vw] uppercase font-bold text-[1vw]">
                        Friends
                    </h3>
                    <span className="line absolute top-[4.7vw]"></span>
                    <div className="red-divs h-[73vh] mb-[1.1vw] w-full overflow-y-scroll no-scrollbar overflow-hidden">
                        {/* Fetsh the friends data and display it here!!!! */}
                    </div>
                </div>
            </div>
            {popup && (
                <AddChannel togglePopup={togglePopup} addChannel={addChannel} />
            )}
        </div>
    );
};

export default Chat;
