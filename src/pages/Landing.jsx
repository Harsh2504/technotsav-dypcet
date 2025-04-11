import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import Timeline from '../components/Timeline';
import FAQ from '../components/FAQ';
import Events from '../components/Events';


export default function Landing() {
  

  return (
    <div>
      <div className='relative w-screen h-screen '>
        <Spline scene="https://prod.spline.design/3LhodsAeMvPQ7-K4/scene.splinecode" />
        <div className='absolute bottom-0 right-0 bg-[#e3e3e3] w-full md:w-[200px] h-[80px] text-center flex flex-col justify-center items-center'>
          <p className='font-bold text-4xl block md:hidden fustat-heading'>Technotsav 2k25</p>
          <p className='font-bold text-2xl text-[#444444] block md:hidden manrope-paragraph'>Coming Soon....</p>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center w-screen min-h-screen overflow-x-hidden py-20 px-10 md:px-40'>
        <h1 className='text-3xl font-bold text-center text-gray-800 mb-8 fustat-heading'>What's <span className='gradient text-5xl'>Technotsav?</span></h1>
        <p className='my-5 text-justify manrope-paragraph '>Technotsav 2025 is a National-Level Technical Extravaganza hosted by DYPCET (D. Y. Patil College of Engineering & Technology, Kolhapur), bringing together some of the brightest young minds from across the country. This dynamic event features a series of intellectually stimulating competitions — including the prestigious Technical Paper Presentation — designed to ignite creativity, foster groundbreaking innovations, and celebrate engineering excellence. With themes spanning from Quantum Computing, Smart Cities, Cybersecurity, to AI-driven Automation and Sustainable Engineering, participants get a platform to present transformative ideas, engage with like-minded innovators, and compete for prizes worth thousands. Whether you're an aspiring researcher or a tech-savvy dreamer, Technotsav 2025 is where passion meets purpose in a celebration of tomorrow’s technology
        </p>
      </div>
      <Events />
      <Timeline />
      <FAQ />

     
    </div>
  );
}
