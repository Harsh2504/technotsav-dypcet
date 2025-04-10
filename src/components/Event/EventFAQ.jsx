import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function EventFAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  if (!faqs || faqs.length === 0) return null;

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center text-lg font-medium text-gray-900 hover:text-indigo-600 transition-colors duration-200"
            >
              {faq.question}
              <span className="ml-2 text-black hover:text-indigo-600">
                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
              </span>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: contentRefs.current[index]?.scrollHeight || 'auto',
                    opacity: 1,
                  }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="overflow-hidden text-gray-600 text-sm"
                >
                  <div
                    ref={(el) => (contentRefs.current[index] = el)}
                    className="py-2 px-1"
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
