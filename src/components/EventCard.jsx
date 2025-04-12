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

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    const shineX = ((x / rect.width) * 100).toFixed(2);
    const shineY = ((y / rect.height) * 100).toFixed(2);
    shine.style.background = `radial-gradient(circle at ${shineX}% ${shineY}%, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0))`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    const light = card.querySelector('#cursor-light');
    const shine = card.querySelector('#shine-effect');
    light.style.opacity = 0;
    shine.style.background = 'none';
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div
      className="w-80 group relative px-4 py-8 flex flex-col items-center justify-between gap-4 rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.6)] transition-transform duration-300 bg-[linear-gradient(145deg,_#0a0a0a,_#1c1c1c,_#3e3e3e,_#1c1c1c,_#0a0a0a)] border border-gray-800"
      style={{ perspective: '1000px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Light and shine effects */}
        <div
          id="cursor-light"
          className="absolute pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 60%)',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            position: 'absolute',
            transition: 'opacity 0.3s ease',
            opacity: 0,
            zIndex: 10,
          }}
        ></div>

        <div
          id="shine-effect"
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'none',
            transition: 'background 0.3s ease',
            zIndex: 5,
          }}
        ></div>

        {/* Content */}
        <div className="flex flex-col justify-center items-center gap-4 z-10 px-4 w-full max-w-sm mx-auto">
          {/* Title */}
          <h2 className="text-xl w-full min-h-16 text-center fustat-heading text-white break-words">
            {dept.title}
          </h2>

          {/* Logo + Description (overlap area) */}
          <div className="relative w-full min-h-[6rem] flex items-center justify-center">
            {/* Logo */}
            <img
              src={dept.logo}
              alt={dept.title}
              onError={(e) => {
                e.target.onerror = null; // Prevent infinite loop in case fallback also fails
                e.target.src = "https://cdn.pixabay.com/photo/2022/07/22/12/21/atom-7337993_1280.png";
              }}
              className="absolute w-32 h-32 scale-120 md:scale-110 group-hover:scale-130  opacity-50 blur-xs md:blur-none group-hover:blur-xs object-contain transition-all duration-300 group-hover:opacity-40 md:opacity-100"
            />

            {/* Description */}
            <p className="absolute text-sm text-gray-300 text-center opacity-100 group-hover:opacity-100 md:opacity-0 transition-opacity duration-300 manrope-paragraph px-4 leading-snug">
          {dept.description}
            </p>
          </div>
        </div>

        <div className="relative w-full z-10 mt-6 group">
          {/* Hover Prompt (visible only before hover) */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0  group-hover:opacity-0 md:opacity-100 hover:hidden text-center transition-opacity duration-300">
            <span className="text-base text-gray-400/40 animate-pulse manrope-paragraph">Curious? Just hover</span>
          </div>

          {/* Buttons (visible on hover) */}
          <div className="relative z-10 opacity-100 group-hover:opacity-100 md:opacity-0 transition-opacity duration-300 flex flex-col md:flex-row items-center justify-center gap-4 manrope-paragraph text-base p-2 w-full">
            {/* Register Button */}
            <a
          href={dept.formLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-55 md:w-44 text-center px-5 py-3 rounded-xl font-bold fustat-heading text-white bg-gradient-to-r from-[#3a63ad] to-[#5c89ff] shadow-[0_8px_24px_rgba(92,137,255,0.3)] hover:shadow-[0_10px_30px_rgba(92,137,255,0.5)] transition-all duration-300 ease-in-out active:scale-95"
            >
          Register
            </a>

            {/* Info Button */}
            <a
          href={dept.route}
          target="_self"
          rel="noopener noreferrer"
          className="w-55 md:w-44 text-center px-5 py-3 rounded-xl font-bold fustat-heading text-white border border-[#fefefe] bg-transparent backdrop-blur-sm hover:bg-white/60 hover:text-[#1c2f50] shadow-[inset_0_0_0_1px_rgba(54,91,158,0.2)] transition-all duration-300 ease-in-out active:scale-95"
            >
          Info
            </a>
          </div>
        </div>
          </div>
  );
}

export default EventCard;
