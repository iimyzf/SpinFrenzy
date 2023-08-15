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

const ViewProfile = () => {
    const [chartOptions, setChartOptions] = React.useState({});
    const [chartSeries, setChartSeries] = React.useState<
        { name: string; data: number[] }[]
    >([]);

    React.useEffect(() => {
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
        <div className="parent flex xs:flex-col xl:flex-row justify-center items-center xs:gap-5 xl:gap-0 xs:m-5 xl:m-0">
            <div className="child-container-1 xl:h-screen xl:pr-3">
                <div className="container-1 font-satoshi text-white xs:w-[20em] xs:h-[35em] xl:w-[20em] xl:h-[55em] flex flex-col justify-center items-center relative">
                    <div className="flex flex-row gap-5 items-center justify-center absolute xs:top-[3.2em] xl:top-[5.5em]">
                        <button className="btn-1 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-red400 container-1">
                            <span className="add absolute -top-10 font-satoshi text-white font-bold">
                                Add
                                <br />
                                @USERNAME
                            </span>
                            <BsPersonFillAdd />
                        </button>
                        <button className="btn-2 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-green400 container-1">
                            <span className="message absolute -top-10 font-satoshi text-white font-bold">
                                Message
                                <br />
                                @USERNAME
                            </span>
                            <BsFillChatSquareTextFill />
                        </button>
                        <button className="btn-3 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-blue400 container-1">
                            <span className="block absolute -top-10 font-satoshi text-white font-bold">
                                Block
                                <br />
								@USERNAME
                            </span>
                            <BsPersonFillSlash />
                        </button>
                    </div>
                    <div className="img-holder absolute xs:top-[7em] xl:top-[10.5em] bg-blue300">
                        <div className="">
                            <img
                                className="xs:w-[6em] xs:h-[6em] xl:w-[8em] xl:h-[8em] rounded-full"
                                src={Apollo}
                                alt="Apollo"
                            />
                            <span className="status rounded-full bg-green-400 xs:w-[1.3em] xs:h-[1.3em] xl:w-[1.8em] xl:h-[1.8em] absolute top-1 right-1"></span>
                        </div>
                        {/* <button className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-14 bg-yellow-400 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"></button>
                        <button className="absolute top-1/2 left-0 transform -translate-x-10 -translate-y-1/2 bg-red-400 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"></button>
                        <button className="absolute top-1/2 right-0 transform translate-x-10 -translate-y-1/2 bg-pink-400 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"></button> */}
                    </div>
                    <h4 className="font-light absolute xs:top-[13.5em] xl:top-[19em]">
                        @USERNAME
                    </h4>
                    <h3 className="font-bold absolute xs:top-[15em] xl:top-[20.5em]">
                        MAMELLA INDUSTRY
                    </h3>
                    <div className="bio flex absolute xs:top-[18em] xl:top-[24em] justify-center items-start">
                        <p className="font-light w-[16em] leading-5 text-ellipsis text-start">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Quas, quis quae nulla optio suscipit libero
                            excepturi omnis cum, quidem cupiditate
                            asperioresodio quam! Distinctio nesciunt soluta quam
                            quas accusamus minus? Lorem ipsum dolor sit amet
                            consectetured
                        </p>
                    </div>
                    <ul className="flex gap-5 absolute xs:bottom-14 xl:bottom-20">
                        <li>
                            <a href="#">
                                <BsGithub />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <BsLinkedin />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <BsInstagram />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="child-container-2 xl:h-screen xl:pl-3 bg-green300">
                <div className="container-2 font-satoshi text-white xs:w-[20em] xs:h-[35em] xl:w-[80em] xl:h-[55em] flex flex-col justify-center items-center relative bg-red200 overflow-y-auto">
                    <div className="editable absolute xs:top-14 xl:left-20 xl:top-16 bg-blue500">
                        <h3 className="pb-3 uppercase">
                            Match Statistics for Username
                        </h3>
                    </div>
                    <Chart
                        className="xl:w-[55w] pt-20"
                        options={chartOptions}
                        series={chartSeries}
                        type="area"
                        height={650}
                        width={1150}
                    />
                </div>
            </div>
        </div>
    );
};

export default ViewProfile;
