import { LineLoop } from "three";
import ecellWhite from "../assets/Logo-White.png";
import { Link } from "react-router-dom";
import About from "./About";

export default function Navbar() {
    return (
        <section
            id="navbar"
            className="text-sm font-light bg-transparent font-Poppins"
        >
            <div className="absolute z-20 flex items-center justify-between w-full px-5 pt-4">
                <Link to="/" className="flex items-center">
                    <img src={ecellWhite} className="w-[4rem] ml-8" alt="" />
                </Link>

                <ul className="flex items-center md:mr-8 space-x-9">
                    <li>
                        <Link to="/"
                            className="font-thin text-amber-400 hover:text-cyan-300"
                        >
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link to="/About"
                            className="font-thin text-amber-400 hover:text-cyan-300"
                        >
                            About Us
                        </Link>
                    </li>

                    <li>
                        <Link to="/Initiative"
                            className="font-thin text-amber-400 hover:text-cyan-300"
                        >
                            Initiatives
                        </Link>
                    </li>

                    <li>
                        <Link to="/Gallery"
                            className="font-thin text-amber-400 hover:text-cyan-300"
                        >
                            Gallery
                        </Link>
                    </li>

                    <li>
                        <Link to="/ReachOut"
                            className="font-thin text-amber-400 hover:text-cyan-300"
                        >
                            Reach Out
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    );
}
