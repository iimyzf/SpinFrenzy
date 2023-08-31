import {
    BsFillChatSquareTextFill,
    BsGithub,
    BsInstagram,
    BsLinkedin,
    BsPersonFillAdd,
    BsPersonFillSlash,
} from "react-icons/bs";
import Apollo from "../assets/Apollo.jpg";
import React from "react";
import Chart from "react-apexcharts";
import "./ViewProfile.css";
import axios from "axios";

const ViewProfile = () => {
    const [chartOptions, setChartOptions] = React.useState({});
    const [chartSeries, setChartSeries] = React.useState<
        { name: string; data: number[] }[]
    >([]);
    
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get("id");


    
    React.useEffect(() => {
        axios.get(`http://localhost:3000/users/byid?id=${id}`, {withCredentials: true})
        .then(res => {
            console.log(res.data);
        });
        
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
        <div className="parent flex justify-center items-center gap-[1vw] h-screen">
            <div className="child-container-1">
                <div className="container-1 font-satoshi text-white w-[18vw] h-[91.5vh] flex flex-col justify-center items-center relative">
                    <div className="flex flex-row gap-[1vw] items-center justify-center absolute top-[5.5vw]">
                        <button className="btn-1 w-[3vw] h-[3vw] rounded-full flex justify-center items-center cursor-pointer container-1">
                            <span className="add absolute -top-[2.5vw] font-satoshi text-white font-bold text-[.6vw]">
                                Add
                                <br />
                                @USERNAME
                            </span>
                            <BsPersonFillAdd className="text-[1vw]" />
                        </button>
                        <button className="btn-2 w-[3vw] h-[3vw] rounded-full flex justify-center items-center cursor-pointer container-1">
                            <span className="message absolute -top-[2.5vw] font-satoshi text-white font-bold text-[.6vw]">
                                Message
                                <br />
                                @USERNAME
                            </span>
                            <BsFillChatSquareTextFill className="text-[1vw]" />
                        </button>
                        <button className="btn-3 w-[3vw] h-[3vw] rounded-full flex justify-center items-center cursor-pointer container-1">
                            <span className="block absolute -top-[2.5vw] font-satoshi text-white font-bold text-[.6vw]">
                                Block
                                <br />
                                @USERNAME
                            </span>
                            <BsPersonFillSlash className="text-[1vw]" />
                        </button>
                    </div>
                    <div className="img-holder absolute top-[10.5vw]">
                        <div className="">
                            <img
                                className="w-[7vw] h-[7vw] rounded-full"
                                src={Apollo}
                                alt="Apollo"
                            />
                            <span className="status rounded-full bg-green-400 w-[1.5vw] h-[1.5vw] absolute top-0 right-[.5vw]"></span>
                        </div>
                    </div>
                    <h4 className="font-light absolute top-[18vw] text-[1vw]">
                        @mamella
                    </h4>
                    <h3 className="font-bold absolute top-[19.5vw] text-[1vw]">
                        Mamella Industry
                    </h3>
                    <div className="bio flex absolute top-[22vw] justify-center items-start">
                        <p className="font-light w-[15vw] text-ellipsis text-start text-[1vw]">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Quas, quis quae nulla optio suscipit libero
                            excepturi omnis cum, quidem cupiditate
                            asperioresodio quam! Distinctio nesciunt soluta quam
                            quas accusamus minus? Lorem ipsum dolor sit amet
                            consectetured
                        </p>
                    </div>
                    <ul className="flex gap-[2vw] absolute bottom-[4vw]">
                        <li>
                            <a href="#" className="text-[1vw]">
                                <BsGithub />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-[1vw]">
                                <BsLinkedin />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-[1vw]">
                                <BsInstagram />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="child-container-2">
                <div className="container-2 font-satoshi text-white w-[70vw] h-[91.5vh] flex flex-col justify-center items-center relative overflow-y-auto">
                    <div className="editable absolute left-[2vw] top-[3vw]">
                        <h3 className="text-[1vw]">
                            Match Statistics for <strong>Username</strong>
                        </h3>
                    </div>
                    <Chart
                        className="w-[60vw] h-full pt-[10vw] text-[1vw]"
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
