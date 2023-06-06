import "./Profile.css";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const Profile = () => {
    return (
        <div className="parent-container p-10">
            <div className="container-1 font-satoshi text-white w-[20em] h-[55em] flex flex-col justify-center items-center relative">
                <div className="img-holder absolute top-[8em]">
                    <img
                        className="w-[8em] h-[8em] rounded-full"
                        src="https://cdna.artstation.com/p/assets/images/images/054/000/524/large/fall-fox-collection-solar-gods.jpg?1663539057"
                        alt="Apollo"
                    />
                    <span className="rounded-full bg-purple-500 w-[2em] h-[2em]"></span>
                </div>
                <h4 className="font-light absolute top-[18em]">@USERNAME</h4>
                <h3 className="font-bold absolute top-[19.5em]">
                    MAMELLA INDUSTRY
                </h3>
                <div className="bio flex absolute top-[22em] justify-center items-start">
                    <p className="text-justify w-[16em] leading-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Explicabo repudiandae numquam pariatur? Maxime quam,
                        vero obcaecati explicabo, ipsa eius deleniti a amet,
                        quisquam commodi beatae qui! Facere cupiditate quisquam
                        cumque. Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Temporibus, aliquid facilis nisi magni
                        enim veritatis sit ipsa a expedita sunt. Voluptas totam
                        laudantium quas fugiat architecto iusto placeat, nam
                        facilis?
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
    );
};

export default Profile;
