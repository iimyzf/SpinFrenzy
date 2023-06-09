import { BsCheck } from "react-icons/bs";
import "./AddChannel.css";

const AddChannel = () => {
    return (
        <div className="pop-up">
            <div className="overlay">
                <div className="pop-up-container">
                    <div className="flex justify-center items-center relative">
                        <div className="add-channel w-[40em] h-[35em] text-white font-satoshi flex justify-center items-center">
                            <div className="w-[35em]">
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
                                            <a href="#">CANCEL</a>
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
    );
};

export default AddChannel;
