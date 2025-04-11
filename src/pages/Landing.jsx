import React, { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import Timeline from "../components/Timeline";
import FAQ from "../components/FAQ";
import Events from "../components/Events";
import bg from "/images/bg.jpg";
import poster from "/images/poster.jpg";
export default function Landing() {
  return (
    <div>
      <div className="relative w-screen h-[40vh] md:h-[150vh] flex justify-center items-center overflow-hidden">
          <img

            src={poster}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover object-top "
          />
        {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}

        {/* <div
          className="fixed inset-0 bg-fixed bg-cover bg-center"
          style={{
            backgroundImage: `url(${bg})`,
            transform: "translateZ(-1px) scale(2)",
            zIndex: "-1",
          }}
        ></div>
        <p className="absolute top-78 md:top-70 text-center md:left-42 text-2xl md:text-4xl font-bold text-white/40 fustat-heading">
          DYPCET
        </p>
        <p className="absolute text-5xl md:text-9xl font-bold text-transparent opacity-90 bg-clip-text bg-gradient-to-r from-[#cccee9] via-[#7c90c8] to-[#92eeed] spacecrusaders-heading text-center">
          Technotsav 2K25
        </p> */}
      </div>
      <div className="flex flex-col justify-center items-center w-screen min-h-screen overflow-x-hidden py-20 px-10 md:px-40">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8 fustat-heading">
          What's <span className="gradient text-5xl">Technotsav?</span>
        </h1>
        <p className="my-5 text-justify manrope-paragraph ">
          Welcome to Technotsav 2K25, the flagship National-Level Tech Fest of
          DYPCET, Kolhapur — a dynamic two-day celebration where technology,
          creativity, and innovation collide.
          <br />
          From LaunchPad, our Shark Tank-style entrepreneurial showdown, to the
          adrenaline-pumping Robo Race and gravity-defying bridges in Setu
          Bandha Re, each event is a canvas for aspiring engineers and
          visionaries to showcase their brilliance. Whether you're navigating
          through the logic maze in Code Flow, sending drones soaring into the
          sky, or crafting architectural wonders that float in Unsinkable
          Designs, there’s a challenge that speaks to every curious mind.
          <br />
          But Technotsav isn’t just about competition — it’s about expression
          and experimentation. Join the buzz in our IPL Auction strategy zone,
          create viral stories in the Reel Making challenge, or explore the
          virtual frontier with the Blender 3D Modelling Competition.
          <br />
          At Technotsav 2K25, ideas don’t just take shape — they take flight.
          Come be a part of this tech-powered odyssey and leave your mark on the
          cosmos of creation.
        </p>
      </div>
      <Events />
      <Timeline />
      <FAQ />
    </div>
  );
}
