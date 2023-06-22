import "locomotive-scroll/dist/locomotive-scroll.css";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import ThreeScene from "./3d/ThreeScene";

export default function Home() {
  const containerRef = useRef(null);

  return (
    <section id="Home" className="font-Poppins bg-black">
      <LocomotiveScrollProvider
        containerRef={containerRef}
        options={{
          smooth: true,
        }}
      >
        <div
          data-scroll-container
          ref={containerRef}
          className="flex items-center justify-center h-screen"
        >
          <ThreeScene />

          <div className="z-10 absolute md:px-5 py-2 px-10 md:text-4vl text-3vl font-bold font-Montserrat">
            <h1 className=" bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-sky-400 drop-shadow-2xl shadow-sky-500 ">
              The Entrepreneurship Cell
            </h1>
            <h1 className=" text-orange-100">NIT AGartala</h1>
          </div>
        </div>
      </LocomotiveScrollProvider>
    </section>
  );
}
