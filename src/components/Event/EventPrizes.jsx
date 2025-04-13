import React from 'react'
import gold from '/images/gold.png'
import silver from '/images/silver.png'
import bronze from '/images/bronze.png'
export default function EventPrizes({prizes}) {
  return (
        <div className='px-5 md:px-40 py-10 min-h-screen'>
        <h2 className="element-fade text-xl md:text-3xl font-bold text-center text-gray-800 fustat-heading">Event</h2>
        <h1 className="element-fade text-5xl md:text-7xl font-bold text-center fustat-heading gradient">Prizes</h1>
        <div className='flex py-5 justify-center items-end gap-10 flex-wrap'>

        <div className='element-fade-cards w-full md:w-80 h-100 md:h-104 group relative flex flex-col items-center justify-center gap-5 rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.6)] transition-transform duration-300 bg-[linear-gradient(145deg,_#0a0a0a,_#1c1c1c,_#3e3e3e,_#1c1c1c,_#0a0a0a)] border border-gray-800'>
          <div className='rounded-full bg-white/10 backdrop-blur-lg w-full h-94 mt-[-180px]'>
            <img className='absolute top-25 scale-90' src={silver} alt='Silver trophy'/>
          </div>
          {prizes.second ? (
            <div className='text-center px-8 '>
              <p className='text-2xl font-bold text-white fustat-heading'>INR</p>
              <p className='text-6xl font-extrabold text-white spacecrusaders-heading '>{prizes.second}</p>
              <p className='text-lg text-white manrope-paragraph uppercase'>With trophy</p>
            </div>
          ) : (
            <div className="text-center px-8">
              <p className='text-xl font-bold text-white fustat-heading'>Second prize not declared for this event.</p>
            </div>
          )}

        </div>
        
        <div className='element-fade-cards w-full md:w-90 h-100 md:h-120 group relative flex flex-col items-center justify-center gap-5 rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.6)] transition-transform duration-300 bg-[linear-gradient(145deg,_#0a0a0a,_#1c1c1c,_#3e3e3e,_#1c1c1c,_#0a0a0a)] border border-gray-800'>
          <div className='rounded-full bg-white/10 backdrop-blur-lg w-full h-94 md:h-104 mt-[-200px]'>
            <img className='absolute top-25 md:top-20 scale-90' src={gold} alt='Gold trophy'/>
          </div>
          {prizes.first ? (
              <div className='text-center px-8 scale-110 mt-2 '>
                <p className='text-2xl font-bold text-white fustat-heading'>INR</p>
                <p className='text-6xl font-extrabold text-white spacecrusaders-heading '>{prizes.first}</p>
                <p className='text-lg text-white manrope-paragraph uppercase'>With trophy</p>
              </div>
            ) : (
              <div className="text-center px-8">
                <p className='text-xl font-bold text-white fustat-heading'>First prize not declared for this event.</p>
              </div>
            )}

        </div>

      
          <div className='element-fade-cards w-full md:w-80 h-100 md:h-104 group relative flex flex-col items-center justify-center gap-5 rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.6)] transition-transform duration-300 bg-[linear-gradient(145deg,_#0a0a0a,_#1c1c1c,_#3e3e3e,_#1c1c1c,_#0a0a0a)] border border-gray-800'>
            <div className='rounded-full bg-white/10 backdrop-blur-lg w-full h-94 mt-[-180px]'>
              <img className='absolute top-25 md:top-20 scale-90' src={bronze} alt='Bronze trophy'/>
            </div>
            {prizes.third ? (
            <div className='text-center px-8 '>
              <p className='text-2xl font-bold text-white fustat-heading'>INR</p>
              <p className='text-6xl font-extrabold text-white spacecrusaders-heading'>{prizes.third}</p>
              <p className='text-lg text-white manrope-paragraph uppercase'>With trophy</p>
         
            </div>
               ) : (
                <div className="text-center px-8 ">
                   <p className='text-xl font-bold text-white fustat-heading '>Third rank has not been considered for this event.</p>
                </div>
              )}
          </div>
     

        </div>
        <h2 className="element-fade mt-2 text-lg md:text-2xl font-medium text-center text-gray-800 manrope-paragraph">Participation certificates for all the participants.</h2>
    </div>
  )
}
