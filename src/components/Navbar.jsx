import ecellWhite from "../assets/Logo-White.png";

export default function Navbar() {
    return (
        <section
            id="navbar"
            className="text-sm font-light bg-transparent font-Poppins"
        >
            <div className="absolute z-20 flex items-center justify-between w-full px-5 pt-4">
                <a href="/" className="flex items-center">
                    <img src={ecellWhite} className="w-[4rem] ml-8" alt="" />
                </a>

                <ul className="flex items-center md:mr-8 space-x-9">
                    <li>
                        <a
                            className="font-thin text-amber-400 hover:text-cyan-300"
                            href="/"
                        >
                            Home
                        </a>
                    </li>

                    <li>
                        <a
                            className="font-thin text-amber-400 hover:text-cyan-300"
                            href="/"
                        >
                            About Us
                        </a>
                    </li>

                    <li>
                        <a
                            className="font-thin text-amber-400 hover:text-cyan-300"
                            href="/"
                        >
                            Initiatives
                        </a>
                    </li>

                    <li>
                        <a
                            className="font-thin text-amber-400 hover:text-cyan-300"
                            href="/"
                        >
                            Gallery
                        </a>
                    </li>

                    <li>
                        <a
                            className="font-thin text-amber-400 hover:text-cyan-300"
                            href="/"
                        >
                            Reach Out
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}
