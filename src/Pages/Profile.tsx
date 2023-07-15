import "./Profile.css";
import { BsGithub, BsInstagram, BsLinkedin, BsCheck } from "react-icons/bs";
import Apollo from "../assets/Apollo.jpg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
    const [image, setImage] = useState<File | null>(null);
    const [username, setUsername] = useState("username");
    const [fullName, setFullName] = useState("fullName");
    const [github, setGithub] = useState("github");
    const [linkedin, setLinkedin] = useState("linkedin");
    const [instagram, setInstagram] = useState("instagram");
    const [isChecked, setIsChecked] = useState<Record<string, boolean>>({});
    const [online, setOnline] = useState(false);
    const [bio, setBio] = useState(
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, quis quae nulla optio suscipit libero excepturi omnis cum, quidem cupiditate asperioresodio quam! Distinctio nesciunt soluta quam quas accusamus minus? Lorem ipsum dolor sit amet consectetured"
    );
    const [isBioEditing, setIsBioEditing] = useState(false);

    const handleBioEdit = () => {
        setIsBioEditing(!isBioEditing);
    };

    const handleBioChange = (e: any) => {
        setBio(e.target.value);
    };

    const handleBioSave = () => {
        // Save the bio here (e.g., send it to the server)
        setIsBioEditing(false);
    };

    const handleCheck = (field: string) => {
        setIsChecked((prevState) => ({
            ...prevState,
            [field]: !prevState[field],
        }));
    };

    const handleOnline = () => {
        setOnline(!online);
    };

    const handleGithubChange = (e: any) => {
        setGithub(e.target.value);
    };

    const handleLinkedinChange = (e: any) => {
        setLinkedin(e.target.value);
    };

    const handleInstagramChange = (e: any) => {
        setInstagram(e.target.value);
    };

    const handleUsernameChange = (e: any) => {
        setUsername(e.target.value);
    };

    const handleFullNameChange = (e: any) => {
        setFullName(e.target.value);
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        setImage(file);
    };

    const navigate = useNavigate();

    return (
        <div className="parent flex xs:flex-col xl:flex-row justify-center items-center xs:gap-5 xl:gap-0 xs:m-5 xl:m-0">
            <div className="child-container-1 xl:h-screen xl:pr-3">
                <div className="container-1 font-satoshi text-white xs:w-[20em] xs:h-[35em] xl:w-[20em] xl:h-[55em] flex flex-col justify-center items-center relative">
                    <div className="img-holder absolute xs:top-[3em] xl:top-[8em]">
                        <label htmlFor="imageInput">
                            <img
                                className="xs:w-[6em] xs:h-[6em] xl:w-[8em] xl:h-[8em] rounded-full cursor-pointer"
                                src={
                                    image ? URL.createObjectURL(image) : Apollo
                                }
                                alt="Apollo"
                            />
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                            id="imageInput"
                        />
                        <span
                            onClick={handleOnline}
                            className={`status rounded-full xs:w-[1.3em] xs:h-[1.3em] xl:w-[1.8em] xl:h-[1.8em] absolute top-1 right-1 ${
                                online ? "bg-green-400" : "bg-gray-400"
                            }`}
                        ></span>
                    </div>
                    <h4 className="font-light absolute xs:top-[10em] xl:top-[18em] opacity-80">
                        @{username}
                    </h4>
                    <h3 className="font-bold absolute xs:top-[11.5em] xl:top-[19.5em]">
                        {fullName}
                    </h3>
                    <div className="bio absolute xs:top-[14em] xl:top-[22em] justify-center items-start">
                        {isBioEditing ? (
                            <>
                                <textarea
                                    className="flex font-light w-[16em] leading-5 text-start custom-textarea"
                                    value={bio}
                                    maxLength={256}
                                    onChange={handleBioChange}
                                />
                                <button
                                    onClick={handleBioSave}
                                    className="float-right font-medium underline"
                                >
                                    save
                                </button>
                            </>
                        ) : (
                            <>
                                <p className="font-light w-[16em] leading-5 text-start">
                                    {bio}
                                </p>
                                <button
                                    className="float-right mt-5 font-medium underline"
                                    onClick={handleBioEdit}
                                >
                                    edit bio
                                </button>
                            </>
                        )}
                    </div>

                    <ul className="flex gap-5 absolute xs:bottom-14 xl:bottom-20">
                        <li>
                            <a href={github} target="_blank">
                                <BsGithub />
                            </a>
                        </li>
                        <li>
                            <a href={linkedin} target="_blank">
                                <BsLinkedin />
                            </a>
                        </li>
                        <li>
                            <a href={instagram} target="_blank">
                                <BsInstagram />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="child-container-2 xl:h-screen xl:pl-3">
                <div className="container-2 font-satoshi text-white xs:w-[20em] xs:h-[45em] xl:w-[80em] xl:h-[55em] flex flex-col justify-center items-center">
                    <div className="editable">
                        <h3 className="pb-3">USERNAME</h3>
                        <div className="flex gap-5">
                            <input
                                onChange={handleUsernameChange}
                                type="text"
                                maxLength={24}
                                className="xs:w-[17em] xs:h-10 xl:w-[65em] xl:h-14 rounded-[12px] input-container outline-none indent-5"
                            />
                        </div>
                    </div>
                    <div className="editable pt-8">
                        <h3 className="pb-3">FULL NAME</h3>
                        <div className="flex gap-5">
                            <input
                                onChange={handleFullNameChange}
                                type="text"
                                maxLength={42}
                                className="xs:w-[17em] xs:h-10 xl:w-[65em] xl:h-14 rounded-[12px] input-container outline-none indent-5"
                            />
                        </div>
                    </div>
                    <div className="editable pt-8">
                        <h3 className="pb-3">EMAIL ADDRESS</h3>
                        <div className="flex gap-5">
                            <input
                                type="email"
                                maxLength={42}
                                className="xs:w-[17em] xs:h-10 xl:w-[65em] xl:h-14 rounded-[12px] input-container outline-none indent-5"
                            />
                        </div>
                    </div>
                    <div className="editable pt-8">
                        <h3 className="pb-3">SOCIAL LINKS</h3>
                        <div className="xs:flex-col xl:flex-row flex">
                            <span className="xs:hidden check-span xl:w-[8.6em] xl:h-14 rounded-[12px] mr-5 xl:flex justify-center items-center font-medium uppercase">
                                GitHub
                            </span>
                            <div className="pew flex gap-5 xs:justify-center">
                                <input
                                    onChange={handleGithubChange}
                                    type="link"
                                    className="xs:w-[17em] xs:h-10 xl:w-[55em] xl:h-14 rounded-[12px] input-container outline-none indent-5"
                                />
                            </div>
                        </div>
                        <div className="xs:flex-col xl:flex-row flex pt-5">
                            <span className="xs:hidden check-span xl:w-[8.6em] xl:h-14 rounded-[12px] mr-5 xl:flex justify-center items-center font-medium uppercase">
                                LinkedIn
                            </span>
                            <div className="pew flex gap-5 xs:justify-center">
                                <input
                                    onChange={handleLinkedinChange}
                                    type="link"
                                    className="xs:w-[17em] xs:h-10 xl:w-[55em] xl:h-14 rounded-[12px] input-container outline-none indent-5"
                                />
                            </div>
                        </div>
                        <div className="xs:flex-col xl:flex-row flex pt-5">
                            <span className="xs:hidden check-span xl:w-[8.6em] xl:h-14 rounded-[12px] mr-5 xl:flex justify-center items-center font-medium uppercase">
                                Instagram
                            </span>
                            <div className="pew flex gap-5 xs:justify-center">
                                <input
                                    onChange={handleInstagramChange}
                                    type="link"
                                    className="xs:w-[17em] xs:h-10 xl:w-[55em] xl:h-14 rounded-[12px] input-container outline-none indent-5"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="pt-12 xl:w-[65em]">
                        <div className="child flex gap-8 justify-end items-end">
                            <h3 className="font-light">
                                <a
                                    className=" hover:cursor-pointer"
                                    onClick={() => navigate(-1)}
                                >
                                    CANCEL
                                </a>
                            </h3>
                            <h3 className="font-bold text-xl">
                                <Link to="/chat">SAVE</Link>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
