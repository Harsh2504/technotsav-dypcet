import { useState } from 'react'
import Spline from '@splinetool/react-spline';
import './App.css'

function App() {

  return (
    <div className='relative w-screen h-screen'>
        <Spline scene="https://prod.spline.design/3LhodsAeMvPQ7-K4/scene.splinecode" />
        <div className='absolute bottom-0 right-0 bg-[#e3e3e3] w-full md:w-[200px] h-[80px] text-center flex flex-col justify-center items-center'>
          <p className='font-bold text-4xl block md:hidden'>Technotsav 2k25</p>
          <p className='font-bold text-2xl text-[#444444] block md:hidden '>Coming Soon....</p>
        </div>
    </div>
  )
}

export default App
