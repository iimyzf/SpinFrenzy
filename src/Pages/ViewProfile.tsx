import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import Apollo from "../assets/Apollo.jpg";
import React from "react";
import Chart from "react-apexcharts";

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
                lineCap: "butt",
                colors: undefined,
                width: 1,
                // dashArray: 0,
            },
            colors: ["red", "green", "blue",],
            chart: {
                id: "basic-bar",
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
                ],
            },
        });

        setChartSeries([
            {
                name: "losses",
                data: [1, 3, 2, 1, 1, 6, 2, 3, 4],
            },
            {
                name: "wins",
                data: [4, 7, 2, 4, 7, 12, 3, 6, 2],
            },
            {
                name: "draws",
                data: [2, 1, 3, 4, 7, 9, 5, 5, 2],
            },
        ]);
    }, []);

    return (
        <div className="parent flex justify-center items-center">
            <div className="child-container-1 pr-3">
                <div className="container-1 font-satoshi text-white w-[20em] h-[55em] flex flex-col justify-center items-center relative">
                    <div className="img-holder absolute top-[8em]">
                        <img
                            className="w-[8em] h-[8em] rounded-full"
                            src={Apollo}
                            alt="Apollo"
                        />
                        <span className="status rounded-full bg-green-400 w-[1.8em] h-[1.8em] absolute top-1 right-1"></span>
                    </div>
                    <h4 className="font-light absolute top-[18em]">
                        @USERNAME
                    </h4>
                    <h3 className="font-bold absolute top-[19.5em]">
                        MAMELLA INDUSTRY
                    </h3>
                    <div className="bio flex absolute top-[22em] justify-center items-start">
                        <p className="font-light w-[16em] leading-5 text-ellipsis text-justify">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Quas, quis quae nulla optio suscipit libero
                            excepturi omnis cum, quidem cupiditate asperiores
                            odio quam! Distinctio nesciunt soluta quam quas
                            accusamus minus? Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Aspernatur fugit
                            praesentium ducimus atque! Reprehenderit
                            exercitationem, saepe iusto ut nulla sit totam
                            repudiandae quia, omnis odio minus numquam nam
                            adipisci assumenda.
                        </p>
                    </div>
                    <ul className="flex gap-5 absolute bottom-20">
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
            <div className="child-container-2 pl-3">
                <div className="container-2 font-satoshi text-white w-[80em] h-[55em] flex flex-col justify-center items-center">
                    <div className="editable">
                        <h3 className="pb-3">USERNAME</h3>
                    </div>
                    <Chart
                        className="chart flex justify-center w-[90em]"
                        options={chartOptions}
                        series={chartSeries}
                        type="area"
                        // height={400}
                        width="1000"
                    />
                </div>
            </div>
        </div>
    );
};

export default ViewProfile;
