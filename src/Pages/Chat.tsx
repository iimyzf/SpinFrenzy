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
// import { Link } from "react-router-dom";
// import { GiRoundBottomFlask } from "react-icons/gi";

const Chat = () => {
    const [socket, setSocket] = useState<Socket | null>(null);
    const [channels, setChannels] = useState<
        { name: string; img: string | File ; id: number }[]
    >([]);
    const [inputValue, setInputValue] = useState("");
    const [messages, setMessages] = useState<
        {
            message: string;
            isSentByMe: boolean;
        }[]
    >([]);
    const [selectedChannel, setSelectedChannel] = useState<{
        name: string;
        img: string | File;
        id: number;
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
            console.log("channel id == ", selectedChannel?.id);
            const dto = {
                id: selectedChannel?.id,
                message: inputValue.trim(),
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

    const addChannel = async (currentChannel: { name: string; img: string; id: number }) => {
        const newChannel = [...channels, currentChannel];
        try {
            const formData = new FormData();
            formData.append("file", currentChannel.img);
            formData.append("name", currentChannel.name);
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

    const getRoomChannels = async () => {
        try {
            const response = await axios.get(
                "http://localhost:3000/users/me/chatrooms",
                {
                    withCredentials: true,
                }
            );
            return response.data;
        } catch (error) {
            console.error(error);
        }
    };
    const getChannelmgs = async (id: any) => {
        try {
            const res = await axios.get(
                "http://localhost:3000/chat/getroomsmgs?id=" + id,
                {
                    withCredentials: true,
                }
            );
            console.log(res.data);
            return res.data;
        } catch (error) {
            // console.log(error);
        }
    }
    const getimg = async (roomid: number) => {
        const res = await axios.get("http://localhost:3000/" + roomid + "room.png", {
            withCredentials: true,
        })
        return res.data
    }
    useEffect(() => {
        const res = getRoomChannels().then((res) => {
            let newchannel: any[] = [];
            res.forEach((element: any) => {
                const room = element.room;
                const url = "http://localhost:3000/" + room.id + "room.png";
                newchannel = [...newchannel, { name: room.name, img: url, id: room.id }]
            });
            setChannels(newchannel);
        });
    }, []);
    useEffect(() => {
        // Scroll to the bottom when a new message is added
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTop =
                messagesContainerRef.current.scrollHeight;
        }
    }, [messages]);

    //-------------------------------------------casper-------------------------------------//

    useEffect(() => {
        if(selectedChannel?.id !== undefined)
        {
            let id: number = 0; 
            whoami().then((res)=> {
                id = res.id;
                console.log("id == ", id);
                let messages:   {
                    message: string;
                    isSentByMe: boolean;
                }[] = [];
                console.log("selected channel --> ",selectedChannel?.id);
                getChannelmgs(selectedChannel?.id).then((res) => {
                    const msg = res.messages;
                    msg.forEach((element:any) => {
                        // console.log("msg == ", element);
                        
                        if (element.senderId === id) {
                            messages = [...messages, { message: element.content, isSentByMe: true }]
                        } else {
                            messages = [...messages, { message: element.content, isSentByMe: false }]
                        }
                    });
                    setMessages(messages);
                });
            });
        }

    }, [selectedChannel])

    const socketRef = useRef<Socket | null>(null);
    const whoami = async () => {
        const me = await axios.get("http://localhost:3000/users/me", {
            withCredentials: true,
        });
        return me.data;
    };

    const getSelectedChannel = async (channel: { name: string; img: string | File; id: number }) => {
        setSelectedChannel(channel);
    };
    useEffect(() => {
        if (socketRef.current === null) {
            socketRef.current = io("http://localhost:3000", {
                withCredentials: true,
            });
        }
        setSocket(socketRef.current);
        socket?.on("newmessage", (dto: any) => {
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
        <div className="parent flex flex-row justify-center items-center gap-[1vw] h-screen max-sm:flex-col max-md:flex-col">
            <div className="child-container-1">
                <div className="container-1 font-satoshi text-white w-[18vw] h-[90vh] max-sm:w-[80vw] max-sm:h-[45vh] max-md:w-[80vw] max-md:h-[45vh] flex flex-col justify-center items-center relative">
                    <h3 className="absolute top-[3vh] max-sm:top-[1.8vh] max-md:top-[1.8vh] uppercase font-bold text-[1vw] max-sm:text-[2vw] max-md:text-[1.4vw]">
                        Conversations
                    </h3>
                    <span className="line absolute top-[8vh] max-sm:top-[5vh] max-md:top-[5vh]"></span>
                    <span className="line absolute bottom-[9vh] max-sm:bottom-[5vh] max-md:bottom-[5vh]"></span>
                    <a onClick={togglePopup}>
                        <span className="plus-icon w-[3vw] h-[3vw] max-sm:w-[5vw] max-sm:h-[5vw] max-md:w-[4vw] max-md:h-[4vw] rounded-full absolute bottom-[2vh] right-[1.5vw] max-sm:bottom-[1vh] max-sm:right-[3vw] max-md:bottom-[1vh] max-md:right-[2vw] flex justify-center items-center cursor-pointer">
                            <FiPlus className="text-[1.2vw] max-sm:text-[2vw] max-md:text-[2vw]" />
                        </span>
                    </a>
                    <div className="red-divs h-[72.5vh] max-sm:h-[35vh] max-md:h-[35vh] mb-[1vh] max-sm:mt-[1vh] max-md:mt-[1vh] w-full overflow-y-scroll no-scrollbar overflow-hidden">
                        {channels.map((channel, idx) => (
                            <div
                                key={idx}
                                className={`channel flex relative top-0 items-center px-[1vw] max-sm:px-[3vw] max-md:px-[3vw] scroll-auto h-[8vh] max-sm:h-[5vh] max-md:h-[5vh] hover:cursor-pointer ${
                                    selectedChannel === channel
                                        ? "active-channel"
                                        : ""
                                }`}
                                onClick={() => setSelectedChannel(channel)}
                            >
                                <img
                                    className="w-[2.5vw] h-[2.5vw] max-sm:w-[6vw] max-sm:h-[6vw] max-md:w-[4vw] max-md:h-[4vw] rounded-full object-cover"
                                    src={
                                        typeof channel.img === "string"
                                            ? channel.img
                                            : URL.createObjectURL(channel.img)
                                    }
                                    alt="Apollo"
                                />
                                <h4 className="font-medium ml-[.6vw] text-[1vw] max-sm:ml-[2vw] max-sm:text-[2vw] max-md:ml-[1.5vw] max-md:text-[1.4vw]">
                                    {channel.name}
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {selectedChannel ? (
                <div className="child-container-2">
                    <div className="container-2 font-satoshi text-white w-[65vw] h-[90vh] max-sm:w-[80vw] max-sm:h-[45vh] max-md:w-[80vw] max-md:h-[45vh] flex flex-col justify-center items-start relative overflow-hidden">
                        <img
                            className="w-[2.5vw] h-[2.5vw] max-sm:w-[6vw] max-sm:h-[6vw] max-md:w-[4vw] max-md:h-[4vw] rounded-full absolute top-[2vh] max-sm:top-[1vh] max-md:top-[1vh] left-[2vw] max-sm:left-[3vw] max-md:left-[3vw] object-cover"
                            src={
                                typeof selectedChannel?.img === "string"
                                ? selectedChannel?.img
                                : URL.createObjectURL(selectedChannel?.img)
                            }
                            alt="Apollo"
                        />
                        <h3 className="absolute top-[3vh] max-sm:top-[1.8vh] max-md:top-[1.8vh] font-bold left-[5.5vw] max-sm:left-[11vw] max-md:left-[8vw] text-[1vw] max-sm:text-[2vw] max-md:text-[1.4vw]">
                            {selectedChannel.name}
                        </h3>
                        <span className="absolute top-[3vh] right-[2vw] max-sm:top-[2vh] max-sm:right-[2vw] max-md:top-[1.5vh] max-md:right-[4vw]">
                            <BsThreeDotsVertical className="text-[1.2vw] max-sm:text-[2.2vw] max-md:text-[2vw]" />
                        </span>
                        <span className="line absolute top-[8vh] max-sm:top-[5vh] max-md:top-[5vh]"></span>
                        <span className="line absolute bottom-[9vh] max-sm:bottom-[5vh] max-md:bottom-[5vh]"></span>
                        <div className="h-[72.5vh] max-sm:h-[35vh] max-md:h-[35vh] w-full mb-[1vh] max-sm:mb-0 max-md:mb-0 px-[1.5vw] overflow-y-scroll no-scrollbar overflow-hidden">
                            <div
                                className="max-h-[72.5vh] max-sm:max-h-[35vh] max-md:max-h-[35vh] overflow-y-scroll no-scrollbar overflow-hidden"
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
                            className="w-[57.5vw] max-sm:w-[70vw] max-md:w-[70vw] rounded-[.5vw] input-container outline-none resize px-[1vw] h-[5.5vh] max-sm:px-[1vw] max-sm:h-[3vh] max-md:px-[1vw] max-md:h-[3vh] absolute bottom-[1.7vh] max-sm:bottom-[1vh] max-md:bottom-[1vh] left-[1.5vw] text-[1vw] max-sm:text-[1.5vw] max-md:text-[1.4vw]"
                        />
                        <span
                            className="input-container w-[3.5vw] h-[5.5vh] max-sm:w-[6vw] max-sm:h-[3vh] max-md:w-[6vw] max-md:h-[3vh] rounded-[.5vw] flex justify-center items-center absolute right-[1.5vw] bottom-[1.7vh] max-sm:bottom-[1vh] max-md:bottom-[1vh] cursor-pointer"
                            onClick={handleArrowClick}
                        >
                            <BsSendFill className="check-icon text-[1vw] max-sm:text-[2vw] max-md:text-[1.4vw]" />
                        </span>
                    </div>
                </div>
            ) : (
                <div className="child-container-2">
                    <div className="container-2 font-satoshi text-white w-[65vw] h-[90vh] max-sm:w-[80vw] max-sm:h-[45vh] max-md:w-[80vw] max-md:h-[45vh] flex flex-col justify-center items-center relative overflow-hidden">
                        <div className="flex flex-col w-[30vw] p-[2vw] max-sm:w-[50vw] max-sm:h-[50vh] max-md:w-[40vw] max-md:h-[40vh] justify-center items-center object-cover overflow-hidden">
                            <img
                                src={noChat}
                                alt="nochat"
                                className="opacity-75"
                            />
                            <h1 className="font-normal font-satoshi text-center uppercase text-[1vw] max-sm:text-[2vw] max-md:text-[1.4vw]">
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
