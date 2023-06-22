import "locomotive-scroll/dist/locomotive-scroll.css";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import ECellAbout from "../assets/Logo.png";

export default function About() {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      containerRef={containerRef}
      options={{
        smooth: true,
      }}
    >
      <section id="About" className="font-Poppins bg-yellow-600">
        <div className=" flex items-center justify-center h-screen">
          <div className="AboutUsText">
            <p className="font-Montserrat font-bold text-lg text-white  -rotate-90 p-0.5 mr-8 ">
              About&nbsp;Us
            </p>
          </div>
          <div>
            <img
              src={ECellAbout}
              className="bg-black/25 rounded-md p-10 scale-125 transform-gpu "
              alt="bg"
            />
          </div>
          <div>
            <p className="font-Montserrat font-bold lg:text-lg text-sm text-justify p-10 pl-20">
              The Entrepreneurship Cell is a non-profit organization run by the
              students of National Institute of Technology Agartala that aims at
              manifesting the latent entrepreneurial spirit of the young
              students. E-Cell aims at promoting the startup culture in Agartala
              as well as North-East India. With various undergoing projects, few
              successful startups, a lot of failures, and the flagship Carpediem
              E-Summit, E-Cell has transformed itself from a small community
              established by budding entrepreneurs in 2017 to a full-fledged
              organization with multi-talented like-minded people striving to
              solve the various problem with an entrepreneurial minsdset
            </p>
            <button className="bg-black hover:text-black hover:bg-white text-white font-bold py-2 px-4 rounded-full drop-shadow-xl">
              <a href="/">Meet the team</a>
            </button>
          </div>
        </div>
      </section>
    </LocomotiveScrollProvider>
  );
}
