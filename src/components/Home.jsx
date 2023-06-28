import "locomotive-scroll/dist/locomotive-scroll.css";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import ThreeScene from "./3d/ThreeScene";

export default function Home() {
  const containerRef = useRef(null);

  return (
    <section id="Home" className="bg-black font-Poppins">
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

          <div className="absolute z-10 px-10 py-2 font-bold md:px-5 md:text-4vl text-3vl font-Montserrat">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 from-30% via-white via-60% to-amber-400 to-70%">
              The Entrepreneurship Cell
            </h1>
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-amber-100 from-30% via-amber-500 via-40% to-amber-100 to-40%">
              NIT Agartala
            </h1>
          </div>
        </div>
      </LocomotiveScrollProvider>
    </section>
  );
}
