import "./Chat.css";
import Apollo from "../assets/Apollo.jpg";
import { FiLogOut } from "react-icons/fi";
import { BsArrowRightShort } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";
import MessageContainer from "../components/MessageContainer";
import "../components/AddChannel.css";
import AddChannel from "../components/AddChannel";

const Chat = () => {
    const [channels, setChannels] = useState<
        { name: string; img: File | null }[]
    >([]);

    const [inputValue, setInputValue] = useState("");
    const [messages, setMessages] = useState<string[]>([]);
    const [selectedChannel, setSelectedChannel] = useState<{
        name: string;
        img: File | null;
    } | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleArrowClick = () => {
        if (inputValue.trim() !== "") {
            setMessages((prevMessages) => [...prevMessages, inputValue.trim()]);
            setInputValue("");
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleArrowClick();
        }
    };

    const addChannel = (currentChannel: { name: string; img: File | null }) => {
        const newChannel = [...channels, currentChannel];
        setChannels(newChannel);
    };

    const [popup, setPopup] = useState(false);
    const togglePopup = () => {
        setPopup(!popup);
    };

    return (
        <div className="parent flex xs:flex-col xl:flex-row justify-center items-center xs:gap-5 xl:gap-0 xs:m-5 xl:m-0">
            <div className="child-container-1 xl:h-screen xl:pr-3">
                <div className="container-1 font-satoshi text-white xs:w-[20em] xs:h-[35em] xl:w-[20em] xl:h-[55em] flex flex-col justify-center items-center relative">
                    <h3 className="absolute xs:top-5 xl:top-7 uppercase font-bold">
                        Channels
                    </h3>
                    <span className="line absolute xs:top-16 xl:top-20"></span>
                    <span className="line absolute xs:bottom-16 xl:bottom-24"></span>
                    <a onClick={togglePopup}>
                        <span className="plus-icon xs:w-[2em] xs:h-[2em] xl:w-[4em] xl:h-[4em] rounded-full absolute bottom-4 right-5 flex justify-center items-center cursor-pointer">
                            <FiPlus className="xl:text-3xl" />
                        </span>
                    </a>
                    <div className="red-divs xs:h-[27em] xl:h-[44em] w-full overflow-y-auto xl:mb-4">
                        {channels.map((channel, idx) => (
                            <div
                                key={idx}
                                className={`channel flex relative xs:top-[1px] xl:top-0 items-center px-5 scroll-auto xs:h-16 xl:h-20 hover:cursor-pointer ${
                                    selectedChannel === channel
                                        ? "active-channel"
                                        : ""
                                }`}
                                onClick={() => setSelectedChannel(channel)}
                            >
                                <img
                                    className="apollo xs:w-[1.8em] xs:h-[1.8em] xl:w-[2.5em] xl:h-[2.5em] rounded-full object-cover"
                                    src={
                                        channel.img
                                            ? URL.createObjectURL(channel.img)
                                            : Apollo
                                    }
                                    alt="Apollo"
                                />
                                <h4 className="font-medium ml-3 uppercase">
                                    {channel.name}
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="child-container-2 pl-3">
                <div className="container-2 font-satoshi text-white w-[80em] h-[55em] flex flex-col justify-center items-start relative overflow-hidden">
                    <img
                        className="apollo w-[2.5em] h-[2.5em] rounded-full absolute top-5 left-10 object-cover"
                        src={
                            selectedChannel?.img
                                ? URL.createObjectURL(selectedChannel?.img)
                                : Apollo
                        }
                        alt="Apollo"
                    />
                    <h3 className="absolute top-7 uppercase font-bold left-24">
                        {selectedChannel?.name || "Create a channel"}
                    </h3>
                    <a href="#">
                        <FiLogOut className="absolute top-7 right-10 text-2xl" />
                    </a>
                    <span className="line absolute top-20"></span>
                    <span className="line absolute bottom-24"></span>
                    <div className="h-[44em] w-full overflow-y-auto mb-3 pl-10">
                        <div className="max-h-[43.8em] overflow-y-auto">
                            {messages.map((message, idx) => (
                                <MessageContainer key={idx} message={message} />
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
                        className="msg rounded-[12px] input-container outline-none resize px-5 h-14 absolute bottom-5 left-10"
                    />
                    <span
                        className="check-span w-14 h-14 rounded-[12px] flex justify-center items-center absolute right-10 bottom-5"
                        onClick={handleArrowClick}
                    >
                        <BsArrowRightShort className="check-icon" />
                    </span>
                </div>
            </div>
            {popup && (
                <AddChannel togglePopup={togglePopup} addChannel={addChannel} />
            )}
        </div>
    );
};

export default Chat;
