import "../Pages/Home.css";
import { GiThreeFriends } from "react-icons/gi";
import { IoChatbubblesSharp } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { IoGameController } from "react-icons/io5";
import { ImExit } from "react-icons/im";

const Home = () => {
    return (
        <div className="w-screen h-screen overflow-hidden flex justify-center items-center">
            <div className="relative w-fit h-fit">
                <h1 className="font-black text-[15em]">PING PONG</h1>

                <div className="absolute flex flex-col -top-40 right-0 -rotate-12">
                    <p className="font-black text-start">CHAT</p>
                    <span className="ctr-span ctr-span-chat flex justify-center items-center h-[12em] w-[12em]">
                        <IoChatbubblesSharp className="text-4xl" />
                    </span>
                </div>

                <div className="absolute flex flex-col -top-52 rotate-12">
                    <p className="font-black text-start">FRIENDS</p>
                    <span className="ctr-span ctr-span-friends flex justify-center items-center h-[15em] w-[15em]">
                        <GiThreeFriends className="text-4xl" />
                    </span>
                </div>

                <div className="absolute flex flex-col top-80 -right-24 rotate-12">
                    <span className="ctr-span ctr-span-home flex justify-center items-center h-[10em] w-[10em]">
                        <IoHome className="text-4xl" />
                    </span>
                    <p className="font-black text-start">HOME</p>
                </div>

                <div className="ctr absolute flex flex-col">
                    <span className="ctr-span h-[16em] w-[16em] flex justify-center items-center">
                        <IoGameController className="text-4xl" />
                    </span>
                    <p className="font-black text-start">PLAY</p>
                </div>

                <div className="absolute flex flex-col top-80 -left-24 -rotate-12">
                    <span className="ctr-span ctr-span-exit h-[12em] w-[12em] flex justify-center items-center">
                        <ImExit className="text-4xl" />
                    </span>
                    <p className="font-black text-start">EXIT</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
