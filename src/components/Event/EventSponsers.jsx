import React from "react";

const EventSponsors = ({ sponsors }) => {
    if (!sponsors || sponsors.length === 0) return null;

return (
    <section className="max-w-4xl mx-auto px-4 py-5 md:py-10">
        <h2 className="text-xl md:text-3xl font-bold text-center text-gray-800 mb-8 fustat-heading">
            Our <span className='gradient text-3xl md:text-5xl fustat-heading'>Sponsors</span>
        </h2>

        <div className="flex md:flex-row flex-col items-center flex-wrap justify-center gap-6">
            {sponsors.map((sponsor, index) => (
                <div
                    key={index}
                    className="border border-gray-200  w-60 h-60  flex flex-col justify-center items-center rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 bg-white"
                >
                    <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="h-32 object-contain mb-2"
                    />
                    <p className="text-base my-1 text-black/85 text-center fustat-heading">{sponsor.name}</p>
                </div>
            ))}
        </div>
    </section>
);
};

export default EventSponsors;
