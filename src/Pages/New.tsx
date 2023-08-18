import {
    BsFillBellFill,
    BsFillChatLeftTextFill,
    BsFillPersonFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import Apollo from "../assets/Apollo.jpg";

const New = () => {
    return (
        <div>
            <div className="first-container bg-red300 w-ful h-20 container-1 mt-10 mx-10 px-10 flex justify-between items-center">
                <h2 className="font-medium lowercase font-satoshi">
                    Dashboard
                </h2>
                <div className="flex gap-10">
                    <button>
                        <BsFillChatLeftTextFill />
                    </button>
                    <button>
                        <BsFillBellFill />
                    </button>
                    <button>
                        <BsFillPersonFill />
                    </button>
                </div>
            </div>
            <div className="flex gap-5">
                <div className="second-container container-1 mt-5 ml-10 p-10 w-1/2 h-96">
                    <h2 className="font-medium font-satoshi lowercase">
                        Play a Game
                    </h2>
                    <div className="mt-10 flex flex-wrp justify-between items-center gap-2 bg-red h-56">
                        <Link
                            to="/game"
                            className="card w-56 h-full flex justify-center items-center hover:cursor-pointer hover:scale-105"
                        >
                            <p className="font-medium lowercase">EASY</p>
                        </Link>
                        <div className="card w-56 h-full flex justify-center items-center hover:cursor-pointer hover:scale-105">
                            <p className="font-medium lowercase">MEDIUM</p>
                        </div>
                        <div className="card w-56 h-full flex justify-center items-center hover:cursor-pointer hover:scale-105">
                            <p className="font-medium lowercase">HARD</p>
                        </div>
                    </div>
                </div>
                <div className="third-container container-1 mt-5 mr-10 p-10 w-1/2 h-96 overflow-y-auto">
                    <h2 className="font-medium font-satoshi lowercase">
                        live games
                    </h2>
                    <div className="game-div mt-10 flex justify-between container-1 h-20 px-10 items-center">
                        <div className="profile flex items-center gap-5">
                            <img
                                className="rounded-full w-14 h-14"
                                src={Apollo}
                                alt="profile-pic"
                            />
                            <h2 className="font-medium font-satoshi">
                                username
                            </h2>
                        </div>
                        <h1 className="font-black font-satoshi text-4xl">VS</h1>
                        <div className="profile flex items-center gap-5">
                            <h2 className="font-medium font-satoshi">
                                username
                            </h2>
                            <img
                                className="rounded-full w-14 h-14"
                                src={Apollo}
                                alt="profile-pic"
                            />
                        </div>
                    </div>
                    <div className="game-div mt-5 flex justify-between container-1 h-20 px-10 items-center">
                        <div className="profile flex items-center gap-5">
                            <img
                                className="rounded-full w-14 h-14"
                                src={Apollo}
                                alt="profile-pic"
                            />
                            <h2 className="font-medium font-satoshi">
                                username
                            </h2>
                        </div>
                        <h1 className="font-black font-satoshi text-4xl">VS</h1>
                        <div className="profile flex items-center gap-5">
                            <h2 className="font-medium font-satoshi">
                                username
                            </h2>
                            <img
                                className="rounded-full w-14 h-14"
                                src={Apollo}
                                alt="profile-pic"
                            />
                        </div>
                    </div>
                    <div className="game-div mt-5 flex justify-between container-1 h-20 px-10 items-center">
                        <div className="profile flex items-center gap-5">
                            <img
                                className="rounded-full w-14 h-14"
                                src={Apollo}
                                alt="profile-pic"
                            />
                            <h2 className="font-medium font-satoshi">
                                username
                            </h2>
                        </div>
                        <h1 className="font-black font-satoshi text-4xl">VS</h1>
                        <div className="profile flex items-center gap-5">
                            <h2 className="font-medium font-satoshi">
                                username
                            </h2>
                            <img
                                className="rounded-full w-14 h-14"
                                src={Apollo}
                                alt="profile-pic"
                            />
                        </div>
                    </div>
                    <div className="game-div mt-5 flex justify-between container-1 h-20 px-10 items-center">
                        <div className="profile flex items-center gap-5">
                            <img
                                className="rounded-full w-14 h-14"
                                src={Apollo}
                                alt="profile-pic"
                            />
                            <h2 className="font-medium font-satoshi">
                                username
                            </h2>
                        </div>
                        <h1 className="font-black font-satoshi text-4xl">VS</h1>
                        <div className="profile flex items-center gap-5">
                            <h2 className="font-medium font-satoshi">
                                username
                            </h2>
                            <img
                                className="rounded-full w-14 h-14"
                                src={Apollo}
                                alt="profile-pic"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-5">
                <div className="forth-container container-1 mt-5 ml-10 p-10 w-1/2 h-96 overflow-y-auto">
                    <h2 className="font-medium font-satoshi lowercase">
                        popular public channels
                    </h2>
                    <div className="channel-div mt-10 flex justify-between container-1 h-20 px-10 items-center">
                        <div className="flex items-center gap-5">
                            <img
                                className="rounded-full w-14 h-14"
                                src={Apollo}
                                alt="channel-pic"
                            />
                            <div className="flex flex-col">
                                <h2 className="font-medium font-satoshi lowercase">
                                    name of the channel
                                </h2>
                                <h3 className="font-light font-satoshi lowercase">
                                    42 members
                                </h3>
                            </div>
                        </div>
                        <button className="container-1 w-32 h-14 lowercase">
                            join
                        </button>
                    </div>
                    <div className="channel-div mt-5 flex justify-between container-1 h-20 px-10 items-center">
                        <div className="flex items-center gap-5">
                            <img
                                className="rounded-full w-14 h-14"
                                src={Apollo}
                                alt="channel-pic"
                            />
                            <div className="flex flex-col">
                                <h2 className="font-medium font-satoshi lowercase">
                                    name of the channel
                                </h2>
                                <h3 className="font-light font-satoshi lowercase">
                                    42 members
                                </h3>
                            </div>
                        </div>
                        <button className="container-1 w-32 h-14 lowercase">
                            join
                        </button>
                    </div>
                    <div className="channel-div mt-5 flex justify-between container-1 h-20 px-10 items-center">
                        <div className="flex items-center gap-5">
                            <img
                                className="rounded-full w-14 h-14"
                                src={Apollo}
                                alt="channel-pic"
                            />
                            <div className="flex flex-col">
                                <h2 className="font-medium font-satoshi lowercase">
                                    name of the channel
                                </h2>
                                <h3 className="font-light font-satoshi lowercase">
                                    42 members
                                </h3>
                            </div>
                        </div>
                        <button className="container-1 w-32 h-14 lowercase">
                            join
                        </button>
                    </div>
                    <div className="channel-div mt-5 flex justify-between container-1 h-20 px-10 items-center">
                        <div className="flex items-center gap-5">
                            <img
                                className="rounded-full w-14 h-14"
                                src={Apollo}
                                alt="channel-pic"
                            />
                            <div className="flex flex-col">
                                <h2 className="font-medium font-satoshi lowercase">
                                    name of the channel
                                </h2>
                                <h3 className="font-light font-satoshi lowercase">
                                    42 members
                                </h3>
                            </div>
                        </div>
                        <button className="container-1 w-32 h-14 lowercase">
                            join
                        </button>
                    </div>
                </div>
                <div className="forth-container container-1 mt-5 mr-10 p-10 w-1/2 h-96"></div>
            </div>
        </div>
    );
};

export default New;
