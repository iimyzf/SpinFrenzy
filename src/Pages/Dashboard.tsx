import {
    BsFillBellFill,
    BsFillChatLeftTextFill,
    BsFillPersonFill,
    BsSearch,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import Apollo from "../assets/Apollo.jpg";
import { useEffect, useRef, useState } from "react";
import "./Dashboard.css";
import { FiLogOut } from "react-icons/fi";
import axios from "axios";
import { io, Socket } from "socket.io-client";


interface User {
    id: number;
    username: string;
    photo: string;
    firstname: string;
    lastname: string;
    online: boolean;
}
interface Friend {
    id: number;
    online: boolean;
    username: string;
    photo: string;
}

interface Player {
    photo: string;
    username: string;
}
interface Game {
    player1: Player;
    player2: Player;
}

const Dashboard = () => {
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

    // const [userHover, setUserHover] = useState(null);
    // const handleUserHoverEnter = (userId: any) => {
    //     setUserHover(userId);
    // };
    // const handleUserHoverLeave = () => {
    //     setUserHover(null);
    // };

    const [users, setUsers] = useState<User[]>([]);
    const [query, setQuery] = useState("");
    const searchContainerRef = useRef<HTMLDivElement | null>(null);

    const [friends, setFriends] = useState<Friend[]>([]);
    const [socket, setSocket] = useState<Socket>();
    const [games, setGames] = useState<Game[]>([]);
    
    useEffect(() => {
        setSocket( io("http://localhost:3000/stream", { withCredentials: true }));
    }, []);
    
    async function fetchPlayersData(playerOneId: number, playerTwoId: number) {
        try {
            const [res1, res2] = await Promise.all([
                axios.get(`http://localhost:3000/users/userinfos?id=${playerOneId}`, { withCredentials: true }),
                axios.get(`http://localhost:3000/users/userinfos?id=${playerTwoId}`, { withCredentials: true })
            ]);

            const game: Game = {
                player1: res1.data,
                player2: res2.data,
            }
            setGames((prevGames) => [...prevGames, game]);

        } catch (error) {
          console.log("error fetching ...");
        }
      }
      

    useEffect(() => {
        socket?.on("initRooms", rooms => {
            console.log(rooms);
            for (let room of rooms) {
                fetchPlayersData(room.playerOneId, room.playerTwoId);
            }
        });

        socket?.on("addRoom", room => {
            // console.log(room);
            if (!room) {console.log("no room found")}
            
            // try {
            //     axios.get(`http://localhost:3000/users/byid?id=${rooms.playerOneId}`, {
            //             withCredentials: true,
            //         }).then((res) => {
                        
            //             const newFriends = res.data.friends;
            //             setFriends((prevFriends) => [
            //                 ...prevFriends,
            //                 ...newFriends,
            //             ]);
            //         });
            // } catch (error) {
            //     console.error("Error fetching Users", error);
            // }
        });

        return () => {
            socket?.off("updateRooms");
            socket?.disconnect();
        }
    }, [socket])


    useEffect(() => {
        try {
            axios
                .get("http://localhost:3000/users/me/friends", {
                    withCredentials: true,
                })
                .then((res) => {
                    const newFriends = res.data.friends;
                    setFriends((prevFriends) => [
                        ...prevFriends,
                        ...newFriends,
                    ]);
                });
        } catch (error) {
            console.error("Error fetching friends:", error);
        }
    }, []);

    useEffect(() => {
        const fetshData = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:3000/users/search/all?query=${query}`,
                    { withCredentials: true }
                );
                setUsers(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetshData();
    }, [query]);

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (
                searchContainerRef.current &&
                !searchContainerRef.current.contains(event.target)
            ) {
                setQuery("");
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [searchContainerRef]);


    return (
        <div className="my-[1vw] max-sm:my-[2vw] flex flex-col">
            <div className="first-container h-[8vh] max-sm:h-[6vh] max-md:h-[5vh] max-lg:h-[5vh] max-sm:mb-[.8vh] container-1 mx-[3vw] px-[2vw] flex justify-between items-center">
                <Link
                    to="/home"
                    className="font-black lowercase font-satoshi text-[.8vw] max-sm:text-[1.2vh] max-md:text-[1.2vh]  max-lg:text-[1.2vh] tracking-wider"
                >
                    spinfrenzy
                </Link>
                <div className="flex gap-[2vw] items-center max-sm:gap-[5vw] max-md:gap-[5vw] max-lg:gap-[4vw]">
                    <div
                        className="flex flex-col items-center"
                        ref={searchContainerRef}
                    >
                        <div className="search flex items-center container-1 outline-none absolute z-10 h-[2vw] max-sm:h-[3vh] max-md:h-[2.5vh] max-lg:h-[2.5vh] top-[2.3vw] right-[13.5vw] max-sm:top-[5.2vw] max-sm:right-[27.5vw] max-md:top-[2.8vw] max-md:right-[24.5vw] max-lg:top-[2.3vw] max-lg:right-[19.5vw]">
                            <input
                                className="search-txt border-none outline-none bg-transparent float-left px-[.5vw] max-sm:px-[1vw] max-md:px-[1vw] max-lg:px-[1vw] text-[.6vw] max-sm:text-[2vw] max-md:text-[1.1vw] max-lg:text-[.8vw]"
                                type="text"
                                placeholder="search for a user"
                                onChange={(e) => setQuery(e.target.value)}
                                value={query}
                            />
                            <BsSearch className="text-[.8vw] mr-[.5vw] max-sm:mr-[1.5vw] max-md:mr-[1.5vw] max-lg:mr-[1.5vw] max-sm:text-[1.2vh] max-md:text-[1.2vh] max-lg:text-[1vh]" />
                        </div>
                        {query && (
                            <div className="results cursor-context-menu flex flex-col justify-start items-start bg-[#101010] py-[.4vw] -mr-[.8vw] mt-[23vw] w-[15vw] h-[20vw] max-sm:w-[28vw] max-sm:h-[25vw] max-sm:mt-[33vw] max-sm:py-[.6vw] max-md:w-[28vw] max-md:h-[25vw] max-md:mt-[30vw] max-md:py-[.6vw] max-lg:w-[22vw] max-lg:h-[25vw] max-lg:mt-[30vw] max-lg:py-[.6vw] overflow-y-scroll no-scrollbar overflow-hidden z-50 rounded-[.5vw]">
                                {users.map((user) => (
                                    <div
                                        className="result w-full"
                                        key={user.id}
                                    >
                                        <Link
                                            to={`/view-profile?id=${user.id}`}
                                        >
                                            <div className="container-1 flex justify-start items-center mx-[.4vw] my-[.2vw] p-[.4vw] max-sm:mx-[1vw] max-sm:my-[.5vw] max-sm:p-[.4vw] max-md:mx-[1vw] max-md:my-[.5vw] max-md:p-[.4vw]">
                                                <div className="flex justify-start items-center gap-[.6vw] max-sm:gap-[1.2vw] max-md:gap-[2vw]">
                                                    <img
                                                        className="w-[2.5vw] h-[2.5vw] max-sm:w-[6vw] max-sm:h-[6vw] max-md:w-[5vw] max-md:h-[5vw] rounded-full"
                                                        src={user.photo}
                                                        alt={user.username}
                                                    />
                                                    <p className="font-satoshi font-normal text-[.8vw] max-sm:text-[.9vh] max-md:text-[1.1vh]">
                                                        {user.username}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="iconBtn">
                        <Link to="/chat">
                            <BsFillChatLeftTextFill className="hover:scale-110 text-[.8vw] max-sm:text-[1.2vh] max-md:text-[1.2vh] max-lg:text-[1.2vh]" />
                        </Link>
                        <div className="box messages-box overflow-y-scroll no-scrollbar w-[20vw]">
                            <div className="display">
                                <div className="cont ">
                                    <div className="container-1 m-[.6vw] p-[.5vw] flex justify-center items-center ">
                                        <a href="https://google.com">
                                            <div className="flex justify-between items-center gap-[.6vw] max-sm:gap-[2vw] max-md:gap-[2vw] max-lg:gap-[2vw]">
                                                <img
                                                    className="w-[2.5vw] h-[2.5vw] max-sm:w-[7vw] max-sm:h-[7vw] max-md:w-[4vw] max-md:h-[4vw] max-lg:w-[4vw] max-lg:h-[4vw] rounded-full"
                                                    src={Apollo}
                                                />
                                                <p className="font-satoshi font-normal text-[.8vw] max-sm:text-[1vh] max-md:text-[1.1vh] max-lg:text-[1.1vh]">
                                                    mamella sent you a message
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="iconBtn">
                        <BsFillBellFill className="hover:scale-110 text-[.8vw] max-sm:text-[1.2vh] max-md:text-[1.2vh] max-lg:text-[1.2vh]" />
                        <div className="box notification-box overflow-y-scroll no-scrollbar w-[20vw]">
                            <div className="display">
                                <div className="cont">
                                    <div className="container-1 m-[.6vw] p-[.5vw] flex justify-center items-center">
                                        <a href="https://google.com">
                                            <div className="flex justify-between items-center gap-[.6vw] max-sm:gap-[2vw] max-md:gap-[2vw] max-lg:gap-[2vw]">
                                                <img
                                                    className="w-[2.5vw] h-[2.5vw] max-sm:w-[7vw] max-sm:h-[7vw] max-md:w-[4vw] max-md:h-[4vw] max-lg:w-[4vw] max-lg:h-[4vw] rounded-full"
                                                    src={Apollo}
                                                />
                                                <p className="font-satoshi font-normal text-[.8vw] max-sm:text-[1vh] max-md:text-[1.1vh] max-lg:text-[1.1vh]">
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
                    <div className="iconBtn user-btn">
                        <BsFillPersonFill className="hover:scale-110 text-[.8vw] max-sm:text-[1.2vh] max-md:text-[1.2vh] max-lg:text-[1.2vh]" />
                        <div className="box user-box overflow-y-scroll no-scrollbar w-[8vw]">
                            <div className="display">
                                <div className="cont">
                                    <Link to="/profile">
                                        <div className="container-1 m-[.6vw] p-[.5vw] flex justify-center items-center">
                                            <div className="flex justify-between items-center gap-[.6vw]">
                                                <BsFillPersonFill className="text-[.8vw] max-sm:text-[1vh] max-md:text-[1.1vh] max-lg:text-[1.1vh]" />
                                                <h2 className="font-satoshi font-bold text-[.8vw] max-sm:text-[1vh] max-md:text-[1.1vh] max-lg:text-[1.1vh]">
                                                    profile
                                                </h2>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="/">
                                        <div className="container-1 m-[.6vw] p-[.5vw] flex justify-center items-center">
                                            <div className="flex justify-between items-center gap-[.6vw]">
                                                <FiLogOut className="text-[.8vw] max-sm:text-[1vh] max-md:text-[1.1vh] max-lg:text-[1.1vh]" />
                                                <h2 className="font-satoshi font-bold text-[.8vw] max-sm:text-[1vh] max-md:text-[1.1vh] max-lg:text-[1.1vh]">
                                                    logout
                                                </h2>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-1 max-sm:h-[6vh] max-md:h-[5vh] md:hidden max-md:mt-[1vw] max-sm:mb-[1vw] mx-[3vw] px-[2vw] flex justify-start items-center overflow-x-scroll no-scrollbar overflow-hidden ">
                {friends?.map((friend, index) => (
                    <Link
                        key={index}
                        to={`/view-profile?id=${friend.id}`}
                        className="userdiv w-[2.5vw] h-[2.5vw] max-sm:w-[4vw] max-sm:h-[4vw] flex justify-center items-center mr-[2vw]"
                    >
                        <button
                            className="friend-bn absolute"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleUserClick(index)}
                        >
                            <div className="hover:scale-105">
                                <img
                                    className="w-[2.5vw] h-[2.5vw] max-sm:w-[4vw] max-sm:h-[4vw] rounded-full"
                                    src={friend.photo}
                                    alt="friend-pic"
                                />
                                <span
                                    className={`rounded-full ${
                                        friend.online
                                            ? "bg-green-400"
                                            : "bg-gray-400"
                                    } w-[0.5vw] h-[0.5vw] max-sm:w-[.8vw] max-sm:h-[.8vw] absolute top-0 right-0`}
                                ></span>
                            </div>
                            {isHovered == index && (
                                <div className="absolute top-1/2 left-[3vw] max-sm:left-[5vw] -translate-y-1/2 rounded-[.5vw] px-[.8vw] py-[.4vw] bg-black font-bold font-satoshi text-[.6vw] max-sm:text-[1.2vw] ">
                                    {friend.username}
                                </div>
                            )}
                        </button>
                    </Link>
                ))}
            </div>
            <div className="flex mx-[3vw]">
                <div className="friends-container container-1 mt-[1vw] py-[1vh] flex flex-col w-[5vw] max-sm:w-[8vw] max-sm:mr-[2vw] max-h-[100vh] justify-start items-center overflow-y-scroll no-scrollbar max-sm:hidden max-md:hidden space-y-4">
                    {friends?.map((friend, index) => (
                        <Link
                            key={index}
                            to={`/view-profile?id=${friend.id}`}
                            className="userdiv w-[2.5vw] h-[2.5vw] max-sm:w-[4vw] max-sm:h-[4vw] flex justify-center items-center"
                        >
                            <button
                                className="friend-bn absolute"
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                                onClick={() => handleUserClick(index)}
                            >
                                <div className="hover:scale-105">
                                    <img
                                        className="w-[2.5vw] h-[2.5vw] max-sm:w-[4vw] max-sm:h-[4vw] rounded-full"
                                        src={friend.photo}
                                        alt="friend-pic"
                                    />
                                    <span
                                        className={`rounded-full ${
                                            friend.online
                                                ? "bg-green-400"
                                                : "bg-gray-400"
                                        } w-[0.5vw] h-[0.5vw] max-sm:w-[.8vw] max-sm:h-[.8vw] absolute top-0 right-0`}
                                    ></span>
                                </div>
                                {isHovered == index && (
                                    <div className="absolute top-1/2 left-[3vw] max-sm:left-[5vw] -translate-y-1/2 rounded-[.5vw] px-[.8vw] py-[.4vw] bg-black font-bold font-satoshi text-[.6vw] max-sm:text-[1.2vw] ">
                                        {friend.username}
                                    </div>
                                )}
                            </button>
                        </Link>
                    ))}
                </div>
                <div className="w-full">
                    <div className="flex gap-[1vw] h-[50vh] max-sm:flex-col max-md:flex-col">
                        <div className="second-container container-1 mt-[1vw] ml-[1vw] p-[1vw] max-sm:p-[3vw] w-1/2 pb-[5vw] max-sm:ml-0 max-sm:w-full max-sm:h-full max-md:ml-0 max-md:w-full max-md:h-full max-lg:ml-[1vw]">
                            <h2 className="font-bold font-satoshi uppercase text-[.8vw] max-sm:text-[1.2vh] max-md:text-[1.2vh] max-lg:text-[1.2vh]">
                                Play a Game
                            </h2>
                            <div className="handler flex justify-center items-center w-full h-full mt-[2vw] max-sm:mt-0 max-md:mt-0 max-lg:mt-0">
                                <nav className="no-scrollbar gap-[.4vw] max-sm:gap-[1.2vw] max-md:gap-[1.2vw] max-lg:gap-[.5vw] flex">
                                    <Link to="/game">
                                        <div className="card easy-mode flex justify-center items-center">
                                            <p className="font-bold font-satoshi lowercase text-[.8vw] max-sm:text-[1.2vh] max-md:text-[1.2vh] max-lg:text-[1.2vh]">
                                                EASY
                                            </p>
                                        </div>
                                    </Link>
                                    <Link to="/game">
                                        <div className="card medium-mode flex justify-center items-center">
                                            <p className="font-bold font-satoshi lowercase text-[.8vw] max-sm:text-[1.2vh] max-md:text-[1.2vh] max-lg:text-[1.2vh]">
                                                Medium
                                            </p>
                                        </div>
                                    </Link>
                                    <Link to="/game">
                                        <div className="card hard-mode flex justify-center items-center">
                                            <p className="font-bold font-satoshi lowercase text-[.8vw] max-sm:text-[1.2vh] max-md:text-[1.2vh] max-lg:text-[1.2vh]">
                                                Hard
                                            </p>
                                        </div>
                                    </Link>
                                </nav>
                            </div>
                        </div>
                        <div className="third-container container-1 mt-[1vw] p-[1.5vw] max-sm:p-[3vw] w-1/2 overflow-y-scroll no-scrollbar max-sm:w-full max-sm:h-full max-md:w-full max-md:h-full">
                            <h2 className="font-bold font-satoshi uppercase text-[.8vw] max-sm:text-[1.2vh] max-md:text-[1.2vh] max-lg:text-[1.2vh]">
                                live games
                            </h2>
                            {games?.map((game, index) => (
                            <Link key={index} to="/game">
                                <div
                                    className="game-div mt-[1vw] max-sm:mt-[2.5vw] max-md:mt-[2vw] max-lg:mt-[2vw] flex container-1 px-[1.5vw] py-[.5vw] max-sm:py-[1vh] max-md:py-[1vh] max-lg:py-[1vh] justify-between items-center"
                                    title="Click to watch the game"
                                >
                                    <div className="flex items-center gap-5 max-sm:gap-[1vw] max-md:gap-[1vw] max-lg:gap-[1vw]">
                                        <img
                                            className="ppic rounded-full w-[2vw] h-[2vw] max-sm:w-[7vw] max-sm:h-[7vw] max-md:w-[5vw] max-md:h-[5vw] max-lg:w-[3.5vw] max-lg:h-[3.5vw] mr-[.5vw]"
                                            src={game.player1.photo}
                                            alt="profile-pic"
                                        />
                                        <h2 className="username font-medium font-satoshi text-[.8vw] max-sm:text-[1.2vh] max-md:text-[1.2vh] max-lg:text-[1.2vh]">
                                            {game.player1.username}
                                        </h2>
                                    </div>
                                    <h1 className="font-black font-satoshi text-[1vw] max-sm:text-[1.4vh] max-md:text-[1.4vh] max-lg:text-[1.4vh]">
                                        3
                                    </h1>
                                    <h1 className="vs font-black font-satoshi text-[1vw] max-sm:text-[1.4vh] max-md:text-[1.4vh] max-lg:text-[1.4vh]">
                                        VS
                                    </h1>
                                    <h1 className="font-black font-satoshi text-[1vw] max-sm:text-[1.4vh] max-md:text-[1.4vh] max-lg:text-[1.4vh]">
                                        6
                                    </h1>
                                    <div className="flex items-center gap-5 max-sm:gap-[1vw] max-md:gap-[1vw] max-lg:gap-[1vw]">
                                        <h2 className="username font-medium font-satoshi text-[.8vw] max-sm:text-[1.2vh] max-md:text-[1.2vh] max-lg:text-[1.2vh]">
                                        {game.player2.username}
                                        </h2>
                                        <img
                                            className="ppic rounded-full w-[2vw] h-[2vw] max-sm:w-[7vw] max-sm:h-[7vw] max-md:w-[5vw] max-md:h-[5vw] max-lg:w-[3.5vw] max-lg:h-[3.5vw] ml-[.5vw]"
                                            src={game.player2.photo}
                                            alt="profile-pic"
                                        />
                                    </div>
                                </div>
                            </Link>
                            ))}
                            <Link to="/game">
                                <div
                                    className="game-div mt-[1vw] max-sm:mt-[2.5vw] max-md:mt-[2vw] max-lg:mt-[2vw] flex container-1 px-[1.5vw] py-[.5vw] max-sm:py-[1vh] max-md:py-[1vh] max-lg:py-[1vh] justify-between items-center"
                                    title="Click to watch the game"
                                >
                                    <div className="flex items-center gap-5 max-sm:gap-[1vw] max-md:gap-[1vw] max-lg:gap-[1vw]">
                                        <img
                                            className="ppic rounded-full w-[2vw] h-[2vw] max-sm:w-[7vw] max-sm:h-[7vw] max-md:w-[5vw] max-md:h-[5vw] max-lg:w-[3.5vw] max-lg:h-[3.5vw] mr-[.5vw]"
                                            src={Apollo}
                                            alt="profile-pic"
                                        />
                                        <h2 className="username font-medium font-satoshi text-[.8vw] max-sm:text-[1.2vh] max-md:text-[1.2vh] max-lg:text-[1.2vh]">
                                            username
                                        </h2>
                                    </div>
                                    <h1 className="font-black font-satoshi text-[1vw] max-sm:text-[1.4vh] max-md:text-[1.4vh] max-lg:text-[1.4vh]">
                                        3
                                    </h1>
                                    <h1 className="vs font-black font-satoshi text-[1vw] max-sm:text-[1.4vh] max-md:text-[1.4vh] max-lg:text-[1.4vh]">
                                        VS
                                    </h1>
                                    <h1 className="font-black font-satoshi text-[1vw] max-sm:text-[1.4vh] max-md:text-[1.4vh] max-lg:text-[1.4vh]">
                                        6
                                    </h1>
                                    <div className="flex items-center gap-5 max-sm:gap-[1vw] max-md:gap-[1vw] max-lg:gap-[1vw]">
                                        <h2 className="username font-medium font-satoshi text-[.8vw] max-sm:text-[1.2vh] max-md:text-[1.2vh] max-lg:text-[1.2vh]">
                                            username
                                        </h2>
                                        <img
                                            className="ppic rounded-full w-[2vw] h-[2vw] max-sm:w-[7vw] max-sm:h-[7vw] max-md:w-[5vw] max-md:h-[5vw] max-lg:w-[3.5vw] max-lg:h-[3.5vw] ml-[.5vw]"
                                            src={Apollo}
                                            alt="profile-pic"
                                        />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="flex gap-[1vw] h-[50vh] max-sm:flex-col max-md:flex-col">
                        <div className="forth-container container-1 mt-[1vw] ml-[1vw] p-[1.5vw] max-sm:p-[3vw] w-1/2 overflow-y-scroll no-scrollbar max-sm:ml-0 max-sm:mt-[1.2vh] max-sm:w-full max-sm:h-full max-md:ml-0 max-md:mt-[1.2vh] max-md:w-full max-md:h-full max-lg:ml-[1vw]">
                            <h2 className="font-bold font-satoshi uppercase text-[.8vw] max-sm:text-[1.2vh] max-md:text-[1.2vh] max-lg:text-[1.2vh]">
                                popular public channels
                            </h2>
                            <div className="channel-div mt-[1vw] max-sm:mt-[2.5vw] max-md:mt-[2vw] max-lg:mt-[2vw] flex justify-between container-1 px-[1.5vw] py-[.5vw] max-sm:py-[1vh] max-md:py-[1vh] max-lg:py-[1vh] items-center">
                                <div className="flex items-center gap-5 max-sm:gap-[1vw] max-md:gap-[1vw] max-lg:gap-[1vw]">
                                    <img
                                        className="rounded-full w-[2vw] h-[2vw] max-sm:w-[7vw] max-sm:h-[7vw] max-md:w-[5vw] max-md:h-[5vw] max-lg:w-[3.5vw] max-lg:h-[3.5vw] mr-[.5vw]"
                                        src={Apollo}
                                        alt="channel-pic"
                                    />
                                    <div className="flex flex-col items-start">
                                        <h2 className="font-medium font-satoshi lowercase text-[.8vw] max-sm:text-[1.2vh] max-md:text-[1.2vh] max-lg:text-[1.2vh]">
                                            name of the channel
                                        </h2>
                                        <h3 className="font-normal font-satoshi lowercase text-[.7vw] max-sm:text-[1.1vh] max-md:text-[1.1vh] max-lg:text-[1.1vh] opacity-70">
                                            42 members
                                        </h3>
                                    </div>
                                </div>
                                <button className="join-channel container-1 px-[2vw] py-[.3vw] uppercase font-bold hover:scale-105 text-[.7vw] max-sm:text-[1.1vh] max-md:text-[1.1vh] max-lg:text-[1.1vh]">
                                    join
                                </button>
                            </div>
                        </div>
                        <div className="forth-container container-1 mt-[1vw] p-[1.5vw] max-sm:p-[3vw] w-1/2 overflow-y-scroll no-scrollbar max-sm:w-full max-sm:h-full max-md:w-full max-md:h-full">
                            <h2 className="font-bold font-satoshi uppercase text-[.8vw] max-sm:text-[1.2vh] max-md:text-[1.2vh] max-lg:text-[1.2vh]">
                                leaderboard
                            </h2>
                            <div className="person-div mt-[1vw] max-sm:mt-[2.5vw] max-md:mt-[2vw] max-lg:mt-[2vw] flex justify-between container-1 px-[1.5vw] py-[.5vw] max-sm:py-[1vh] max-md:py-[1vh] max-lg:py-[1vh] items-center">
                                <div className="flex items-center gap-[1vw] max-sm:gap-[1vw] max-md:gap-[1vw] max-lg:gap-[1vw]">
                                    <h1 className="font-black font-satoshi mr-[1vw] text-[.8vw] max-sm:text-[1.2vh] max-md:text-[1.2vh] max-lg:text-[1.2vh]">
                                        1
                                    </h1>
                                    <img
                                        className="rounded-full w-[2vw] h-[2vw] max-sm:w-[7vw] max-sm:h-[7vw] max-md:w-[5vw] max-md:h-[5vw] max-lg:w-[3.5vw] max-lg:h-[3.5vw] mr-[.5vw]"
                                        src={Apollo}
                                        alt="channel-pic"
                                    />
                                    <div className="flex flex-col">
                                        <h2 className="font-medium font-satoshi lowercase text-[.8vw] max-sm:text-[1.2vh] max-md:text-[1.2vh] max-lg:text-[1.2vh]">
                                            username
                                        </h2>
                                        <div className="flex gap-[1vw] max-sm:gap-[7.5vw] max-md:gap-[7.5vw] max-lg:gap-[2.5vw] items-center">
                                            <h3 className="font-normal font-satoshi lowercase text-[.7vw] max-sm:text-[1.1vh] max-md:text-[1.1vh] max-lg:text-[1.1vh]">
                                                games won: 24
                                            </h3>
                                            <h1 className="font-black font-satoshi text-[1vw] max-sm:text-[1.4vh] max-md:text-[1.4vh] max-lg:text-[1.4vh]">
                                                /
                                            </h1>
                                            <h3 className="font-normal font-satoshi lowercase text-[.7vw] max-sm:text-[1.1vh] max-md:text-[1.1vh] max-lg:text-[1.1vh]">
                                                games losses: 12
                                            </h3>
                                            <h1 className="font-black font-satoshi text-[1vw] max-sm:text-[1.4vh] max-md:text-[1.4vh] max-lg:text-[1.4vh]">
                                                /
                                            </h1>
                                            <h3 className="font-normal font-satoshi lowercase text-[.7vw] max-sm:text-[1.1vh] max-md:text-[1.1vh] max-lg:text-[1.1vh]">
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
