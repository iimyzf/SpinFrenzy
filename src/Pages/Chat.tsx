import "./Chat.css";
import Apollo from "../assets/Apollo.jpg";
import noChat from "../assets/no-chat.svg";
import { BsSendFill, BsThreeDotsVertical } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import MessageContainer from "../components/MessageContainer";
import "../components/AddChannel.css";
import { Socket, io } from "socket.io-client";
import AddChannel from "../components/AddChannel";

import axios from "axios";
import { Link } from "react-router-dom";

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
            // const data = {
            //     name: currentChannel.name,
            // };

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
        <div className="parent flex flex-row justify-center items-center gap-[1vw] h-screen max-sm:flex-col">
            <div className="child-container-1">
                <div className="container-1 font-satoshi text-white w-[18vw] h-[90vh] max-sm:w-[80vw] max-sm:h-[45vh] flex flex-col justify-center items-center relative">
                    <h3 className="absolute top-[3vh] max-sm:top-[1.8vh] uppercase font-bold text-[1vw] max-sm:text-[2vw]">
                        Conversations
                    </h3>
                    <span className="line absolute top-[8vh] max-sm:top-[5vh]"></span>
                    <span className="line absolute bottom-[9vh] max-sm:bottom-[5vh]"></span>
                    <a onClick={togglePopup}>
                        <span className="plus-icon w-[3vw] h-[3vw] max-sm:w-[5vw] max-sm:h-[5vw] rounded-full absolute bottom-[2vh] right-[1.5vw] max-sm:bottom-[1vh] max-sm:right-[3vw] flex justify-center items-center cursor-pointer">
                            <FiPlus className="text-[1.2vw] max-sm:text-[2vw]" />
                        </span>
                    </a>
                    <div className="red-divs h-[72.5vh] max-sm:h-[35vh] mb-[1vh] max-sm:mt-[1vh] w-full overflow-y-scroll no-scrollbar overflow-hidden max-sm:bg-red600">
                        {channels.map((channel, idx) => (
                            <div
                                key={idx}
                                className={`channel flex relative top-0 items-center px-[1vw] max-sm:px-[3vw] scroll-auto h-[8vh] max-sm:h-[5vh] hover:cursor-pointer ${
                                    selectedChannel === channel
                                        ? "active-channel"
                                        : ""
                                }`}
                                onClick={() => setSelectedChannel(channel)}
                            >
                                <img
                                    className="w-[2.5vw] h-[2.5vw] max-sm:w-[6vw] max-sm:h-[6vw] rounded-full object-cover"
                                    src={
                                        channel.img
                                            ? URL.createObjectURL(channel.img)
                                            : Apollo
                                    }
                                    alt="Apollo"
                                />
                                <h4 className="font-medium ml-[.6vw] text-[1vw] max-sm:ml-[2vw] max-sm:text-[2vw]">
                                    {channel.name}
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {selectedChannel ? (
                <div className="child-container-2">
                    <div className="container-2 font-satoshi text-white w-[65vw] h-[90vh] max-sm:w-[80vw] max-sm:h-[45vh] flex flex-col justify-center items-start relative overflow-hidden">
                        <img
                            className="w-[2.5vw] h-[2.5vw] max-sm:w-[6vw] max-sm:h-[6vw] rounded-full absolute top-[2vh] max-sm:top-[1vh] left-[2vw] max-sm:left-[3vw] object-cover"
                            src={
                                selectedChannel?.img
                                    ? URL.createObjectURL(selectedChannel?.img)
                                    : Apollo
                            }
                            alt="Apollo"
                        />
                        <h3 className="absolute top-[3vh] max-sm:top-[1.8vh] font-bold left-[5.5vw] max-sm:left-[11vw] text-[1vw] max-sm:text-[2vw]">
                            {selectedChannel.name}
                        </h3>
                        <span className="absolute top-[3vh] right-[2vw] max-sm:top-[2vh] max-sm:right-[4vw]">
                            <BsThreeDotsVertical className="text-[1.2vw] max-sm:text-[2.2vw]" />
                        </span>
                        <span className="line absolute top-[8vh] max-sm:top-[5vh]"></span>
                        <span className="line absolute bottom-[9vh] max-sm:bottom-[5vh]"></span>
                        <div className="h-[72.5vh] max-sm:h-[35vh] w-full mb-[1vh] max-sm:mb-0 px-[1.5vw] overflow-y-scroll no-scrollbar overflow-hidden">
                            <div
                                className="max-h-[72.5vh] max-sm:max-h-[35vh] overflow-y-scroll no-scrollbar overflow-hidden"
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
                            className="w-[57.5vw] max-sm:w-[70vw] rounded-[.5vw] input-container outline-none resize px-[1vw] h-[5.5vh] max-sm:px-[1vw] max-sm:h-[3vh] absolute bottom-[1.7vh] max-sm:bottom-[1vh] left-[1.5vw] text-[1vw] max-sm:text-[1.5vw]"
                        />
                        <span
                            className="input-container w-[3.5vw] h-[5.5vh] max-sm:w-[6vw] max-sm:h-[3vh] rounded-[.5vw] flex justify-center items-center absolute right-[1.5vw] bottom-[1.7vh] max-sm:bottom-[1vh] cursor-pointer"
                            onClick={handleArrowClick}
                        >
                            <BsSendFill className="check-icon text-[1vw] max-sm:text-[2vw]" />
                        </span>
                    </div>
                </div>
            ) : (
                <div className="child-container-2">
                    <div className="container-2 font-satoshi text-white w-[65vw] h-[90vh] max-sm:w-[80vw] max-sm:h-[45vh] flex flex-col justify-center items-center relative overflow-hidden">
                        <div className="flex flex-col w-[30vw] p-[2vw] max-sm:w-[50vw] max-sm:h-[50vh] justify-center items-center object-cover overflow-hidden">
                            <img
                                src={noChat}
                                alt="nochat"
                                className="opacity-75"
                            />
                        <h1 className="font-normal font-satoshi text-center uppercase text-[1vw] max-sm:text-[2vw]">
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
                </div>
            )}
            {popup && (
                <AddChannel togglePopup={togglePopup} addChannel={addChannel} />
            )}
        </div>
    );
};

export default Chat;
