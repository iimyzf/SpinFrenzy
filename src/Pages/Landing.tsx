import "./Landing.css";
import Navbar from "./Navbar";
import backgroundImg from "../assets/ping.gif";
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <>
            <div
                className="back "
                style={{
                    backgroundImage: "url(" + backgroundImg + ")",
                    filter: "blur(2px)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "100vh",
                    zIndex: -1,
                }}
            ></div>
            <div className="text-white flex font-satoshi flex-col items-center justify-center h-screen absolute top-0 left-0 w-full">
                <Navbar />
                <h4 className="text-center font-normal xs:text-[1em] xs:leading-4 xs:px-5">
                    YOU DON’T HAVE TO BE IN THE SAME ROOM TO PLAY
                </h4>
                <div className="container m-8 xs:w-[20em] xs:h-[15em] sm:w-[35em] sm:h-[25em] flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-start xs:leading-[4em] sm:leading-[8em]">
                        <p className="font-black xs:text-[5em] sm:text-[10em]">
                            PING
                        </p>
                        <p className="font-black xs:text-[5em] sm:text-[10em]">
                            PONG
                        </p>
                    </div>
                </div>
                <div className="login bg-red-00 w-[29em] font-semibold xs:text-[1em] sm:text-[1.2em] flex justify-between xs:gap-3 xl:gap-5 xs:flex-col xl:flex-row">
                    <Link
                        className="container h-10 rounded-lg flex justify-center items-center font-bold hover:scale-110"
                        to="/home"
                    >
                        42 Intra
                    </Link>
                    <Link
                        className="container h-10 rounded-lg flex justify-center items-center font-bold hover:scale-110"
                        to="/profile"
                    >
                        Google
                    </Link>
                    <Link
                        className="container h-10 rounded-lg flex justify-center items-center font-bold hover:scale-110"
                        to="/profile"
                    >
                        Sign In
                    </Link>
                </div>
                <div className="m-8 font-normal flex items-center justify-center gap-4">
                    <p className="font-normal">Don't have an account yet?</p>
                    <Link
                        to="/sign-up"
                        className="font-bold text-[1.2em] hover:scale-110 hover:underline"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </>
    );
};
// container w-40 h-10
// container w-40 h-10
// container w-40 h-10

export default Landing;
