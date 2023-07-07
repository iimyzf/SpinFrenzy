import "./Gamemode.css";

const GameMode = () => {
    return (
        <>
            <div className="flex flex-col items-center space-y-40 h-screen">
                <h1 className="pt-40 text-9xl font-satoshi font-black">GAME MODE</h1>
                <div className="grid grid-cols-2 gap-20 justify-around">
                    <div className="card w-96 h-96 hover:scale-105"></div>
                    <div className="card w-96 h-96"></div>
                    <div className="card w-96 h-96"></div>
                </div>
        
            </div>
        </>
    );
};

export default GameMode;
