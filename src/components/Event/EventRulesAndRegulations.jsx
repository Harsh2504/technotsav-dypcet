import React from 'react'

const EventRulesAndRegulations = ({ rules }) => {
  return (
    <section className="max-w-4xl mx-auto py-5 md:py-10 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 fustat-heading">
        <span className='gradient text-3xl md:text-5xl element-fade'> Rules </span>
         & <span className='gradient text-3xl md:text-5xl element-fade'> Regulations</span>
      </h2>

      <div className="space-y-4 px-5 flex flex-col justify-center items-center">
        {rules.map((rule, index) => (
          <div
            key={index}
            className="element-fade-cards border border-gray-200 w-full md:min-w-3xl rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 bg-white"
          >
            <h3 className="text-xl font-semibold text-indigo-600 mb-3 flex items-center gap-2 fustat-heading">
              <span className="inline-block w-18 md:w-auto text-center bg-indigo-100 text-[#446cc3] rounded-full px-2 md:px-3 py-1 fustat-heading text-sm font-medium">
                Rule {index + 1}
              </span>
              <p className='gradient text-lg md:text-xl'> {rule.title}</p>
            </h3>

            {rule.description.length > 100 ? (
              <ul className="list-disc pl-5 space-y-2 text-gray-600 leading-relaxed manrope-paragraph">
                {(rule.description.match(/.*?[.?!](?=\s|$)/g) || [])
                  .map((sentence, i) => (
                    <li key={i} className="marker:text-indigo-400">{sentence.trim()}</li>
                  ))}
              </ul>
            ) : (
              <p className="text-gray-600 leading-relaxed manrope-paragraph">
                
                <li className="marker:text-indigo-400">{rule.description}</li>
              </p>
            )}

          </div>
        ))}
      </div>
    </section>
  )
}

export default EventRulesAndRegulations
