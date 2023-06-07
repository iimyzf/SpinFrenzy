import "./Chat.css";
import Apollo from "../assets/Apollo.jpg";
import { FiLogOut } from "react-icons/fi";
import { BsArrowRightShort } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";

const Chat = () => {
    return (
        <div className="parent flex justify-center items-center">
            <div className="child-container-1 pr-3">
                <div className="container-1 font-satoshi text-white w-[20em] h-[55em] flex flex-col justify-center items-center relative">
                    <h3 className="absolute top-8 uppercase font-bold">
                        Channels
                    </h3>
                    <span className="line absolute top-20"></span>
                    <a href="#">
                        <span className="plus-icon w-[4em] h-[4em] rounded-full absolute bottom-5 right-5 flex justify-center items-center">
                            <FiPlus className="text-3xl" />
                        </span>
                    </a>
                </div>
            </div>
            <div className="child-container-2 pl-3">
                <div className="container-2 font-satoshi text-white w-[80em] h-[55em] flex flex-col justify-center items-center relative">
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
    );
};

export default Chat;
