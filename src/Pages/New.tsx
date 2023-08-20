import {
    BsFillBellFill,
    BsFillChatLeftTextFill,
    BsFillPersonFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import Apollo from "../assets/Apollo.jpg";

import "./New.css";
import { useState } from "react";

// array of user with just image to work with for testing purposes only

const New = () => {
    const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(
        null
    );
    const [isNavExpanded, setIsNavExpanded] = useState<boolean>(false);

    const handleCardClick = (index: number) => {
        if (index === expandedCardIndex) {
            setExpandedCardIndex(null);
            setIsNavExpanded(false);
        } else {
            if (!isNavExpanded) {
                setIsNavExpanded(true);
            }
            setExpandedCardIndex(index);
            scrollToCard(index);
        }
    };

    const scrollToCard = (index: number) => {
        const outer = document.querySelector(".nav") as HTMLElement;
        const target = document.querySelectorAll(".card")[index] as HTMLElement;

        const containerWidth = outer.offsetWidth;
        const targetWidth = 300;
        const targetIndex = index;
        const leftScreenOffset = (containerWidth - targetWidth) / 2;
        const leftSiblingOffset = (target.offsetWidth + 10) * targetIndex;
        const scrollValue = leftSiblingOffset - leftScreenOffset;

        outer.scrollTo({
            left: Math.max(0, scrollValue),
            behavior: "smooth",
        });
    };

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="mb-10">
            <div className="first-container h-[5vw] container-1 mt-10 mx-10 px-10 flex justify-between items-center">
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
                <div className="friends-container container-1 mt-5 py-5 ml-10 flex flex-col w-[6vw] max-h-[98vh] justify-start items-center gap-5 overflow-y-scroll no-scrollbar overflow-hidden">
                    <button
                        className="friend-btn absolute hover:scale-105"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img
                            className="w-12 h-12 rounded-full"
                            src={Apollo}
                            alt="friend-pic"
                        />
                        <span className="rounded-full bg-green-400 w-3 h-3 absolute top-0 right-0"></span>
                        {isHovered && (
                            <div className="btn-name absolute top-1/2 left-14 -translate-y-1/2 whitespace-nowrap rounded-lg px-3 py-2 bg-black font-normal font-satoshi text-[.8em]">
                                yagnaou
                            </div>
                        )}
                    </button>
                </div>
                <div className="w-full">
                    <div className="flex gap-5 bg-purple600 h-[50vh]">
                        <div className="second-container container-1 mt-5 ml-5 py-10 px-10 w-1/2 bg-blue400 pb-20">
                            <h2 className="font-medium font-satoshi lowercase">
                                Play a Game
                            </h2>
                            <div className="handler flex justify-center items-center bg-green400 w-full h-full mt-10">
                                <nav
                                    className={`no-scrollbar nav${
                                        isNavExpanded ? " nav--expanded" : ""
                                    } gap-3`}
                                >
                                    <Link to="/game">
                                        <div
                                            className={`card${
                                                expandedCardIndex === 0
                                                    ? " card--expanded"
                                                    : ""
                                            } flex justify-center items-center`}
                                            onMouseEnter={() =>
                                                handleCardClick(0)
                                            }
                                        >
                                            <p className="font-medium lowercase">
                                                EASY
                                            </p>
                                        </div>
                                    </Link>
                                    <Link to="/game">
                                        <div
                                            className={`card${
                                                expandedCardIndex === 1
                                                    ? " card--expanded"
                                                    : ""
                                            } flex justify-center items-center`}
                                            onMouseEnter={() =>
                                                handleCardClick(1)
                                            }
                                        >
                                            <p className="font-medium lowercase">
                                                Medium
                                            </p>
                                        </div>
                                    </Link>
                                    <Link to="/game">
                                        <div
                                            className={`card${
                                                expandedCardIndex === 2
                                                    ? " card--expanded"
                                                    : ""
                                            } flex justify-center items-center`}
                                            onMouseEnter={() =>
                                                handleCardClick(2)
                                            }
                                        >
                                            <p className="font-medium lowercase">
                                                Hard
                                            </p>
                                        </div>
                                    </Link>
                                </nav>
                            </div>
                        </div>
                        <div className="third-container container-1 mt-5 mr-10 p-10 w-1/2 overflow-y-scroll no-scrollbar bg-green400">
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
                    <div className="flex gap-5 bg-pink600 h-[50vh]">
                        <div className="forth-container container-1 mt-5 ml-5 p-10 w-1/2 overflow-y-scroll no-scrollbar bg-red400">
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
                        <div className="forth-container container-1 mt-5 mr-10 p-10 w-1/2 overflow-y-scroll no-scrollbar bg-yellow400">
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
