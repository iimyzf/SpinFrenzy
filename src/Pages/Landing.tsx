import "./Landing.css";
import backgroundImg from "../assets/ping.gif";
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <>
            <div
                className="back "
                style={{
                    backgroundImage: "url(" + backgroundImg + ")",
                    // filter: "blur(1px)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "100vh",
                    zIndex: -1,
                }}
            ></div>
            <div className="text-white flex font-satoshi flex-col items-center justify-center h-screen absolute top-0 left-0 w-full">
                {/* <h4 className="text-center font-normal text-[1vw] bg-red200">
                    YOU DON’T HAVE TO BE IN THE SAME ROOM TO PLAY
                </h4> */}
                <div className="containe flex flex-col justify-center items-center bg-red400 mb-[2vw]">
                    <div className="flex flex-col justify-center items-center">
                    <p className="font-black text-[8vw] font-satoshi">
                        SpinFrenzy
                    </p>
                    <p className="font-light text-center text-[1.2vw] font-satoshi uppercae -mt-[2vw] mb-[1.5vw]">
                        aka, ft_transcendence
                    </p>
                    </div>
                </div>
                <div className="w-[20vw] font-semibold text-[1vw] flex flex-col justify-between gap-[1vw] bg-red600">
                    <Link
                        className="container h-[2.5vw] rounded-[.6vw] flex justify-center items-center font-bold hover:scale-105"
                        to="http://localhost:3000/auth/signin"
                    >
                        42 Intra
                    </Link>
                    <Link
                        className="container h-[2.5vw] rounded-[.6vw] flex justify-center items-center font-bold hover:scale-105"
                        to= "http://localhost:3000/auth/google/signin"
                    >
                        Google
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Landing;
