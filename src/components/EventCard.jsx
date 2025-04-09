import React from 'react';

const EventCard = ({ dept }) => {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const light = card.querySelector('#cursor-light');
    const shine = card.querySelector('#shine-effect');
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    light.style.left = `${x}px`;
    light.style.top = `${y}px`;
    light.style.opacity = 1;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;

    const shineX = ((x / rect.width) * 100).toFixed(2);
    const shineY = ((y / rect.height) * 100).toFixed(2);
    shine.style.background = `radial-gradient(circle at ${shineX}% ${shineY}%, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0))`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    const light = card.querySelector('#cursor-light');
    const shine = card.querySelector('#shine-effect');
    light.style.opacity = 0;
    shine.style.background = 'none';
    card.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0px)';
  };

  return (
    <div
      className="w-80 md:w-80  group bg-[linear-gradient(135deg,_#111827,_#4B5563,_#111827,_#4B5563,_#111827)] p-12 flex flex-col justify-start items-center gap-4 rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] relative overflow-hidden transition-transform duration-300 min-h-[300px] "
      style={{ perspective: '1000px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Light and shine effects */}
      <div
        id="cursor-light"
        className="absolute pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0, 200, 255, 0.5) 0%, rgba(0, 200, 255, 0) 60%)',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          position: 'absolute',
          transition: 'opacity 0.2s ease',
          opacity: 0,
        }}
      ></div>

      <div
        id="shine-effect"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'none',
          transition: 'background 0.2s ease',
          
        }}
      ></div>

      {/* Content wrapper */}
      <div className="relative h-32 w-full flex flex-col items-center justify-center gap-2">
        {/* Title */}
        <div className="absolute top-0 text-2xl fustat-heading text-white transition-opacity duration-300 spacecrusaders-heading">
          {dept.title}
        </div>

        {/* Logo */}
        <div className="absolute top-12">
          <img
            src={dept.logo}
            alt={dept.title}
            className="w-32 transition-opacity duration-300 group-hover:opacity-0"
          />
        </div>

        {/* Description */}
        <div className="absolute top-50 md:bottom-0 md:top-16 text-gray-300 text-center opacity-100 md:opacity-0 transition-opacity duration-300 group-hover:opacity-100 px-4 manrope-paragraph">
          {dept.description}
        </div>
      </div>

      {/* Buttons (always visible) */}
      <div className="flex flex-row md:flex-row items-center gap-4 mt-40 md:mt-12 manrope-paragraph text-md p-2">
        <a
          href={dept.formLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-200 text-black font-bold px-6 py-2 rounded-full hover:bg-blue-900 hover:text-white hover:shadow-2xl  transition duration-300"
        >
          Register
        </a>
        <a
          href={dept.route}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-200 text-black font-bold px-6 py-2 rounded-full hover:bg-slate-900 hover:text-white hover:shadow-2xl  transition duration-300"
        >
          Info
        </a>
      </div>
    </div>
  );
};

export default EventCard;
