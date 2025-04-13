import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react'; 
const faqs = [
  {
    "question": "Who can participate in Technotsav?",
    "answer": "Technotsav is open to students from engineering and technical backgrounds across the country. Whether you’re from diploma or degree programs, you’re welcome!"
  },
  {
    "question": "Can I participate alone?",
    "answer": "Yes, you can register as an individual or in a group of up to 5 members, depending on the event requirements."
  },
  {
    "question": "How do I register for events?",
    "answer": "You can register online through the official Technotsav 2K25 website. Browse through the event list and register for the ones that excite you the most!"
  },
  {
    "question": "Is there a registration fee?",
    "answer": "Some events may have a nominal registration fee. Specific details will be mentioned on the respective event registration pages."
  },
  {
    "question": "Are there any prizes or certificates?",
    "answer": "Yes! Winners and top performers will receive exciting prizes, certificates, and recognition during the felicitation ceremony. All participants will also receive certificates for their involvement in the events."
  },  
  {
    "question": "Can I participate in multiple events?",
    "answer": "Absolutely! You are encouraged to participate in as many events as your schedule allows. Just ensure there are no timing clashes."
  },
  {
    "question": "What kind of events and workshops are included?",
    "answer": "Technotsav features a wide range of events including coding contests, design challenges, technical paper presentations, startup pitching, bridge building, drone racing, and more. In addition, selected departments are hosting workshops like Blender 3D Modelling to provide hands-on learning experiences for participants."
  },  
  {
    "question": "Where will the fest be held and how do I reach there?",
    "answer": "Technotsav–2K25 will take place at D. Y. Patil College of Engineering & Technology, Kasaba Bawada, Kolhapur. The college is well-connected by road and rail. You can reach Kolhapur via train or bus, and from the station or central bus stand, local auto-rickshaws or cabs can take you directly to the campus."
  },  
  {
    "question": "What if an event spans two days?",
    "answer": "If an event has multiple phases, the final rounds or prize distribution will happen on the last day. Single-day events will be wrapped up with felicitation on the same day."
  },
  {
    "question": "How do I stay updated about event schedules?",
    "answer": "You will be added to event-specific WhatsApp groups after registration for timely updates. Additionally, follow our official social media handles and website for real-time announcements and detailed schedules."
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