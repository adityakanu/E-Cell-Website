import React from 'react';
import back from '../assets/backimg.svg';
import '../Home.css'; // Correct path to Home.css

export default function Home() {
    return (
        <section id="Home" className="overflow-hidden font-Poppins">
            <div className="relative h-screen flex items-center justify-center">
                <img
                    src={back}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt=""
                />
                <div className="absolute inset-0 bg-black opacity-30" />
                <div className="absolute z-10 text-center animate-moveFade">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
                        Welcome to The Entrepreneurship Cell
                    </h1>
                    <h2 className="text-lg md:text-xl lg:text-2xl">
                        NIT Agartala
                    </h2>
                </div>
            </div>
        </section>
    );
}
