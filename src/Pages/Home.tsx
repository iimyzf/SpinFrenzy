import "../Pages/Home.css";

const Home = () => {
    return (
        <div className="w-screen h-screen overflow-hidden flex justify-center items-center">
            <div className="astro relative w-fit h-fit">
                <h1 className="font-black text-[15em]">RANDOM</h1>
                <div className="absolute -top-10 right-0 z-0">
                    <span className="bg-red-500 h-[12em] w-[12em] -rotate-12 rounded-xl flex justify-center items-center"></span>
                </div>
                <div className="absolute -top-20 z-0">
                    <span className="cntr bg-green-500 h-[15em] w-[15em] rotate-12 rounded-xl flex justify-center items-center"></span>
                </div>
            </div>
        </div>
    );
};

export default Home;
