import { BsCheck } from "react-icons/bs";
import { useState } from "react";
import Apollo from "../assets/Apollo.jpg";
import "./AddChannel.css";

type Props = {
    togglePopup: () => void;
    addChannel: (channelProps: { name: string; img: File | null }) => void;
};

const AddChannel = ({ togglePopup, addChannel }: Props) => {
    const [channelName, setChannelName] = useState("");
    const [isPublic, setIsPublic] = useState(false);
    const [isPrivate, setIsPrivate] = useState(false);
    const [isProtected, setIsProtected] = useState(false);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    const handleChange = (e: any) => {
        setChannelName(e.target.value);
    };

    const handleSave = () => {
        if (channelName !== "" && (isPublic || isPrivate || isProtected)) {
            addChannel({ name: channelName, img: selectedImage });
            setChannelName("");
            setSelectedImage(null);
            togglePopup();
        }
    };

    const handlePublicCheck = () => {
        setIsPublic(!isPublic);
        setIsPrivate(false);
        setIsProtected(false);
    };

    const handlePrivateCheck = () => {
        setIsPrivate(!isPrivate);
        setIsPublic(false);
        setIsProtected(false);
    };

    const handleProtectedCheck = () => {
        setIsProtected(!isProtected);
        setIsPublic(false);
        setIsPrivate(false);
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        setSelectedImage(file);
    };

    return (
        <div className="pop-up">
            <div className="overlay">
                <div className="pop-up-container">
                    <div className="flex justify-center items-center relative">
                        <div className="add-channel w-[30em] max-sm:w-[80vw] text-white font-satoshi flex justify-center items-center overflow-y-scroll no-scrollbar overflow-hidden py-[2vh]">
                            <div className="pop-up w-[25em] max-sm:w-full flex flex-col gap-[.5vw] max-sm:gap-[2vw] max-sm:mx-[4vw]">
                                <div className="flex flex-col items-center gap-[.5vw] max-sm:gap-[2.5vw]">
                                    <h3 className="text-[1em] uppercase font-semibold max-sm:text-[3vw]">
                                        Add a new Channel
                                    </h3>
                                    <label
                                        htmlFor="imageInput"
                                        className=" label"
                                    >
                                        <img
                                            src={
                                                selectedImage
                                                    ? URL.createObjectURL(
                                                          selectedImage
                                                      )
                                                    : Apollo
                                            }
                                            className="uploaded w-[8vw] h-[8vw] max-sm:w-[25vw] max-sm:h-[25vw] rounded-full bg-white cursor-pointer object-cover"
                                            alt="Selected"
                                        />
                                    </label>
                                </div>
                                <div className="flex flex-col items-start mt-[1vw]">
                                    <h3 className="text-[1em] uppercase max-sm:text-[3vw]">
                                        Channel Name
                                    </h3>
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        maxLength={25}
                                        className="w-full h-14 mt-2 max-sm:w-full max-sm:h-[5vh] rounded-[.5vw] max-sm:rounded-[1.2vw] input-container outline-none indent-[1vw] text-[1vw] max-sm:text-[3vw]"
                                    />
                                </div>
                                <div className="flex justify-between items-center ">
                                    <h3 className="text-[1em] uppercase max-sm:text-[3vw]">
                                        Private Channel
                                    </h3>
                                    <span
                                        className="check-span w-[3.5vw] h-[3.5vw] max-sm:w-[12vw] max-sm:h-[12vw] rounded-[.5vw] max-sm:rounded-[1.2vw] flex justify-center items-center cursor-pointer"
                                        onClick={handlePrivateCheck}
                                    >
                                        {isPrivate && (
                                            <BsCheck className="check-icon text-[1.5vw] max-sm:text-[5vw]" />
                                        )}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center ">
                                    <h3 className="text-[1em] uppercase max-sm:text-[3vw]">
                                        Public Channel
                                    </h3>
                                    <span
                                        className="check-span w-[3.5vw] h-[3.5vw] max-sm:w-[12vw] max-sm:h-[12vw] rounded-[.5vw] max-sm:rounded-[1.2vw] flex justify-center items-center cursor-pointer"
                                        onClick={handlePublicCheck}
                                    >
                                        {isPublic && (
                                            <BsCheck className="check-icon text-[1.5vw] max-sm:text-[5vw]" />
                                        )}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center ">
                                    <h3 className="text-[1em] uppercase max-sm:text-[3vw]">
                                        Protected Channel
                                    </h3>
                                    <span
                                        className="check-span w-[3.5vw] h-[3.5vw] max-sm:w-[12vw] max-sm:h-[12vw] rounded-[.5vw] max-sm:rounded-[1.2vw] flex justify-center items-center cursor-pointer"
                                        onClick={handleProtectedCheck}
                                    >
                                        {isProtected && (
                                            <BsCheck className="check-icon text-[1.5vw] max-sm:text-[5vw]" />
                                        )}
                                    </span>
                                </div>
                                {isProtected && (
                                    <>
                                        <h3 className="text-[1em] uppercase max-sm:text-[3vw]">
                                            Password
                                        </h3>
                                        <input
                                            type="password"
                                            maxLength={42}
                                            className="w-full h-14 mt-2 max-sm:w-full max-sm:h-[5vh] rounded-[.5vw] max-sm:rounded-[1.2vw] input-container outline-none indent-[1vw] text-[1vw] max-sm:text-[3vw]"
                                        />
                                    </>
                                )}
                                <div className="pt-[1vw] max-sm:pt-[.5vw]">
                                    <div className="child flex gap-[2vw] max-sm:gap-[8vw] justify-end items-end">
                                        <h3 className="text-[1vw] font-light max-sm:text-[3.5vw]">
                                            <a
                                                className="cursor-pointer"
                                                onClick={togglePopup}
                                            >
                                                CANCEL
                                            </a>
                                        </h3>
                                        <h3 className="text-[1.4vw] font-bold max-sm:text-[4.5vw]">
                                            <a
                                                className="cursor-pointer"
                                                onClick={handleSave}
                                            >
                                                SAVE
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="hidden"
                                    id="imageInput"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddChannel;
