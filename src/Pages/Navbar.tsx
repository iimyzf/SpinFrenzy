import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <div className="nav">
            <div className="nav-container">
                <div className="navbar">
                    <div
                        className="menu-toggle"
                        onClick={() => setNavOpen(!navOpen)}
                    >
                        <div
                            className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}
                        >
                            <span
                                className={navOpen ? "lineTop spin" : "lineTop"}
                            ></span>
                            <span
                                className={
                                    navOpen ? "lineBottom spin" : "lineBottom"
                                }
                            ></span>
                        </div>
                    </div>
                </div>
                <div
                    className="nav-overlay"
                    style={{
                        top: navOpen ? "0" : "-100%",
                        transitionDelay: navOpen ? "0s" : "0s",
                    }}
                >
                    <ul className="nav-links">
                        <li className="nav-item flex items-start">
                            1 •
                            <a
                                href="/"
                                onClick={() => setNavOpen(!navOpen)}
                                style={{
                                    top: navOpen ? "0" : "120px",
                                    transitionDelay: navOpen ? "0.6s" : "0s",
                                }}
                            >
                                Home
                            </a>
                            <div className="nav-item-wrapper"></div>
                        </li>
                        <li className="nav-item flex items-start">
                            2 •
                            <a
                                href="chat"
                                onClick={() => setNavOpen(!navOpen)}
                                style={{
                                    top: navOpen ? "0" : "120px",
                                    transitionDelay: navOpen ? "0.7s" : "0s",
                                }}
                            >
                                Chat
                            </a>
                            <div className="nav-item-wrapper"></div>
                        </li>
                        <li className="nav-item flex items-start">
                            3 •
                            <a
                                href="profile"
                                onClick={() => setNavOpen(!navOpen)}
                                style={{
                                    top: navOpen ? "0" : "120px",
                                    transitionDelay: navOpen ? "0.8s" : "0s",
                                }}
                            >
                                Profile
                            </a>
                            <div className="nav-item-wrapper"></div>
                        </li>
                        <li className="nav-item flex items-start">
                            4 •
                            <a
                                href="profile"
                                onClick={() => setNavOpen(!navOpen)}
                                style={{
                                    top: navOpen ? "0" : "120px",
                                    transitionDelay: navOpen ? "0.8s" : "0s",
                                }}
                            >
                                Friends
                            </a>
                            <div className="nav-item-wrapper"></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
