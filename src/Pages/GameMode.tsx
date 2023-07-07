import "./Gamemode.css";

const GameMode = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen">
                <h1 className="text-8xl font-satoshi font-black">GAME MODE</h1>
                <div className="mt-5 flex gap-5">
                    <div className="card w-60 h-60"></div>
                    <div className="card w-60 h-60"></div>
                    <div className="card w-60 h-60"></div>
                </div>
            </div>
        </>
    );
};

export default GameMode;
