import "./Landing.css";

const Landing = () => {
    return (
        <div className=" text-white flex font-satoshi flex-col items-center justify-center h-screen">
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
    );
};

export default Landing;
