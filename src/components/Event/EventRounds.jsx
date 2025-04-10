import React from 'react'

const EventRounds = ({rounds}) => {
  return (
    <div className='px-40 py-20 min-h-screen'>
          <h2 className="text-3xl font-bold text-center text-gray-800 fustat-heading">Event</h2>
          <h1 className="text-7xl font-bold text-center fustat-heading gradient">Rounds</h1>
          <div className='flex py-10 justify-center items-center gap-10 flex-wrap'>
          {rounds.map((round, index) => (
            <div key={index} className='flex flex-col justify-center items-center w-1/4 my-4'>
              <h1 className='text-7xl fustat-heading text-black/90'>{String(index + 1).padStart(2, '0')}</h1>
              <h3 className='gradient fustat-heading text-2xl text-center break-words'>{round.title}</h3>
              <p className='text-lg text-center monorope-paragraph'>{round.description}</p>
            </div>
          ))}
          </div>
    </div>
  )
}

export default EventRounds