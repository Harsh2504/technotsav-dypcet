import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react'; 
const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer: "I don't know, but the flag is a big plus.",
  },
  {
    question: "How do you make holy water?",
    answer: "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut tempora vitae odio inventore fuga aliquam nostrum quod porro.",
  },
  {
    question: "What do you call someone with no body and no nose?",
    answer: "Nobody knows.",
  },
  {
    question: "Why do you never see elephants hiding in trees?",
    answer: "Because they're so good at it.",
  },
  {
    question: "Why can't you hear a pterodactyl go to the bathroom?",
    answer: "Because the 'P' is silent.",
  },
  {
    question: "Why did the invisible man turn down the job offer?",
    answer: "He couldn’t see himself doing it.",
  }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);
    const contentRefs = useRef([]);
  
    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
      <div className="max-w-3xl mx-auto px-4 py-20">
   <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-8 text-center fustat-heading">
        Frequently Asked <span className='gradient text-3xl md:text-5xl'> Questions</span>
      </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center text-lg font-medium text-gray-900 hover:text-[#4f79dd] transition-colors duration-200 fustat-heading"
              >
                {faq.question}
                <span className="ml-2 text-black hover:text-[#4f79dd]">
                    {openIndex === index ? (
                        <Minus size={20} />
                    ) : (
                        <Plus size={20} />
                    )}
                    </span>

              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: contentRefs.current[index]?.scrollHeight || 'auto',
                      opacity: 1
                    }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="overflow-hidden text-gray-600 text-sm"
                  >
                    <div
                      ref={(el) => (contentRefs.current[index] = el)}
                      className="py-2 px-1 manrope-paragraph text-base"
                    >
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    );
  }