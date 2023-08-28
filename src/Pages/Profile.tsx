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
        <div className="parent flex justify-center items-center gap-[1.2vw] h-screen">
            <div className="child-container-1">
                <div className="container-1 font-satoshi text-white w-[18vw] h-[50vw] flex flex-col justify-center items-center relative">
                    <div className="img-holder absolute top-[8vw]">
                        <label htmlFor="imageInput">
                            <img
                                className="w-[8vw] h-[8vw] rounded-full cursor-pointer"
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
                            className={`status rounded-full w-[1.8vw] h-[1.8vw] absolute top-0 right-[.5vw] ${
                                online ? "bg-green-400" : "bg-gray-400"
                            }`}
                        ></span>
                    </div>
                    <h4 className="font-light absolute top-[17.5vw] opacity-80 text-[1vw]">
                        @{username}
                    </h4>
                    <h3 className="font-bold absolute top-[18.8vw] text-[1.1vw]">
                        {fullName}
                    </h3>
                    <div className="bio absolute top-[21.5vw] justify-center items-start mx-[1vw] text-[1vw]">
                        {isBioEditing ? (
                            <>
                                <textarea
                                    className="flex font-normal w-full text-start custom-textarea text-[1vw]"
                                    value={bio}
                                    maxLength={200}
                                    onChange={handleBioChange}
                                />
                                <button
                                    onClick={handleBioSave}
                                    className="float-right mt-[1vw] font-medium underline"
                                >
                                    save
                                </button>
                            </>
                        ) : (
                            <>
                                <p className="font-normal w-full text-start text-[1vw]">
                                    {bio}
                                </p>
                                <button
                                    className="float-right mt-[1vw] font-medium underline"
                                    onClick={handleBioEdit}
                                >
                                    edit bio
                                </button>
                            </>
                        )}
                    </div>

                    <ul className="flex gap-[2vw] absolute bottom-[5vw]">
                        <li>
                            <a href={github} target="_blank">
                                <BsGithub className="text-[1.2vw]" />
                            </a>
                        </li>
                        <li>
                            <a href={linkedin} target="_blank">
                                <BsLinkedin className="text-[1.2vw]" />
                            </a>
                        </li>
                        <li>
                            <a href={instagram} target="_blank">
                                <BsInstagram className="text-[1.2vw]" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="child-container-2">
                <div className="container-2 font-satoshi text-white w-[70vw] h-[50vw] flex flex-col justify-center items-center">
                    <div className="flex justify-center items-center gap-[1vw]">
                        <div className="editable">
                            <h3 className="text-[1.2vw] font-satoshi font-medium">
                                username
                            </h3>
                            <div className="flex mt-[.5vw]">
                                <input
                                    onChange={handleUsernameChange}
                                    type="text"
                                    maxLength={24}
                                    className="w-[30vw] h-[3vw] rounded-[.6vw] input-container outline-none indent-[1vw]"
                                />
                            </div>
                        </div>
                        <div className="editable">
                            <h3 className="text-[1.2vw] font-satoshi font-medium">
                                full name
                            </h3>
                            <div className="flex mt-[.5vw]">
                                <input
                                    onChange={handleFullNameChange}
                                    type="text"
                                    maxLength={24}
                                    className="w-[30vw] h-[3vw] rounded-[.6vw] input-container outline-none indent-[1vw]"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="editable flex flex-col gap[1vw] mt-[2.5vw]">
                        <h3 className="text-[1.2vw] pb3 font-satoshi font-medium">
                            social links
                        </h3>
                        <div className="flex gap-[1vw] mt-[1vw]">
                            <span className="check-span w-[8vw] h-[3vw] rounded-[.6vw] text-[1vw] flex justify-center items-center font-medium">
                                github
                            </span>
                            <div className="flex">
                                <input
                                    onChange={handleGithubChange}
                                    type="link"
                                    className="w-[52vw] h-[3vw] rounded-[.6vw] input-container outline-none indent-[1vw]"
                                />
                            </div>
                        </div>
                        <div className="flex gap-[1vw] mt-[1vw]">
                            <span className="check-span w-[8vw] h-[3vw] rounded-[.6vw] text-[1vw] flex justify-center items-center font-medium">
                                linkedin
                            </span>
                            <div className="flex">
                                <input
                                    onChange={handleLinkedinChange}
                                    type="link"
                                    className="w-[52vw] h-[3vw] rounded-[.6vw] input-container outline-none indent-[1vw]"
                                />
                            </div>
                        </div>
                        <div className="flex gap-[1vw] mt-[1vw]">
                            <span className="check-span w-[8vw] h-[3vw] rounded-[.6vw] text-[1vw] flex justify-center items-center font-medium">
                                instagram
                            </span>
                            <div className="flex">
                                <input
                                    onChange={handleInstagramChange}
                                    type="link"
                                    className="w-[52vw] h-[3vw] rounded-[.6vw] input-container outline-none indent-[1vw]"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-[2.5vw] w-[61vw]">
                        <span className="text-[1.1vw] font-medium font-satoshi">
                            enable 2auth
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
                                <label htmlFor="switchOn">ON</label>
                                <label htmlFor="switchOff">OFF</label>
                                <div className="switch-wrapper">
                                    <div className="switch">
                                        <div>ON</div>
                                        <div>OFF</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[3vw] w-[61vw]">
                        <div className="child flex gap-[4vw] justify-end items-center">
                            <h3 className="font-light text-[1vw]">
                                <a
                                    className=" hover:cursor-pointer"
                                    onClick={() => navigate(-1)}
                                >
                                    CANCEL
                                </a>
                            </h3>
                            <h3 className="font-bold text-[1.3vw]">
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
