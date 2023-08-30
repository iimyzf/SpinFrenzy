import {
    BsFillBellFill,
    BsFillChatLeftTextFill,
    BsFillPersonFill,
    BsPersonFillAdd,
    BsPersonFillSlash,
    BsVolumeMuteFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import Apollo from "../assets/Apollo.jpg";
import { useState } from "react";
import "./Dashboard.css";
import { FiLogOut } from "react-icons/fi";

const Dashboard = () => {
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

    const [isHovered, setIsHovered] = useState(null);
    const [isActiveUser, setIsActiveUser] = useState(null);
    const handleMouseEnter = (userId: any) => {
        setIsHovered(userId);
    };
    const handleMouseLeave = () => {
        setIsHovered(null);
    };
    const handleUserClick = (userId: any) => {
        setIsActiveUser(userId === isActiveUser ? null : userId);
    };

    // const [hoveredButton, setHoveredButton] = useState(null);
    // const [activeButton, setActiveButton] = useState(null);
    // const mouseEnter = (buttonId: any) => {
    //     setHoveredButton(buttonId);
    // };
    // const mouseLeave = () => {
    //     setHoveredButton(null);
    // };
    // const handleButtonClick = (buttonId: any) => {
    //     setActiveButton(buttonId === activeButton ? null : buttonId);
    // };

    const [userHover, setUserHover] = useState(null);
    const handleUserHoverEnter = (userId: any) => {
        setUserHover(userId);
    };
    const handleUserHoverLeave = () => {
        setUserHover(null);
    };

    // const [liveGameHover, setliveGameHover] = useState(null);
    // const handleLiveGameEnter = (gameId: any) => {
    //     setliveGameHover(gameId);
    // };
    // const handleLiveGameLeave = () => {
    //     setliveGameHover(null);
    // };

    return (
        <div className="my-[1vw] flex flex-col">
            <div className="first-container h-[4vw] container-1 mx-[3vw] px-[2vw] flex justify-between items-center">
                <h2 className="font-black lowercase font-satoshi text-[.8vw] tracking-wider">
                    spinfrenzy
                </h2>
                <div className="flex gap-[2vw]">
                    {/* <button
                        onMouseEnter={() => mouseEnter(0)}
                        onMouseLeave={mouseLeave}
                        onClick={() => handleButtonClick(0)}
                    >
                        <BsFillChatLeftTextFill className="hover:scale-110 text-[.8vw]" />
                        {hoveredButton == 0 && (
                            <div className="absolute transform translate-y-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg px-[.8vw] py-[.4vw] bg-black font-bold font-satoshi text-[.6vw]">
                                messages
                            </div>
                        )}
                        {activeButton == 0 && (
                            <div className="absolute transform translate-y-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg px-[.8vw] py-[.4vw] bg-black font-bold font-satoshi text-[.6vw]">
                                No messages
                            </div>
                        )}
                    </button> */}
                    {/* <button
                        onMouseEnter={() => mouseEnter(1)}
                        onMouseLeave={mouseLeave}
                        onClick={() => handleButtonClick(1)}
                    >
                        <BsFillBellFill className="hover:scale-110 text-[.8vw]" />
                        {hoveredButton == 1 && (
                            <div className="absolute transform translate-y-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg px-[.8vw] py-[.4vw] bg-black font-bold font-satoshi text-[.6vw]">
                                notifications
                            </div>
                        )}
                        {activeButton == 1 && (
                            <div className="absolute transform translate-y-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg px-[.8vw] py-[.4vw] bg-black font-bold font-satoshi text-[.6vw]">
                                No notifications
                            </div>
                        )}
                    </button> */}
                    {/* <div className="icons"> */}
                    {/* <div className="notification"> */}
                    <div className="iconBtn">
                        <BsFillChatLeftTextFill className="hover:scale-110 text-[.8vw]" />
                        <div className="box messages-box">
                            <div className="display">
                                <div className="cont">
                                    <div className="container-1 m-[.6vw] p-[.5vw] flex justify-center items-center">
                                        <a href="https://google.com">
                                            <div className="flex justify-between items-center gap-[.6vw]">
                                                <img
                                                    className="w-[2.5vw] h-[2.5vw] rounded-full"
                                                    src={Apollo}
                                                />
                                                <p className="font-satoshi font-normal text-[.8vw]">
                                                    mamella sent you a message
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                    {/* </div> */}
                    {/* <div className="icons"> */}
                    {/* <div className="notification"> */}
                    <div className="iconBtn">
                        <BsFillBellFill className="hover:scale-110 text-[.8vw]" />
                        <div className="box notification-box">
                            <div className="display">
                                <div className="cont">
                                    <div className="container-1 m-[.6vw] p-[.5vw] flex justify-center items-center">
                                        <a href="https://google.com">
                                            <div className="flex justify-between items-center gap-[.6vw]">
                                                <img
                                                    className="w-[2.5vw] h-[2.5vw] rounded-full"
                                                    src={Apollo}
                                                />
                                                <p className="font-satoshi font-normal text-[.8vw]">
                                                    mamella sent you a friend
                                                    request
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                    {/* </div> */}
                    {/* <div className="icons"> */}
                    {/* <div className="notification"> */}
                    <div className="iconBtn user-btn">
                        <BsFillPersonFill className="hover:scale-110 text-[.8vw]" />
                        <div className="box user-box">
                            <div className="display">
                                <div className="cont">
                                    <Link to="/profile">
                                        <div className="container-1 m-[.6vw] p-[.5vw] flex justify-center items-center">
                                            <div className="flex justify-between items-center gap-[.6vw]">
                                                <BsFillPersonFill className="text-[.8vw]" />
                                                <h2 className="font-satoshi font-bold text-[.8vw]">
                                                    profile
                                                </h2>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="/">
                                        <div className="container-1 m-[.6vw] p-[.5vw] flex justify-center items-center">
                                            <div className="flex justify-between items-center gap-[.6vw]">
                                                <FiLogOut className="text-[.8vw]" />
                                                <h2 className="font-satoshi font-bold text-[.8vw]">
                                                    logout
                                                </h2>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                    {/* </div> */}
                </div>
            </div>
            <div className="flex mx-[3vw]">
                <div className="friends-container container-1 mt-[1vw] py-[1vw] flex flex-col w-[5vw] max-h-[100vh] justify-start items-center overflow-y-scroll no-scrollbar overflow-hidden">
                    <div className="userdiv w-[2.5vw] h-[2.5vw] flex justify-center items-center">
                        <button
                            className="friend-bn absolute"
                            onMouseEnter={() => handleMouseEnter(0)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleUserClick(0)}
                        >
                            <div className="hover:scale-105">
                                <img
                                    className="w-[2.5vw] h-[2.5vw] rounded-full"
                                    src={Apollo}
                                    alt="friend-pic"
                                />
                                <span className="rounded-full bg-green-400 w-[0.5vw] h-[0.5vw] absolute top-0 right-0"></span>
                            </div>
                            {isHovered == 0 && (
                                <div className="absolute top-1/2 left-[3vw] -translate-y-1/2 rounded-[.5vw] px-[.8vw] py-[.4vw] bg-black font-bold font-satoshi text-[.6vw] hover:bg-blue-500 ">
                                    yagnaou
                                </div>
                            )}
                            {isActiveUser == 0 && (
                                <div className="absolute top-1/2 left-[3vw] -translate-y-1/2 rounded-[.5vw] px-[.8vw] py-[.8vw] bg-black font-bold font-satoshi text-[.6vw]">
                                    <div className="flex items-center gap-[.5vw] px-[.2vw]">
                                        <img
                                            className="w-[2vw] h-[2vw] rounded-full"
                                            src={Apollo}
                                            alt="userPic"
                                        />
                                        <h2 className="uppercase">yagnaou</h2>
                                    </div>
                                    <div className="flex justify-between items-center mt-[.6vw] px-[.1vw] py-[.4vw]">
                                        <button
                                            className="container-1 hover:cursor-pointer p-[.5vw]"
                                            onMouseEnter={() =>
                                                handleUserHoverEnter(0)
                                            }
                                            onMouseLeave={handleUserHoverLeave}
                                        >
                                            <BsPersonFillAdd className="text-[1vw]" />
                                            {userHover == 0 && (
                                                <div className="absolute top-44 left-12 transform -translate-y-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg px-[.8vw] py-[.4vw] bg-black font-bold font-satoshi text-[.6vw]">
                                                    add friend
                                                </div>
                                            )}
                                        </button>
                                        <button
                                            className="container-1 hover:cursor-pointer p-[.5vw]"
                                            onMouseEnter={() =>
                                                handleUserHoverEnter(1)
                                            }
                                            onMouseLeave={handleUserHoverLeave}
                                        >
                                            <BsVolumeMuteFill className="text-[1vw]" />
                                            {userHover == 1 && (
                                                <div className="absolute top-44 left-28 transform -translate-y-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg px-[.8vw] py-[.4vw] bg-black font-bold font-satoshi text-[.6vw]">
                                                    mute friend
                                                </div>
                                            )}
                                        </button>
                                        <button
                                            className="container-1 hover:cursor-pointer p-[.5vw]"
                                            onMouseEnter={() =>
                                                handleUserHoverEnter(2)
                                            }
                                            onMouseLeave={handleUserHoverLeave}
                                        >
                                            <BsPersonFillSlash className="text-[1vw]" />
                                            {userHover == 2 && (
                                                <div className="absolute top-44 left-44 transform -translate-y-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg px-[.8vw] py-[.4vw] bg-black font-bold font-satoshi text-[.6vw]">
                                                    block friend
                                                </div>
                                            )}
                                        </button>
                                    </div>
                                    <input
                                        className="indent-[.4vw] outline-none rounded-[.5vw] py-[.6vw] container-1 font-normal"
                                        type="text"
                                        placeholder="write a message..."
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                </div>
                            )}
                        </button>
                    </div>
                </div>
                <div className="w-full">
                    <div className="flex gap-[1vw] h-[50vh]">
                        <div className="second-container container-1 mt-[1vw] ml-[1vw] p-[1vw] w-1/2 pb-[5vw]">
                            <h2 className="font-bold font-satoshi uppercase text-[.8vw]">
                                Play a Game
                            </h2>
                            <div className="handler flex justify-center items-center w-full h-full mt-[2vw]">
                                <nav
                                    className={`no-scrollbar nav${
                                        isNavExpanded ? " nav--expanded" : ""
                                    } gap-[.4vw]`}
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
                                            <p className="font-bold font-satoshi lowercase text-[.8vw]">
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
                                            <p className="font-bold font-satoshi lowercase text-[.8vw]">
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
                                            <p className="font-bold font-satoshi lowercase text-[.8vw]">
                                                Hard
                                            </p>
                                        </div>
                                    </Link>
                                </nav>
                            </div>
                        </div>
                        <div className="third-container container-1 mt-[1vw] p-[1.5vw] w-1/2 overflow-y-scroll no-scrollbar">
                            <h2 className="font-bold font-satoshi uppercase text-[.8vw]">
                                live games
                            </h2>
                            <Link to="/game">
                                <div
                                    className="game-div mt-[1vw] flex container-1 px-[1.5vw] py-[.5vw] justify-between items-center"
                                    title="Click to watch the game"
                                >
                                    <div className="flex items-center gap-5">
                                        <img
                                            className="ppic rounded-full w-[2vw] h-[2vw] mr-[.5vw]"
                                            src={Apollo}
                                            alt="profile-pic"
                                        />
                                        <h2 className="username font-medium font-satoshi text-[.8vw]">
                                            username
                                        </h2>
                                    </div>
                                    <h1 className="vs font-black font-satoshi text-[1vw]">
                                        VS
                                    </h1>
                                    <div className="flex items-center gap-5">
                                        <h2 className="username font-medium font-satoshi text-[.8vw]">
                                            username
                                        </h2>
                                        <img
                                            className="ppic rounded-full w-[2vw] h-[2vw] ml-[.5vw]"
                                            src={Apollo}
                                            alt="profile-pic"
                                        />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="flex gap-[1vw] h-[50vh]">
                        <div className="forth-container container-1 mt-[1vw] ml-[1vw] p-[1.5vw] w-1/2 overflow-y-scroll no-scrollbar">
                            <h2 className="font-bold font-satoshi uppercase text-[.8vw]">
                                popular public channels
                            </h2>
                            <div className="channel-div mt-[1vw] flex justify-between container-1 px-[1.5vw] py-[.5vw] items-center">
                                <div className="flex items-center gap-5">
                                    <img
                                        className="rounded-full w-[2vw] h-[2vw] mr-[.5vw]"
                                        src={Apollo}
                                        alt="channel-pic"
                                    />
                                    <div className="flex flex-col items-start">
                                        <h2 className="font-medium font-satoshi lowercase text-[.8vw]">
                                            name of the channel
                                        </h2>
                                        <h3 className="font-normal font-satoshi lowercase text-[.7vw]">
                                            42 members
                                        </h3>
                                    </div>
                                </div>
                                <button className="join-channel container-1 px-[2vw] py-[.3vw] uppercase font-bold hover:scale-105 text-[.7vw]">
                                    join
                                </button>
                            </div>
                        </div>
                        <div className="forth-container container-1 mt-[1vw] p-[1.5vw] w-1/2 overflow-y-scroll no-scrollbar">
                            <h2 className="font-bold font-satoshi uppercase text-[.8vw]">
                                leaderboard
                            </h2>
                            <div className="person-div mt-[1vw] flex justify-between container-1 px-[1.5vw] py-[.5vw] items-center">
                                <div className="flex items-center gap-5">
                                    <h1 className="font-black font-satoshi mr-[1vw] text-[.8vw]">
                                        1
                                    </h1>
                                    <img
                                        className="rounded-full w-[2vw] h-[2vw] mr-[.5vw]"
                                        src={Apollo}
                                        alt="channel-pic"
                                    />
                                    <div className="flex flex-col">
                                        <h2 className="font-medium font-satoshi lowercase text-[.8vw]">
                                            username
                                        </h2>
                                        <div className="flex gap-10 items-center">
                                            <h3 className="font-normal font-satoshi lowercase text-[.7vw]">
                                                games won: 24
                                            </h3>
                                            <h1 className="font-black font-satoshi text-[1vw]">
                                                /
                                            </h1>
                                            <h3 className="font-normal font-satoshi lowercase text-[.7vw]">
                                                games losses: 12
                                            </h3>
                                            <h1 className="font-black font-satoshi text-[1vw]">
                                                /
                                            </h1>
                                            <h3 className="font-normal font-satoshi lowercase text-[.7vw]">
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

export default Dashboard;