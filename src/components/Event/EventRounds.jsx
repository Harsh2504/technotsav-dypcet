import React from 'react';

const EventRounds = ({ rounds }) => {
  if (!rounds || rounds.length === 0) return null;

  return (
    <div className='px-5 md:px-40 py-10 min-h-screen'>
      <h2 className="element-fade  text-xl md:text-3xl font-bold text-center text-gray-800 fustat-heading">Event</h2>
      <h1 className="element-fade  text-5xl md:text-7xl font-bold text-center fustat-heading gradient">Rounds</h1>
      <div className='flex flex-col md:flex-row py-10 justify-center items-center md:items-start gap-10 flex-wrap  '>
        {rounds.map((round, index) => (
          <div key={index} className='flex flex-col justify-center items-center w-full md:w-1/4 md:my-4 element-fade'>
            <h1 className='text-5xl md:text-7xl fustat-heading text-black/90'>
              {String(index + 1).padStart(2, '0')}
            </h1>
            <h3 className='gradient fustat-heading text-xl md:text-2xl text-center break-words'>
              {round.title}
            </h3>
            <p className='text-base md:text-base text-center manrope-paragraph'>
              {round.description || "Description coming soon."}
            </p>
            {index < rounds.length - 1 && (
              <hr className="h-[1px] block md:hidden w-full mt-10 mx-10 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 border-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventRounds;
