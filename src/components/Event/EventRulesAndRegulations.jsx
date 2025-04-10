import React from 'react'

const EventRulesAndRegulations = ({rules}) => {
    return (
      <section className="max-w-4xl mx-auto py-5 md:py-10 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 fustat-heading "><span className='gradient text-3xl md:text-5xl'> Rules</span> &<span className='gradient text-3xl md:text-5xl'>  Regulations</span> </h2>
      <div className="space-y-2 flex flex-col items-center">
      {rules.map((rule, index) => (
        <div
        key={index}
        className="border border-gray-200 w-full md:w-96 md:min-w-3xl rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 bg-white"
        >
        <h3 className="text-xl font-semibold text-indigo-600 mb-2 flex items-center gap-2 fustat-heading">
        <span className="inline-block w-18 md:w-auto text-center bg-indigo-100 text-[#446cc3]rounded-full px-2 md:px-3px-3 py-1 fustat-heading text-sm font-medium">
        Rule {index + 1}
        </span>
        <p className='gradient text-lg md:text-xl'> {rule.title}</p>
        </h3>
        <p className="text-gray-600 leading-relaxed manrope-paragraph">
        {rule.description.length > 100
          ? rule.description.split('.').map((sentence, i) => (
            sentence.trim() && <span key={i} className="block">{sentence.trim()}.</span>
          ))
          : rule.description}
        </p>
        </div>
      ))}
      </div>
      </section>
    );
}

export default EventRulesAndRegulations