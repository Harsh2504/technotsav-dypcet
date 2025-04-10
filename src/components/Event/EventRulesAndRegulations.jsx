import React from 'react'

const EventRulesAndRegulations = ({rules}) => {
    return (
      <section className="max-w-4xl mx-auto px-4 py-10 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 fustat-heading">Rules & Regulations</h2>
      <div className="space-y-2 flex flex-col items-center">
      {rules.map((rule, index) => (
        <div
        key={index}
        className="border border-gray-200 w-96 md:min-w-3xl rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 bg-white"
        >
        <h3 className="text-xl font-semibold text-indigo-600 mb-2 flex items-center gap-2 fustat-heading">
        <span className="inline-block w-18 md:w-auto text-center bg-indigo-100 text-indigo-700 rounded-full px-3 py-1 fustat-heading text-sm font-medium">
        Rule {index + 1}
        </span>
        {rule.title}
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