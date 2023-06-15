import { BsCheck } from "react-icons/bs";
import "./AddChannel.css";
import { useState } from "react";
import Apollo from "../assets/Apollo.jpg";

type Props = {
    togglePopup: () => void;
    addChannel: (channelName: string) => void;
	setImage: (image: File | null) => void;
};

const AddChannel = ({ togglePopup, addChannel, setImage }: Props) => {
    const [channelName, setChannelName] = useState("");
    const [isPublic, setIsPublic] = useState(false);
    const [isPrivate, setIsPrivate] = useState(false);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    const handleChange = (e: any) => {
        setChannelName(e.target.value);
    };

    const handleSave = () => {
        if (channelName !== "" && (isPublic || isPrivate)) {
            addChannel(channelName);
			setImage(selectedImage);
            setChannelName("");
            setSelectedImage(null);
            togglePopup();
        }
    };

    const handlePublicCheck = () => {
        setIsPublic(!isPublic);
        setIsPrivate(false); // Uncheck private channel checkbox
    };

    const handlePrivateCheck = () => {
        setIsPrivate(!isPrivate);
        setIsPublic(false); // Uncheck public channel checkbox
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
                        <div className="add-channel w-[40em] h-[45em] text-white font-satoshi flex justify-center items-center">
                            <div className="pop-up w-[35em]">
                                <div className="pb-9 flex flex-col items-center gap-3">
                                    <h3 className="uppercase font-semibold ">
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
                                            className="uploaded w-[10em] h-[10em] rounded-full bg-white cursor-pointer"
                                            alt="Selected"
                                        />
                                    </label>
                                </div>
                                <h3 className="uppercase">Channel Name</h3>
                                <input
                                    onChange={handleChange}
                                    type="text"
                                    maxLength={42}
                                    className="w-full h-14 mt-2 rounded-[12px] input-container outline-none indent-5"
                                />
                                <div className="flex justify-between items-center my-5 ">
                                    <h3 className="uppercase">
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
                                <div className="flex justify-between items-center my-5 ">
                                    <h3 className="uppercase">
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
                                {isPrivate && (
                                    <>
                                        <h3 className="uppercase">Password</h3>
                                        <input
                                            type="password"
                                            maxLength={42}
                                            className="w-full h-14 mt-2 rounded-[12px] input-container outline-none indent-5"
                                        />
                                    </>
                                )}
                                <div className="pt-8">
                                    <div className="child flex gap-8 justify-end items-end">
                                        <h3 className="font-light">
                                            <a
                                                className="cursor-pointer"
                                                onClick={togglePopup}
                                            >
                                                CANCEL
                                            </a>
                                        </h3>
                                        <h3 className="font-bold text-xl">
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
