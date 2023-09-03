import {
    BsFillChatSquareTextFill,
    BsGithub,
    BsInstagram,
    BsLinkedin,
    BsPersonFillAdd,
    BsPersonFillSlash,
} from "react-icons/bs";
import Apollo from "../assets/Apollo.jpg";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import "./ViewProfile.css";
import axios from "axios";


interface UserInfo {
    photo: string;
    username: string;
    firstname: string;
    lastname: string;
    bio: string;
};


const ViewProfile = () => {
    const [chartOptions, setChartOptions] = React.useState({});
    const [chartSeries, setChartSeries] = React.useState<
    { name: string; data: number[] }[]
    >([]);
    const [user, setUser] = useState<UserInfo>();


    const getUserInfo = async () => {
        const queryParams = new URLSearchParams(window.location.search);
        const id = queryParams.get("id");
        axios.get(`http://localhost:3000/users/byid?id=${id}`, {withCredentials: true})
        .then(res => {
            const data = res.data;
            console.log(data);
            setUser({
                photo: data.photo,
                username: data.username,
                firstname: data.firstname,
                lastname: data.lastname,
                bio: data.bio
            });
        });
    };


    useEffect(() => {
        
        getUserInfo();

        setChartOptions({
            stroke: {
                show: true,
                curve: "smooth",
                // lineCap: "butt",
                colors: ["red", "green", "blue", "yellow"],
                width: 2,
            },
            theme: {
                mode: "dark",
            },
            colors: ["red", "green", "blue", "yellow"],
            chart: {
                id: "basic-bar",
                foreColor: "gray",
                toolbar: {
                    offsetX: -10,
                    offsetY: -60,
                },
            },
            xaxis: {
                categories: [
                    "7 / 15",
                    "7 / 16",
                    "7 / 17",
                    "7 / 18",
                    "7 / 19",
                    "7 / 20",
                    "7 / 21",
                    "7 / 22",
                    "7 / 23",
                    "7 / 24",
                ],
            },
        });

        setChartSeries([
            {
                name: "LOSSES",
                data: [1, 3, 2, 1, 1, 6, 2, 3, 4],
            },
            {
                name: "WINS",
                data: [4, 7, 2, 4, 7, 12, 3, 6, 15],
            },
            {
                name: "DRAWS",
                data: [2, 1, 3, 4, 7, 9, 5, 5, 2],
            },
        ]);
    }, []);

    return (
        <div className="parent flex justify-center items-center h-screen gap-[1vw] max-sm:gap-[3vw] max-sm:flex-col max-md:flex-col max-md:my-[2vh]">
            <div className="child-container-1">
                <div className="container-1 font-satoshi text-white w-[18vw] h-[90vh] max-sm:w-[80vw] max-sm:h-[50vh] max-md:w-[80vw] max-md:h-[50vh] flex flex-col justify-center items-center relative">
                    <div className="flex flex-row gap-[1vw] max-sm:gap-[3vw] max-md:gap-[3vw] items-center justify-center absolute top-[5.5vw] max-sm:top-[5.5vw] max-md:top-[5vw]">
                        <button className="btn-1 w-[3vw] h-[3vw] max-sm:w-[5vw] max-sm:h-[5vw] max-md:w-[5vw] max-md:h-[5vw] rounded-full flex justify-center items-center cursor-pointer container-1">
                            <span className="add absolute -top-[2.5vw] font-satoshi text-white font-bold text-[.6vw] max-sm:text-[1.2vw] max-sm:-top-[4vw] max-md:text-[1vw] max-md:-top-[4vw]">
                                Add
                                <br />
                                {user?.username}
                            </span>
                            <BsPersonFillAdd className="text-[1vw] max-sm:text-[2vw] max-md:text-[2vw]" />
                        </button>
                        <button className="btn-2 w-[3vw] h-[3vw] max-sm:w-[5vw] max-sm:h-[5vw] max-md:w-[5vw] max-md:h-[5vw] rounded-full flex justify-center items-center cursor-pointer container-1">
                            <span className="message absolute -top-[2.5vw] font-satoshi text-white font-bold text-[.6vw] max-sm:text-[1.2vw] max-sm:-top-[4vw] max-md:text-[1vw] max-md:-top-[4vw]">
                                Message
                                <br />
                                {user?.username}
                            </span>
                            <BsFillChatSquareTextFill className="text-[1vw] max-sm:text-[2vw] max-md:text-[2vw]" />
                        </button>
                        <button className="btn-3 w-[3vw] h-[3vw] max-sm:w-[5vw] max-sm:h-[5vw] max-md:w-[5vw] max-md:h-[5vw] rounded-full flex justify-center items-center cursor-pointer container-1">
                            <span className="block absolute -top-[2.5vw] font-satoshi text-white font-bold text-[.6vw] max-sm:text-[1.2vw] max-sm:-top-[4vw] max-md:text-[1vw] max-md:-top-[4vw]">
                                Block
                                <br />
                                {user?.username}
                            </span>
                            <BsPersonFillSlash className="text-[1vw] max-sm:text-[2vw] max-md:text-[2vw]" />
                        </button>
                    </div>
                    <div className="img-holder absolute top-[10.5vw] max-sm:top-[14vw] max-md:top-[12vw]">
                        <div className="">
                            <img
                                className="w-[7vw] h-[7vw] max-sm:w-[20vw] max-sm:h-[20vw] max-md:w-[15vw] max-md:h-[15vw] rounded-full"
                                src={user?.photo}
                                alt="Apollo"
                            />
                            <span className="status rounded-full bg-green-400 w-[1.5vw] h-[1.5vw] max-sm:w-[4vw] max-sm:h-[4vw] max-md:w-[3vw] max-md:h-[3vw] absolute top-0 right-[.5vw]"></span>
                        </div>
                    </div>
                    <h4 className="font-light absolute top-[18vw] text-[1vw] max-sm:top-[36vw] max-sm:text-[2.2vw] max-md:top-[28vw] max-md:text-[1.5vw]">
                        {user?.username}
                    </h4>
                    <h3 className="font-bold absolute top-[19.5vw] text-[1vw] max-sm:top-[39vw] max-sm:text-[2.5vw] max-md:top-[30vw] max-md:text-[1.5vw]">
                        {user?.firstname} {user?.lastname}
                    </h3>
                    <div className="bio flex absolute top-[22vw] max-sm:top-[45vw] max-md:top-[34vw] justify-center items-start">
                        <p className="font-light w-[15vw] max-sm:w-full max-md:w-full text-ellipsis text-start text-[1vw] max-sm:text-[2.8vw] max-sm:px-[3vw] max-md:text-[2vw] max-md:px-[3vw]">
                            {user?.bio}
                        </p>
                    </div>
                    <ul className="flex gap-[2vw] max-sm:gap-[3vw] max-md:gap-[4vw] absolute bottom-[4vw] max-sm:bottom-[6vw] max-md:bottom-[6vw]">
                        <li>
                            <a
                                href="#"
                                className="text-[1vw] max-sm:text-[3vw] max-md:text-[2.4vw]"
                            >
                                <BsGithub />
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-[1vw] max-sm:text-[3vw] max-md:text-[2.4vw]"
                            >
                                <BsLinkedin />
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-[1vw] max-sm:text-[3vw] max-md:text-[2.4vw]"
                            >
                                <BsInstagram />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="child-container-2">
                <div className="container-2 font-satoshi text-white w-[75vw] h-[90vh] max-sm:w-[80vw] max-sm:h-[50vh] max-md:w-[80vw] max-md:h-[50vh] flex flex-col justify-center items-center relative overflow-y-scroll no-scrollbar overflow-hidden">
                    <div className="editable absolute left-[2vw] top-[3vw] max-sm:left-[5vw] max-sm:top-[5vw] max-md:left-[5vw] max-md:top-[5vw]">
                        <h3 className="text-[1vw] max-sm:text-[2.5vw] max-md:text-[2vw]">
                            Match Statistics for <strong>Username</strong>
                        </h3>
                    </div>
                    <Chart
                        className="w-[60vw] h-full max-sm:w-[70vw] max-sm:h-full max-md:w-[70vw] max-md:h-full pt-[10vw] max-sm:pt-[30vw] max-md:pt-[15vw] text-[1vw] max-sm:text-[1vw]"
                        options={chartOptions}
                        series={chartSeries}
                        type="area"
                        // height={650}
                        // width={1150}
                    />
                </div>
            </div>
        </div>
    );
};

export default ViewProfile;
