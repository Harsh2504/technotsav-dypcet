import React from "react";

const EventSponsors = ({ sponsors }) => {
    if (!sponsors || sponsors.length === 0) return null;

return (
    <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 fustat-heading">
            Our Sponsors
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
            {sponsors.map((sponsor, index) => (
                <div
                    key={index}
                    className="bg-white p-4 rounded-xl shadow-sm border w-full sm:w-auto flex flex-col items-center"
                >
                    <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="h-32 object-contain mb-2"
                    />
                    <p className="text-sm text-gray-600 text-center fustat-heading">{sponsor.name}</p>
                </div>
            ))}
        </div>
    </section>
);
};

export default EventSponsors;
