import apollo from "../assets/apollo.jpg";
import "../Pages/Home.css";

const Home = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <p className="font-black text-[10em] tracking-tighter text-white">
                RANDOM AS FUCK
            </p>

            <span className="container play-span h-[12em] w-[12em] bg-red- absolute top-20 right-96 -rotate-12 rounded-xl flex justify-center items-center">
                <p className="text-3xl font-black">WATCH</p>
            </span>
            <span className="container play-span h-[15em] w-[15em] bg-red- absolute top-40 left-80 rotate-12 rounded-xl flex justify-center items-center">
                <p className="text-3xl font-black">FRIENDS</p>
            </span>
            <span className="container play-span h-[15em] w-[15em] bg-red- absolute bottom-60 right-20 rotate-12 rounded-xl flex justify-center items-center">
                <p className="text-3xl font-black">CHAT</p>
            </span>
            <span className="container play-span h-[20em] w-[20em] bg-red- absolute top-[50%] right-[40%] -rotate-12 rounded-xl flex justify-center items-center">
                <p className="text-3xl font-black">PLAY</p>
            </span>
            <span className="container play-span h-[12em] w-[12em] bg-red- absolute bottom-40 left-40 -rotate-12 rounded-xl flex justify-center items-center">
                <p className="text-3xl font-black">EXIT</p>
            </span>
            {/* <img src={apollo} alt="apollo" className="h-[12em] w-[12em] absolute top-20 right-96 -rotate-12 rounded-lg"/>
            <img
                src={apollo}
                alt="apollo"
                className="h-[15em] w-[15em] absolute top-40 left-80 rotate-12 rounded-lg"
            />
            <img
                src={apollo}
                alt="apollo"
                className="h-[15em] w-[15em] absolute bottom-60 right-20 rotate-12 rounded-lg"
            />
            <img
                src={apollo}
                alt="apollo"
                className="h-[20em] w-[20em] absolute top-[50%] right-[40%] -rtate-12 rounded-lg"
            />
            <img
                src={apollo}
                alt="apollo"
                className="h-[12em] w-[12em] absolute bottom-40 left-40 -rotate-12 rounded-lg"
            />*/}
        </div>
    );
};

export default Home;
