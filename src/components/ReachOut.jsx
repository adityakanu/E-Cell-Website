import ECell from "../assets/Logo.png";
import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";
import Linkedin from "../assets/linkedin.svg";
import Twiter from "../assets/twitter.svg";
export default function ReachOut() {
    return (
        <section id="ReachOut">
            <div className="flex p-10 bg-white reachOutContainer">
                <div className="flex flex-row w-screen reachOutInnerContainer">
                    <div className="text-white bg-black px-50 reachOut-address font-Montserrat">
                        <h1 className="text-xl font-bold">Reach out to us</h1>
                        <br />
                        <h3>Address</h3>
                        <p>
                            E-CELL, RIC Center, Computer ScienceDepartment, NIT,
                            Agartala, Tripura 799046
                        </p>
                        <br />
                        <h3>Contact</h3>
                        <p>+91 88809 89098</p>
                        <br />
                        <h3>E-Mail</h3>
                        <p>ecellnita@gmail.com</p>
                        <div className="flex socialMedia">
                            <a href="https://www.facebook.com/ecellnita/">
                                <img src={Facebook} alt="" />
                            </a>
                            <a href="https://www.instagram.com/ecellnita/">
                                <img src={Instagram} alt="" />
                            </a>
                            <a href="https://www.linkedin.com/company/ecellnita/">
                                <img src={Linkedin} alt="" />
                            </a>
                            <a href="https://twitter.com/ecellnita">
                                <img src={Twiter} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="container py-8 mx-auto Mailus bg-amber-500">
                        <form className="max-w-md mx-auto">
                            <h2 className="mb-4 text-2xl font-bold">Mail Us</h2>
                            <div className="mb-4">
                                <label
                                    className="block mb-2 text-sm font-bold text-gray-700"
                                    htmlFor="name"
                                >
                                    Name
                                </label>
                                <input
                                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block mb-2 text-sm font-bold text-gray-700"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block mb-2 text-sm font-bold text-gray-700"
                                    htmlFor="message"
                                >
                                    Message
                                </label>
                                <textarea
                                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                                    id="message"
                                    rows="5"
                                    placeholder="Enter your message"
                                ></textarea>
                            </div>
                            <div className="flex justify-center">
                                <button
                                    className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="flex p-10 bg-black contactUs text-White w-200 font-Montserrat">
                <div id="map" className="flex ">
                    <iframe
                        src="https://www.google.com/maps/place/E-CELL,+NIT+Agartala/@23.840679,91.423346,15z/data=!4m6!3m5!1s0x3753ed686722f717:0x18d822d15feb14af!8m2!3d23.8406785!4d91.4233464!16s%2Fg%2F11g24q3qqm?hl=en&entry=ttu"
                        height="300"
                        width="300"
                    ></iframe>

                    <div className="grid content-start p-10 text-white">
                        <h3>Address</h3>
                        <p>
                            E-CELL, RIC Center, Computer ScienceDepartment, NIT,
                            Agartala, Tripura 799046
                        </p>
                        <br />
                        <h3>Contact</h3>
                        <p>+91 88809 89098</p>
                        <br />
                        <h3>E-Mail</h3>
                        <p>ecellnita@gmail.com</p>
                    </div>
                    <img src={ECell} className="p-10 h-60" />
                </div>
            </div>
        </section>
    );
}
