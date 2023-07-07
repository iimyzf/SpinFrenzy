import "./Landing.css";
import Navbar from "./Navbar";
import backgroundImg from "../assets/ping.gif";

const Landing = () => {
    return (
        <>
            <div
                className="back "
                style={{
                    backgroundImage: "url(" + backgroundImg + ")",
                    filter: "blur(2px)",
                    backgroundSize: "cover",
                    height: "100vh",
                    zIndex: -1,
                }}
            ></div>
            <div className="text-white flex font-satoshi flex-col items-center justify-center h-screen absolute top-0 left-0 w-full">
                <Navbar />
                <h4 className="text-center font-normal">
                    YOU DON’T HAVE TO BE IN THE SAME ROOM TO PLAY
                </h4>
                <div className="container m-8 w-[35em] h-[25em] flex flex-col justify-center items-center leading-[8em]">
                    <div className="flex flex-col justify-center items-start">
                        <p className="font-black text-[10em]">PING</p>
                        <p className="font-black text-[10em]">PONG</p>
                    </div>
                </div>
                <h3 className="login font-semibold text-[1.2em]">
                    <a href="/profile">42 LOGIN</a>
                </h3>
            </div>
        </>
    );
};

export default Landing;
