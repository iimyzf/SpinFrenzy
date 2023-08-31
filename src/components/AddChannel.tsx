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
                        <div className="add-channel w-[30em] text-white font-satoshi flex justify-center items-center overflow-y-scroll no-scrollbar overflow-hidden py-5">
                            <div className="pop-up w-[25em] flex flex-col gap-2">
                                <div className="flex flex-col items-center gap-4">
                                    <h3 className="text-[1em] uppercase font-semibold ">
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
                                            className="uploaded w-[10em] h-[10em] rounded-full bg-white cursor-pointer object-cover"
                                            alt="Selected"
                                        />
                                    </label>
                                </div>
                                <div className="flex flex-col items-start mt-5">
                                    <h3 className="text-[1em] uppercase">
                                        Channel Name
                                    </h3>
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        maxLength={42}
                                        className="w-full h-14 mt-2 rounded-[12px] input-container outline-none indent-5 text-[1.2em]"
                                    />
                                </div>
                                <div className="flex justify-between items-center ">
                                    <h3 className="text-[1em] uppercase">
                                        Private Channel
                                    </h3>
                                    <span
                                        className="check-span w-14 h-14 rounded-[12px] flex justify-center items-center cursor-pointer"
                                        onClick={handlePrivateCheck}
                                    >
                                        {isPrivate && (
                                            <BsCheck className="check-icon" />
                                        )}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center ">
                                    <h3 className="text-[1em] uppercase">
                                        Public Channel
                                    </h3>
                                    <span
                                        className="check-span w-14 h-14 rounded-[12px] flex justify-center items-center cursor-pointer"
                                        onClick={handlePublicCheck}
                                    >
                                        {isPublic && (
                                            <BsCheck className="check-icon" />
                                        )}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center ">
                                    <h3 className="text-[1em] uppercase">
                                        Protected Channel
                                    </h3>
                                    <span
                                        className="check-span w-14 h-14 rounded-[12px] flex justify-center items-center cursor-pointer"
                                        onClick={handleProtectedCheck}
                                    >
                                        {isProtected && (
                                            <BsCheck className="check-icon" />
                                        )}
                                    </span>
                                </div>
                                {isProtected && (
                                    <>
                                        <h3 className="text-[1em] uppercase">
                                            Password
                                        </h3>
                                        <input
                                            type="password"
                                            maxLength={42}
                                            className="w-full h-14 mt-2 rounded-[12px] input-container outline-none indent-5"
                                        />
                                    </>
                                )}
                                <div className="pt-8">
                                    <div className="child flex gap-8 justify-end items-end">
                                        <h3 className="text-[1em] font-light">
                                            <a
                                                className="cursor-pointer"
                                                onClick={togglePopup}
                                            >
                                                CANCEL
                                            </a>
                                        </h3>
                                        <h3 className="text-[1.4em] font-bold">
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
