import "locomotive-scroll/dist/locomotive-scroll.css";
import { useEffect, useRef } from "react";
import {
  LocomotiveScrollProvider,
  useLocomotiveScroll,
} from "react-locomotive-scroll";
import ECell from "../assets/E.png";
import ThreeScene from "./3d/ThreeScene";
// import Square from "./3d/square";

export default function Home() {
  const containerRef = useRef(null);

  return (
    <section id="Home" data-scroll-section className="font-Poppins bg-black">
      <LocomotiveScrollProvider
        containerRef={containerRef}
        options={{
          smooth: true,
        }}
      >
        {/* <Square /> */}
        <div
          data-scroll-container
          ref={containerRef}
          className="flex items-center justify-center h-screen"
        >
          <ThreeScene />
          <img src={ECell} className="z-10 absolute md:px-5 px-10" alt="" />
        </div>
      </LocomotiveScrollProvider>
    </section>
  );
}
