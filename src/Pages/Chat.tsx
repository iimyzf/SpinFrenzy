import "./Chat.css";
import Apollo from "../assets/Apollo.jpg";
import { FiLogOut } from "react-icons/fi";
import { BsArrowRightShort, BsCheck } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";
import MessageContainer from "../components/MessageContainer";
// import AddChannel from "../components/AddChannel";

const Chat = () => {
    // const [channels, setChannels] = useState(["Channel 1"]);

    // const addChannel = () => {
    //     const newChannel = [...channels, `Channel ${channels.length + 1}`];
    //     setChannels(newChannel);
    // };

    const [popup, setPopup] = useState(false);

    const togglePopup = () => {
        setPopup(!popup);
    };

	popup ? document.body.classList.add("active-pop-up") : document.body.classList.remove("active-pop-up");

    return (
        <>
            <div className="parent flex justify-center items-center">
                <div className="child-container-1 pr-3">
                    <div className="container-1 font-satoshi text-white w-[20em] h-[55em] flex flex-col items-center relative ">
                        <h3 className="absolute top-7 uppercase font-bold">
                            Channels
                        </h3>
                        <span className="line absolute top-20"></span>
                        <span className="line absolute bottom-24"></span>
                        <a onClick={togglePopup}>
                            <span className="plus-icon w-[4em] h-[4em] rounded-full absolute bottom-4 right-5 flex justify-center items-center">
                                <FiPlus className="text-3xl" />
                            </span>
                        </a>
                        <div className="red-divs  h-[55em] w-full">
                            <div className="channel flex relative top-20 items-center px-5">
                                <img
                                    className="apollo w-[2.5em] h-[2.5em] rounded-full"
                                    src={Apollo}
                                    alt="Apollo"
                                />
                                <h4 className="font-medium ml-3 uppercase">
                                    Channel 1
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="child-container-2 pl-3">
                    <div className="container-2 font-satoshi text-white w-[80em] h-[55em] flex flex-col justify-center items-start relative left-10">
                        <img
                            className="apollo w-[2.5em] h-[2.5em] rounded-full absolute top-5 left-10"
                            src={Apollo}
                            alt="Apollo"
                        />
                        <h3 className="absolute top-7 uppercase font-bold left-24">
                            Chat
                        </h3>
                        <a href="#">
                            <FiLogOut className="absolute top-7 right-10 text-2xl" />
                        </a>
                        <span className="line absolute top-20"></span>
                        <span className="line absolute bottom-24"></span>
                        <MessageContainer />
                        <MessageContainer />
                        <MessageContainer />
                        <input
                            type="text"
                            className="msg rounded-[12px] input-container outline-none indent-5 h-14 absolute bottom-5 left-10"
                        />
                        <a href="#">
                            <span className="check-span w-14 h-14 rounded-[12px] flex justify-center items-center absolute right-10 bottom-5">
                                <BsArrowRightShort class="check-icon" />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            {popup && (
                <div className="pop-up">
                    <div className="overlay" onClick={togglePopup}>
                        <div className="pop-up-container">
                            <div className="flex justify-center items-center relative">
                                <div className="add-channel w-[40em] h-[35em] text-white font-satoshi flex justify-center items-center">
                                    <div className="pop-up w-[35em]">
                                        <h3 className="uppercase font-medium">
                                            Channel Name
                                        </h3>
                                        <input
                                            type="text"
                                            maxLength={42}
                                            className="w-full h-14 mt-2 rounded-[12px] input-container outline-none indent-5"
                                        />
                                        <div className="flex justify-between items-center my-5 ">
                                            <h3 className="uppercase font-medium">
                                                Public Channel
                                            </h3>
                                            <a href="#">
                                                <span className="check-span w-14 h-14 rounded-[12px] flex justify-center items-center">
                                                    <BsCheck class="check-icon" />
                                                </span>
                                            </a>
                                        </div>
                                        <div className="flex justify-between items-center my-5 ">
                                            <h3 className="uppercase font-medium">
                                                Private Channel
                                            </h3>
                                            <a href="#">
                                                <span className="check-span w-14 h-14 rounded-[12px] flex justify-center items-center">
                                                    <BsCheck class="check-icon" />
                                                </span>
                                            </a>
                                        </div>
                                        <h3 className="uppercase font-medium">
                                            Password
                                        </h3>
                                        <input
                                            type="text"
                                            maxLength={42}
                                            className="w-full h-14 mt-2 rounded-[12px] input-container outline-none indent-5"
                                        />
                                        <div className="pt-12">
                                            <div className="child flex gap-8 justify-end items-end">
                                                <h3 className="font-light">
                                                    <a className=" cursor-pointer" onClick={togglePopup}>CANCEL</a>
                                                </h3>
                                                <h3 className="font-bold text-xl">
                                                    <a href="#">SAVE</a>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Chat;
