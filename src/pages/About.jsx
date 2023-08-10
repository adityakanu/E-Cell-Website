import ECellAbout from "../assets/grp.jpg";

export default function About() {
    return (
        <section id="About" className="bg-yellow-600 font-Poppins">
            <div className="flex flex-col lg:flex-row items-center justify-center lg:h-screen">
                <div className="AboutUsText lg:ml-8">
                    <p className="font-Montserrat font-bold text-lg lg:text-white p-0.5 lg:rotate-0 -rotate-90 mr-8">
                        About&nbsp;Us
                    </p>
                </div>
                <div className="lg:ml-8 mb-6 lg:mb-0">
                    <img
                        src={ECellAbout}
                        className="p-5 rounded-md bg-black/25 transform-gpu"
                        alt="bg"
                    />
                </div>
                <div className="lg:pl-20">
                    <p className="py-4 lg:py-10 pr-4 lg:pr-20 text-sm lg:text-lg font-bold text-justify font-Montserrat">
                        The Entrepreneurship Cell is a non-profit organization run by the students of National Institute of Technology Agartala that aims at manifesting the latent entrepreneurial spirit of the young students. E-Cell aims at promoting the startup culture in Agartala as well as North-East India. With various undergoing projects, few successful startups, a lot of failures, and the flagship Carpediem E-Summit, E-Cell has transformed itself from a small community established by budding entrepreneurs in 2017 to a full-fledged organization with multi-talented like-minded people striving to solve the various problem with an entrepreneurial mindset.
                    </p>
                    <button className="px-4 py-2 font-bold text-white bg-black rounded-full hover:text-black hover:bg-white drop-shadow-xl">
                        <a href="/">Meet the team</a>
                    </button>
                </div>
            </div>
        </section>
    );
}
