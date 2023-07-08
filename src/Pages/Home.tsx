import "../Pages/Home.css";

const Home = () => {
    return (
        <div className="w-screen h-screen overflow-hidden flex justify-center items-center">
            <div className="relative w-fit h-fit">
                <h1 className="font-black text-[15em]">PING PONG</h1>

                <div className="absolute flex flex-col -top-40 right-0 -rotate-12">
                    <p className="font-black text-start">CHAT</p>
                    <span className="ctr-span ctr-span-chat h-[12em] w-[12em]"></span>
                </div>

                <div className="absolute flex flex-col -top-52 rotate-12">
                    <p className="font-black text-start">FRIENDS</p>
                    <span className="ctr-span ctr-span-friends h-[15em] w-[15em]"></span>
                </div>

                <div className="absolute flex flex-col top-80 -right-24 rotate-12">
                    <span className="ctr-span ctr-span-home h-[10em] w-[10em]"></span>
                    <p className="font-black text-start">HOME</p>
                </div>

                <div className="ctr absolute flex flex-col">
                    <span className="ctr-span h-[16em] w-[16em] "></span>
                    <p className="font-black text-start">PLAY</p>
                </div>

                <div className="absolute flex flex-col top-80 -left-24 -rotate-12">
                    <span className="ctr-span ctr-span-exit h-[12em] w-[12em]"></span>
                    <p className="font-black text-start">EXIT</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
