import {
    BsFillChatSquareTextFill,
    BsGithub,
    BsInstagram,
    BsLinkedin,
    BsPersonFillAdd,
    BsPersonFillSlash,
} from "react-icons/bs";
import Apollo from "../assets/Apollo.jpg";
import { useEffect, useState } from "react";
import "./ViewProfile.css";
import axios from "axios";

interface UserInfo {
    photo: string;
    username: string;
    firstname: string;
    lastname: string;
    bio: string;
    id: number;
    online: boolean;
}

const ViewProfile = () => {
    const [user, setUser] = useState<UserInfo>();

    const getUserInfo = async () => {
        const queryParams = new URLSearchParams(window.location.search);
        let id = queryParams.get("id");
        if (id == null) id = "0";
        let userid: number = +id;
        console.log("userid--------> ", id);
        axios
            .get(`http://localhost:3000/users/byid?id=${id}`, {
                withCredentials: true,
            })
            .then((res) => {
                const data = res.data;
                console.log(res.data);
                setUser({
                    photo: data.user.photo,
                    username: data.user.username,
                    firstname: data.user.firstname,
                    lastname: data.user.lastname,
                    bio: data.user.bio,
                    id: userid,
                    online: data.user.online,
                });
            });
    };

    const CreateaDmmsg = async () => {
        const data = {
            isDm: true,
            receiver: user?.id,
        };
        await axios.post("http://localhost:3000/chat/newdm", data, {
            withCredentials: true,
        });
    };
    useEffect(() => {
        getUserInfo();
    }, []);

    const addFriend = async () => {
        await axios.post(
            "http://localhost:3000/users/sendfriendrequest",
            { receiver: user?.id },
            { withCredentials: true }
        );
    };

    return (
        <div className="parent flex justify-center items-center h-screen gap-[1vw] max-sm:gap-[3vw] max-sm:flex-col max-md:flex-col max-md:my-[2vh]">
            <div className="child-container-1">
                <div className="container-1 font-satoshi text-white w-[18vw] h-[90vh] max-sm:w-[80vw] max-sm:h-[50vh] max-md:w-[80vw] max-md:h-[50vh] flex flex-col justify-center items-center relative">
                    <div className="flex flex-row gap-[1vw] max-sm:gap-[3vw] max-md:gap-[3vw] items-center justify-center absolute top-[5.5vw] max-sm:top-[5.5vw] max-md:top-[5vw]">
                        <button
                            className="btn-1 w-[3vw] h-[3vw] max-sm:w-[5vw] max-sm:h-[5vw] max-md:w-[5vw] max-md:h-[5vw] rounded-full flex justify-center items-center cursor-pointer container-1"
                            onClick={addFriend}
                        >
                            <span className="add absolute -top-[2.5vw] font-satoshi text-white font-bold text-[.6vw] max-sm:text-[1.2vw] max-sm:-top-[4vw] max-md:text-[1vw] max-md:-top-[4vw]">
                                Add
                                <br />
                                {user?.username}
                            </span>
                            <BsPersonFillAdd className="text-[1vw] max-sm:text-[2vw] max-md:text-[2vw]" />
                        </button>
                        <button
                            className="btn-2 w-[3vw] h-[3vw] max-sm:w-[5vw] max-sm:h-[5vw] max-md:w-[5vw] max-md:h-[5vw] rounded-full flex justify-center items-center cursor-pointer container-1"
                            onClick={CreateaDmmsg}
                        >
                            <span className="message absolute -top-[2.5vw] font-satoshi text-white font-bold text-[.6vw] max-sm:text-[1.2vw] max-sm:-top-[4vw] max-md:text-[1vw] max-md:-top-[4vw]">
                                Message
                                <br />
                                {user?.username}
                            </span>
                            <BsFillChatSquareTextFill className="text-[1vw] max-sm:text-[2vw] max-md:text-[2vw]" />
                        </button>
                        <button className="btn-3 w-[3vw] h-[3vw] max-sm:w-[5vw] max-sm:h-[5vw] max-md:w-[5vw] max-md:h-[5vw] rounded-full flex justify-center items-center cursor-pointer container-1">
                            <span className="block absolute -top-[2.5vw] font-satoshi text-white font-bold text-[.6vw] max-sm:text-[1.2vw] max-sm:-top-[4vw] max-md:text-[1vw] max-md:-top-[4vw]">
                                Block
                                <br />
                                {user?.username}
                            </span>
                            <BsPersonFillSlash className="text-[1vw] max-sm:text-[2vw] max-md:text-[2vw]" />
                        </button>
                    </div>
                    <div className="img-holder absolute top-[10.5vw] max-sm:top-[14vw] max-md:top-[12vw]">
                        <div className="">
                            <img
                                className="w-[7vw] h-[7vw] max-sm:w-[20vw] max-sm:h-[20vw] max-md:w-[15vw] max-md:h-[15vw] rounded-full"
                                src={user?.photo}
                                alt="Apollo"
                            />
                            <span
                                className={`status rounded-full bg-${
                                    user?.online ? "green" : "gray"
                                }-400 w-[1.5vw] h-[1.5vw] max-sm:w-[4vw] max-sm:h-[4vw] max-md:w-[3vw] max-md:h-[3vw] absolute top-0 right-[.5vw]`}
                            ></span>
                        </div>
                    </div>
                    <h4 className="font-light absolute top-[18vw] text-[1vw] max-sm:top-[36vw] max-sm:text-[2.2vw] max-md:top-[28vw] max-md:text-[1.5vw]">
                        @{user?.username}
                    </h4>
                    <h3 className="font-bold absolute top-[19.5vw] text-[1vw] max-sm:top-[39vw] max-sm:text-[2.5vw] max-md:top-[30vw] max-md:text-[1.5vw]">
                        {user?.firstname} {user?.lastname}
                    </h3>
                    <div className="bio flex absolute top-[22vw] max-sm:top-[45vw] max-md:top-[34vw] justify-center items-start">
                        <p className="font-light w-[15vw] max-sm:w-full max-md:w-full text-ellipsis text-start text-[1vw] max-sm:text-[2.8vw] max-sm:px-[3vw] max-md:text-[2vw] max-md:px-[3vw]">
                            {user?.bio}
                        </p>
                    </div>
                    <ul className="flex gap-[2vw] max-sm:gap-[3vw] max-md:gap-[4vw] absolute bottom-[4vw] max-sm:bottom-[6vw] max-md:bottom-[6vw]">
                        <li>
                            <a
                                href="#"
                                className="text-[1vw] max-sm:text-[3vw] max-md:text-[2.4vw]"
                            >
                                <BsGithub />
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-[1vw] max-sm:text-[3vw] max-md:text-[2.4vw]"
                            >
                                <BsLinkedin />
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-[1vw] max-sm:text-[3vw] max-md:text-[2.4vw]"
                            >
                                <BsInstagram />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="child-container-2">
                <div className="container-2 font-satoshi text-white w-[75vw] h-[90vh] max-sm:w-[80vw] max-sm:h-[50vh] max-md:w-[80vw] max-md:h-[50vh] flex flex-col justify-center items-center relative overflow-y-scroll no-scrollbar overflow-hidden">
                    <div className="editable absolute flex flex-col justify-center items-start pb-[2vw] left-[2vw] top-[3vw] max-sm:left-[5vw] max-sm:top-[5vw] max-md:left-[5vw] max-md:top-[5vw] w-[60vw]">
                        <h3 className="text-[1vw] max-sm:text-[2.5vw] max-md:text-[2vw]">
                            Match Statistics for{" "}
                            <strong>{user?.username}</strong>
                        </h3>
                        <div className="flex items-center gap-[3vw] mt-[2vw]">
                            <div className="flex items-center gap-[.5vw]">
                                <p className="font-medium font-satoshi text-[1vw] container-1 px-[2vw] py-[1vw]">
                                    games won
                                </p>
                                <h3 className="font-black font-satoshi text-[1vw] container-1 px-[2vw] py-[1vw]">
                                    3
                                </h3>
                            </div>
                            <div className="flex items-center gap-[.5vw]">
                                <p className="font-medium font-satoshi text-[1vw] container-1 px-[2vw] py-[1vw]">
                                    games lost
                                </p>
                                <h3 className="font-black font-satoshi text-[1vw] container-1 px-[2vw] py-[1vw]">
                                    2
                                </h3>
                            </div>
                            <div className="flex items-center gap-[.5vw]">
                                <p className="font-medium font-satoshi text-[1vw] container-1 px-[2vw] py-[1vw]">
                                    games played
                                </p>
                                <h3 className="font-black font-satoshi text-[1vw] container-1 px-[2vw] py-[1vw]">
                                    5
                                </h3>
                            </div>
                        </div>
                        <h3 className="text-[1vw] max-sm:text-[2.5vw] max-md:text-[2vw] mt-[5vw]">
                            Match History for <strong>{user?.username}</strong>
                        </h3>
                        <div className="game-di mt-[1vw] max-sm:mt-[2.5vw] max-md:mt-[2vw] max-lg:mt-[2vw] flex container-1 px-[2vw] py-[.5vw] max-sm:py-[1vh] max-md:py-[1vh] max-lg:py-[1vh] justify-between items-center w-full">
                            <div className="flex items-center gap-5 max-sm:gap-[1vw] max-md:gap-[1vw] max-lg:gap-[1vw]">
                                <img
                                    className="ppic rounded-full w-[3vw] h-[3vw] max-sm:w-[7vw] max-sm:h-[7vw] max-md:w-[5vw] max-md:h-[5vw] max-lg:w-[3.5vw] max-lg:h-[3.5vw] mr-[.5vw]"
                                    src={Apollo}
                                    alt="profile-pic"
                                />
                                <h2 className="username font-medium font-satoshi text-[.8vw] max-sm:text-[1.2vh] max-md:text-[1.2vh] max-lg:text-[1.2vh]">
                                    username
                                </h2>
                            </div>
                            <h1 className="font-black font-satoshi text-[1vw] max-sm:text-[1.4vh] max-md:text-[1.4vh] max-lg:text-[1.4vh]">
                                4
                            </h1>
                            <h1 className="vs font-black font-satoshi text-[1vw] max-sm:text-[1.4vh] max-md:text-[1.4vh] max-lg:text-[1.4vh]">
                                VS
                            </h1>
                            <h1 className="font-black font-satoshi text-[1vw] max-sm:text-[1.4vh] max-md:text-[1.4vh] max-lg:text-[1.4vh]">
                                3
                            </h1>
                            <div className="flex items-center gap-5 max-sm:gap-[1vw] max-md:gap-[1vw] max-lg:gap-[1vw]">
                                <h2 className="username font-medium font-satoshi text-[.8vw] max-sm:text-[1.2vh] max-md:text-[1.2vh] max-lg:text-[1.2vh]">
                                    username
                                </h2>
                                <img
                                    className="ppic rounded-full w-[3vw] h-[3vw] max-sm:w-[7vw] max-sm:h-[7vw] max-md:w-[5vw] max-md:h-[5vw] max-lg:w-[3.5vw] max-lg:h-[3.5vw] ml-[.5vw]"
                                    src={Apollo}
                                    alt="profile-pic"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewProfile;
