import "./Profile.css";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
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
    // const [isChecked, setIsChecked] = useState<Record<string, boolean>>({});
    const [online, setOnline] = useState(false);
    const [bio, setBio] = useState(
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, quis quae nulla optio suscipit libero excepturi omnis cum, quidem cupiditate asperioresodio quam! Distinctio nesciunt soluta quam quas accusamus minus? Lorem ipsum dolor sit amet consectetured"
    );
    const [isBioEditing, setIsBioEditing] = useState(false);
    const [isAuthOn, setIsAuthOn] = useState(false);
    const [isAuthOff, setIsAuthOff] = useState(false);

    const handleAuthOn = () => {
        console.log("it on now!");
        setIsAuthOn(!isAuthOn);
    };

    const handleAuthOff = () => {
        console.log("it off now!");
        setIsAuthOff(!isAuthOff);
    };

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

    // const handleCheck = (field: string) => {
    //     setIsChecked((prevState) => ({
    //         ...prevState,
    //         [field]: !prevState[field],
    //     }));
    // };

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
        <div className="parent flex justify-center items-center gap-[1.2vw] h-screen max-sm:flex-col max-sm:my-[2vh]">
            <div className="child-container-1">
                <div className="container-1 font-satoshi text-white w-[16vw] h-[90vh] max-sm:w-[80vw] max-sm:h-[40vh] flex flex-col justify-center items-center relative">
                    <div className="img-holder absolute top-[6vw]">
                        <label htmlFor="imageInput">
                            <img
                                className="w-[6vw] h-[6vw] max-sm:w-[14vw] max-sm:h-[14vw] rounded-full cursor-pointer"
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
                            className={`status rounded-full w-[1.4vw] h-[1.4vw] max-sm:w-[4vw] max-sm:h-[4vw] absolute top-0 right-[.5vw] ${
                                online ? "bg-green-400" : "bg-gray-400"
                            }`}
                        ></span>
                    </div>
                    <h4 className="font-light absolute top-[13vw] max-sm:top-[22vw] opacity-80 text-[.8vw] max-sm:text-[1.8vw]">
                        @{username}
                    </h4>
                    <h3 className="font-bold absolute top-[14.2vw] max-sm:top-[24.5vw] text-[1vw] max-sm:text-[2.4vw]">
                        {fullName}
                    </h3>
                    <div className="bio absolute top-[18vw] max-sm:top-[30vw] justify-center items-start mx-[1.2vw] max-sm:mx-[4vw] text-[.8vw] max-sm:text-[1.5vw]">
                        {isBioEditing ? (
                            <>
                                <textarea
                                    className="flex font-normal w-full text-start custom-textarea text-[.9vw] max-sm:text-[2vw] max-sm:w-[72vw] max-sm:h-[12vw]"
                                    value={bio}
                                    maxLength={200}
                                    onChange={handleBioChange}
                                />
                                <button
                                    onClick={handleBioSave}
                                    className="float-right mt-[1vw] max-sm:mt-[1.5vw] font-medium underline"
                                >
                                    save
                                </button>
                            </>
                        ) : (
                            <>
                                <p className="font-normal w-full text-start text-[.9vw] max-sm:text-[2vw]">
                                    {bio}
                                </p>
                                <button
                                    className="float-right mt-[1vw] max-sm:mt-[1.5vw] font-medium underline"
                                    onClick={handleBioEdit}
                                >
                                    edit bio
                                </button>
                            </>
                        )}
                    </div>

                    <ul className="flex gap-[2vw] max-sm:gap-[4vw] absolute bottom-[6vw]">
                        <li>
                            <a href={github} target="_blank">
                                <BsGithub className="text-[1vw] max-sm:text-[2.5vw]" />
                            </a>
                        </li>
                        <li>
                            <a href={linkedin} target="_blank">
                                <BsLinkedin className="text-[1vw] max-sm:text-[2.5vw]" />
                            </a>
                        </li>
                        <li>
                            <a href={instagram} target="_blank">
                                <BsInstagram className="text-[1vw] max-sm:text-[2.5vw]" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="child-container-2">
                <div className="container-2 font-satoshi text-white w-[65vw] h-[90vh] max-sm:w-[80vw] max-sm:h-[60vh] flex flex-col justify-center items-center">
                    <div className="flex justify-center items-center gap-[1vw] max-sm:gap-[3vw] max-sm:flex-col max-sm:w-full">
                        <div className="editable w-full max-sm:px-[3vw]">
                            <h3 className="text-[1vw] max-sm:text-[2.2vw] font-satoshi font-medium uppercase">
                                username
                            </h3>
                            <div className="flex mt-[.5vw]">
                                <input
                                    onChange={handleUsernameChange}
                                    type="text"
                                    maxLength={24}
                                    className="w-[24vw] h-[3vw] max-sm:h-[3vh] rounded-[.6vw] input-container outline-none indent-[1vw] max-sm:w-full max-sm:text-[2vw]"
                                />
                            </div>
                        </div>
                        <div className="editable w-full max-sm:px-[3vw]">
                            <h3 className="text-[1vw] max-sm:text-[2.2vw] font-satoshi font-medium uppercase">
                                full name
                            </h3>
                            <div className="flex mt-[.5vw]">
                                <input
                                    onChange={handleFullNameChange}
                                    type="text"
                                    maxLength={24}
                                    className="w-[24vw] h-[3vw] max-sm:h-[3vh] rounded-[.6vw] input-container outline-none indent-[1vw] max-sm:w-full max-sm:text-[2vw]"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="editable flex flex-col mt-[2.5vw] max-sm:mt-[5vw] max-sm:w-full">
                        <h3 className="text-[1vw] max-sm:text-[2.2vw] font-satoshi font-medium max-sm:pl-[2.8vw] uppercase">
                            social links
                        </h3>
                        <div className="flex gap-[1vw] mt-[1vw] max-sm:px-[2.8vw]">
                            <span className="check-span w-[6vw] h-[3vw] rounded-[.6vw] text-[1vw] flex justify-center items-center font-normal max-sm:hidden">
                                github
                            </span>
                            <div className="flex max-sm:w-full">
                                <input
                                    onChange={handleGithubChange}
                                    type="link"
                                    className="w-[42vw] max-sm:w-full h-[3vw] max-sm:h-[3vh] rounded-[.6vw] input-container outline-none indent-[1vw] max-sm:text-[2vw]"
                                />
                            </div>
                        </div>
                        <div className="flex gap-[1vw] mt-[1vw] max-sm:px-[2.8vw]">
                            <span className="check-span w-[6vw] h-[3vw] rounded-[.6vw] text-[1vw] flex justify-center items-center font-normal max-sm:hidden">
                                linkedin
                            </span>
                            <div className="flex max-sm:w-full">
                                <input
                                    onChange={handleLinkedinChange}
                                    type="link"
                                    className="w-[42vw] max-sm:w-full h-[3vw] max-sm:h-[3vh] rounded-[.6vw] input-container outline-none indent-[1vw] max-sm:text-[2vw]"
                                />
                            </div>
                        </div>
                        <div className="flex gap-[1vw] mt-[1vw] max-sm:px-[2.8vw]">
                            <span className="check-span w-[6vw] h-[3vw] rounded-[.6vw] text-[1vw] flex justify-center items-center font-normal max-sm:hidden">
                                instagram
                            </span>
                            <div className="flex max-sm:w-full">
                                <input
                                    onChange={handleInstagramChange}
                                    type="link"
                                    className="w-[42vw] max-sm:w-full h-[3vw] max-sm:h-[3vh] rounded-[.6vw] input-container outline-none indent-[1vw] max-sm:text-[2vw]"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-[2.5vw] max-sm:mt-[6vw] w-[49vw] max-sm:w-full max-sm:px-[2.8vw]">
                        <span className="text-[1vw] max-sm:text-[2.2vw] font-medium font-satoshi uppercase">
                            enable 2 factor authentication
                        </span>
                        <div className="containerr">
                            <div className="switches-container">
                                <input
                                    type="radio"
                                    id="switchOn"
                                    name="switchPlan"
                                    value="On"
                                    checked={true}
                                />
                                <input
                                    type="radio"
                                    id="switchOff"
                                    name="switchPlan"
                                    value="Off"
                                />
                                <label
                                    htmlFor="switchOn"
                                    onClick={handleAuthOn}
                                >
                                    ON
                                </label>
                                <label
                                    htmlFor="switchOff"
                                    onClick={handleAuthOff}
                                >
                                    OFF
                                </label>
                                <div className="switch-wrapper">
                                    <div className="switch"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[3vw] max-sm:mt-[8vw] w-[49vw] max-sm:w-full max-sm:pr-[2.8vw]">
                        <div className="child flex gap-[4vw] justify-end items-center">
                            <h3 className="font-light text-[1vw] max-sm:text-[2.5vw]">
                                <a
                                    className=" hover:cursor-pointer"
                                    onClick={() => navigate(-1)}
                                >
                                    CANCEL
                                </a>
                            </h3>
                            <h3 className="font-bold text-[1.3vw] max-sm:text-[3vw]">
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
