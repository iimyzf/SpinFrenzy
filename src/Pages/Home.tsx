import "../Pages/Home.css";
import { GiThreeFriends } from "react-icons/gi";
import { IoChatbubblesSharp } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { IoGameController } from "react-icons/io5";
import { ImExit } from "react-icons/im";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
    const [isXsScreen, setIsXsScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsXsScreen(window.innerWidth < 1280);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="w-screen h-screen overflow-hidden flex justify-center items-center">
            <div className="relative flex flex-col">
                <h1 className="font-black xs:text-[8em] xl:text-[15em] xs:leading-[0.8em] xs:mb-20 xs:text-center">
                    PING PONG
                </h1>

                <div className="xs:flex xs:flex-wrap xs:flex-1 xs:justify-center xs:items-center xs:gap-4">
                    <Link to="/chat">
                        <div className="xl:absolute flex flex-col xl:-top-40 xl:right-0 xl:-rotate-12">
                            {isXsScreen ? (
                                <>
                                    <span className="ctr-span ctr-span-chat flex justify-center items-center xs:w-[8em] xs:h-[8em] xl:h-[12em] xl:w-[12em]">
                                        <IoChatbubblesSharp className="text-4xl" />
                                    </span>
                                    <p className="font-black text-start">
                                        CHAT
                                    </p>
                                </>
                            ) : (
                                <>
                                    <p className="font-black text-start">
                                        CHAT
                                    </p>
                                    <span className="ctr-span ctr-span-chat flex justify-center items-center xs:w-[8em] xs:h-[8em] xl:h-[12em] xl:w-[12em]">
                                        <IoChatbubblesSharp className="text-4xl" />
                                    </span>
                                </>
                            )}
                        </div>
                    </Link>

                    <Link to="/friends">
                        <div className="xl:absolute flex flex-col xl:-top-52 xs:left-0 xl:rotate-12">
                            {isXsScreen ? (
                                <>
                                    <span className="ctr-span ctr-span-friends flex justify-center items-center xs:w-[8em] xs:h-[8em] xl:h-[15em] xl:w-[15em]">
                                        <GiThreeFriends className="text-4xl" />
                                    </span>
                                    <p className="font-black text-start">
                                        FRIENDS
                                    </p>
                                </>
                            ) : (
                                <>
                                    <p className="font-black text-start">
                                        FRIENDS
                                    </p>
                                    <span className="ctr-span ctr-span-friends flex justify-center items-center xs:w-[8em] xs:h-[8em] xl:h-[15em] xl:w-[15em]">
                                        <GiThreeFriends className="text-4xl" />
                                    </span>
                                </>
                            )}
                        </div>
                    </Link>

                    <Link to="/home">
                        <div className="xl:absolute flex flex-col xl:top-80 xl:-right-24 xl:rotate-12">
                            {isXsScreen ? (
                                <>
                                    <span className="ctr-span ctr-span-home flex justify-center items-center xs:w-[8em] xs:h-[8em] xl:h-[10em] xl:w-[10em]">
                                        <IoHome className="text-4xl" />
                                    </span>
                                    <p className="font-black text-start">
                                        HOME
                                    </p>
                                </>
                            ) : (
                                <>
                                    <span className="ctr-span ctr-span-home flex justify-center items-center xs:w-[8em] xs:h-[8em] xl:h-[10em] xl:w-[10em]">
                                        <IoHome className="text-4xl" />
                                    </span>
                                    <p className="font-black text-start">
                                        HOME
                                    </p>
                                </>
                            )}
                        </div>
                    </Link>

                    <Link to="/gamemode">
                        <div className="xl:absolute xl:top-1/1 xl:left-1/2 xl:transform xl:-translate-x-1/2 xl:-translate-y-1/2 flex flex-col">
                            {isXsScreen ? (
                                <>
                                    <span className="ctr-span xs:w-[8em] xs:h-[8em] xl:h-[16em] xl:w-[16em] flex justify-center items-center">
                                        <IoGameController className="text-4xl" />
                                    </span>
                                    <p className="font-black text-start">
                                        PLAY
                                    </p>
                                </>
                            ) : (
                                <>
                                    <span className="ctr-span xs:w-[8em] xs:h-[8em] xl:h-[16em] xl:w-[16em] flex justify-center items-center">
                                        <IoGameController className="text-4xl" />
                                    </span>
                                    <p className="font-black text-start">
                                        PLAY
                                    </p>
                                </>
                            )}
                        </div>
                    </Link>

                    <Link to="/">
                        <div className="xl:absolute flex flex-col xl:top-80 xl:-left-24 xl:-rotate-12">
                            {isXsScreen ? (
                                <>
                                    <span className="ctr-span ctr-span-exit xs:w-[8em] xs:h-[8em] xl:h-[12em] xl:w-[12em] flex justify-center items-center">
                                        <ImExit className="text-4xl" />
                                    </span>
                                    <p className="font-black text-start">
                                        EXIT
                                    </p>
                                </>
                            ) : (
                                <>
                                    <span className="ctr-span ctr-span-exit xs:w-[8em] xs:h-[8em] xl:h-[12em] xl:w-[12em] flex justify-center items-center">
                                        <ImExit className="text-4xl" />
                                    </span>
                                    <p className="font-black text-start">
                                        EXIT
                                    </p>
                                </>
                            )}
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
