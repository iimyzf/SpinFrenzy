import {
    BsFillBellFill,
    BsFillChatLeftTextFill,
    BsFillPersonFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import Apollo from "../assets/Apollo.jpg";

// array of user with just image to work with for testing purposes only

const New = () => {
    return (
        <div>
            <div className="first-container h-20 container-1 mt-10 mx-10 px-10 flex justify-between items-center">
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
            <div className="flex">
                <div className="friends-container container-1 mt-5 py-5 ml-10 flex flex-col w-24 justify-start items-center gap-4 overflow-y-scroll no-scrollbar h-[49.25rem]">
                    <button className="relative">
                        <img
                            className="w-16 h-16 rounded-full"
                            src={Apollo}
                            alt="friend-pic"
                        />
                        <span className="rounded-full bg-green-400 w-5 h-5 absolute top-0 right-0"></span>
                    </button>
                    <button className="relative">
                        <img
                            className="w-16 h-16 rounded-full"
                            src={Apollo}
                            alt="friend-pic"
                        />
                        <span className="rounded-full bg-green-400 w-4 h-4 absolute top-0 right-0"></span>
                    </button>
                    <button className="relative">
                        <img
                            className="w-16 h-16 rounded-full"
                            src={Apollo}
                            alt="friend-pic"
                        />
                        <span className="rounded-full bg-green-400 w-4 h-4 absolute top-0 right-0"></span>
                    </button>
                    <button className="relative">
                        <img
                            className="w-16 h-16 rounded-full"
                            src={Apollo}
                            alt="friend-pic"
                        />
                        <span className="rounded-full bg-green-400 w-4 h-4 absolute top-0 right-0"></span>
                    </button>
                    <button className="relative">
                        <img
                            className="w-16 h-16 rounded-full"
                            src={Apollo}
                            alt="friend-pic"
                        />
                        <span className="rounded-full bg-green-400 w-4 h-4 absolute top-0 right-0"></span>
                    </button>
                    <button className="relative">
                        <img
                            className="w-16 h-16 rounded-full"
                            src={Apollo}
                            alt="friend-pic"
                        />
                        <span className="rounded-full bg-green-400 w-4 h-4 absolute top-0 right-0"></span>
                    </button>
                    <button className="relative">
                        <img
                            className="w-16 h-16 rounded-full"
                            src={Apollo}
                            alt="friend-pic"
                        />
                        <span className="rounded-full bg-green-400 w-4 h-4 absolute top-0 right-0"></span>
                    </button>
                    <button className="relative">
                        <img
                            className="w-16 h-16 rounded-full"
                            src={Apollo}
                            alt="friend-pic"
                        />
                        <span className="rounded-full bg-green-400 w-4 h-4 absolute top-0 right-0"></span>
                    </button>
                    <button className="relative">
                        <img
                            className="w-16 h-16 rounded-full"
                            src={Apollo}
                            alt="friend-pic"
                        />
                        <span className="rounded-full bg-green-400 w-4 h-4 absolute top-0 right-0"></span>
                    </button>
                    <button className="relative">
                        <img
                            className="w-16 h-16 rounded-full"
                            src={Apollo}
                            alt="friend-pic"
                        />
                        <span className="rounded-full bg-green-400 w-4 h-4 absolute top-0 right-0"></span>
                    </button>
                    <button className="relative">
                        <img
                            className="w-16 h-16 rounded-full"
                            src={Apollo}
                            alt="friend-pic"
                        />
                        <span className="rounded-full bg-green-400 w-4 h-4 absolute top-0 right-0"></span>
                    </button>
                    <button className="relative">
                        <img
                            className="w-16 h-16 rounded-full"
                            src={Apollo}
                            alt="friend-pic"
                        />
                        <span className="rounded-full bg-green-400 w-4 h-4 absolute top-0 right-0"></span>
                    </button>
                </div>
                <div className="bg-red300 w-full">
                    <div className="flex gap-5">
                        <div className="second-container container-1 mt-5 ml-5 p-10 w-1/2 h-96">
                            <h2 className="font-medium font-satoshi lowercase">
                                Play a Game
                            </h2>
                            <div className="mt-10 flex flex-wrap justify-between items-center gap-2 bg-red h-56">
                                <Link
                                    to="/game"
                                    className="card w-52 h-full flex justify-center items-center hover:cursor-pointer hover:scale-105"
                                >
                                    <p className="font-medium lowercase">
                                        EASY
                                    </p>
                                </Link>
                                <div className="card w-52 h-full flex justify-center items-center hover:cursor-pointer hover:scale-105">
                                    <p className="font-medium lowercase">
                                        MEDIUM
                                    </p>
                                </div>
                                <div className="card w-52 h-full flex justify-center items-center hover:cursor-pointer hover:scale-105">
                                    <p className="font-medium lowercase">
                                        HARD
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="third-container container-1 mt-5 mr-10 p-10 w-1/2 h-96 overflow-y-scroll no-scrollbar">
                            <h2 className="font-medium font-satoshi lowercase">
                                live games
                            </h2>
                            <div className="game-div mt-10 flex justify-between container-1 h-20 px-10 items-center hover:scale-105 hover:cursor-pointer">
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
                                <h1 className="font-black font-satoshi text-4xl">
                                    VS
                                </h1>
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
                            <div className="game-div mt-5 flex justify-between container-1 h-20 px-10 items-center hover:scale-105 hover:cursor-pointer">
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
                                <h1 className="font-black font-satoshi text-4xl">
                                    VS
                                </h1>
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
                            <div className="game-div mt-5 flex justify-between container-1 h-20 px-10 items-center hover:scale-105 hover:cursor-pointer">
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
                                <h1 className="font-black font-satoshi text-4xl">
                                    VS
                                </h1>
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
                            <div className="game-div mt-5 flex justify-between container-1 h-20 px-10 items-center hover:scale-105 hover:cursor-pointer">
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
                                <h1 className="font-black font-satoshi text-4xl">
                                    VS
                                </h1>
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
                        <div className="forth-container container-1 mt-5 ml-5 p-10 w-1/2 h-96 overflow-y-scroll no-scrollbar">
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
                                <button className="container-1 w-24 h-12 lowercase hover:scale-105 hover:cursor-pointer">
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
                                <button className="container-1 w-24 h-12 lowercase hover:scale-105 hover:cursor-pointer">
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
                                <button className="container-1 w-24 h-12 lowercase hover:scale-105 hover:cursor-pointer">
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
                                <button className="container-1 w-24 h-12 lowercase hover:scale-105 hover:cursor-pointer">
                                    join
                                </button>
                            </div>
                        </div>
                        <div className="forth-container container-1 mt-5 mr-10 p-10 w-1/2 h-96 overflow-y-scroll no-scrollbar">
                            <h2 className="font-medium font-satoshi lowercase">
                                leaderboard
                            </h2>
                            <div className="person-div mt-10 flex justify-between container-1 h-20 px-10 items-center">
                                <div className="flex items-center gap-5">
                                    <h1 className="font-black font-satoshi mr-3">
                                        1
                                    </h1>
                                    <img
                                        className="rounded-full w-14 h-14"
                                        src={Apollo}
                                        alt="channel-pic"
                                    />
                                    <div className="flex flex-col">
                                        <h2 className="font-medium font-satoshi lowercase">
                                            username
                                        </h2>
                                        <div className="flex gap-10">
                                            <h3 className="font-light font-satoshi lowercase">
                                                games won: 24
                                            </h3>
                                            <h1 className="font-black font-satoshi">
                                                /
                                            </h1>
                                            <h3 className="font-light font-satoshi lowercase">
                                                games losses: 12
                                            </h3>
                                            <h1 className="font-black font-satoshi">
                                                /
                                            </h1>
                                            <h3 className="font-light font-satoshi lowercase">
                                                draws: 6
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="person-div mt-5 flex justify-between container-1 h-20 px-10 items-center">
                                <div className="flex items-center gap-5">
                                    <h1 className="font-black font-satoshi mr-3">
                                        2
                                    </h1>
                                    <img
                                        className="rounded-full w-14 h-14"
                                        src={Apollo}
                                        alt="channel-pic"
                                    />
                                    <div className="flex flex-col">
                                        <h2 className="font-medium font-satoshi lowercase">
                                            username
                                        </h2>
                                        <div className="flex gap-10">
                                            <h3 className="font-light font-satoshi lowercase">
                                                games won: 24
                                            </h3>
                                            <h1 className="font-black font-satoshi">
                                                /
                                            </h1>
                                            <h3 className="font-light font-satoshi lowercase">
                                                games losses: 12
                                            </h3>
                                            <h1 className="font-black font-satoshi">
                                                /
                                            </h1>
                                            <h3 className="font-light font-satoshi lowercase">
                                                draws: 6
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="person-div mt-5 flex justify-between container-1 h-20 px-10 items-center">
                                <div className="flex items-center gap-5">
                                    <h1 className="font-black font-satoshi mr-3">
                                        3
                                    </h1>
                                    <img
                                        className="rounded-full w-14 h-14"
                                        src={Apollo}
                                        alt="channel-pic"
                                    />
                                    <div className="flex flex-col">
                                        <h2 className="font-medium font-satoshi lowercase">
                                            username
                                        </h2>
                                        <div className="flex gap-10">
                                            <h3 className="font-light font-satoshi lowercase">
                                                games won: 24
                                            </h3>
                                            <h1 className="font-black font-satoshi">
                                                /
                                            </h1>
                                            <h3 className="font-light font-satoshi lowercase">
                                                games losses: 12
                                            </h3>
                                            <h1 className="font-black font-satoshi">
                                                /
                                            </h1>
                                            <h3 className="font-light font-satoshi lowercase">
                                                draws: 6
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="person-div mt-5 flex justify-between container-1 h-20 px-10 items-center">
                                <div className="flex items-center gap-5">
                                    <h1 className="font-black font-satoshi mr-3">
                                        4
                                    </h1>
                                    <img
                                        className="rounded-full w-14 h-14"
                                        src={Apollo}
                                        alt="channel-pic"
                                    />
                                    <div className="flex flex-col">
                                        <h2 className="font-medium font-satoshi lowercase">
                                            username
                                        </h2>
                                        <div className="flex gap-10">
                                            <h3 className="font-light font-satoshi lowercase">
                                                games won: 24
                                            </h3>
                                            <h1 className="font-black font-satoshi">
                                                /
                                            </h1>
                                            <h3 className="font-light font-satoshi lowercase">
                                                games losses: 12
                                            </h3>
                                            <h1 className="font-black font-satoshi">
                                                /
                                            </h1>
                                            <h3 className="font-light font-satoshi lowercase">
                                                draws: 6
                                            </h3>
                                        </div>
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

export default New;
