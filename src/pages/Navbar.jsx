import React from "react";
import { Link, useLocation } from "react-router-dom";
import ecellWhite from "../assets/Logo-White.png";

export default function Navbar() {
    const location = useLocation();
    const isReachOutPage = location.pathname === "/ReachOut";

    return (
        <section
            id="navbar"
            className={`text-sm font-light font-Poppins ${
                isReachOutPage ? "bg-black" : "bg-white"
            }`}
        >
            <div className="absolute z-20 flex items-center justify-between w-full px-5 py-4">
                <Link to="/" className="flex items-center">
                    <img src={ecellWhite} className="w-[4rem] ml-8" alt="" />
                </Link>

                <ul className="flex items-center space-x-6 md:space-x-9">
                    <NavItem to="/" label="Home" />
                    <NavItem to="/About" label="About Us" />
                    <NavItem to="/Initiative" label="Initiatives" />
                    <NavItem to="/Gallery" label="Gallery" />
                    <NavItem to="/ReachOut" label="Reach Out" />
                </ul>
            </div>
        </section>
    );
}

// Create a separate NavItem component
function NavItem({ to, label }) {
    return (
        <li className="relative">
            <Link
                to={to}
                className="font-bold text-white hover:text-cyan-300 transition duration-300"
            >
                {label}
            </Link>
        </li>
    );
}
