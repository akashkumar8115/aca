import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [

    {
      question: "What is the eligibility criteria for the scholarship?",
      answer: "To be eligible for the scholarship, students must have a minimum GPA of 8 and demonstrate academic excellence."
    },

    {
      question: "How often are scholarship tests conducted?",
      answer: "Scholarship tests are conducted quarterly, with major sessions in June and December each year."
    },
    {
      question: "Can I apply for multiple scholarship categories?",
      answer: "Yes, students can apply for multiple categories if they meet the eligibility criteria for each."
    },
    {
      question: "What is the selection process?",
      answer: "Selection is based on test performance, academic history, and interview rounds for top performers."
    },
    {
      question: "Is the scholarship renewable?",
      answer: "Yes, scholarships are renewable annually based on maintaining required academic performance."
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="border rounded-lg overflow-hidden">
            <button
              className="w-full px-6 py-4 text-black bg-green-100 hover:bg-green-200 flex justify-between items-center bg-white"
            > <Link to="https://docs.google.com/forms/d/e/1FAIpQLScRowEYAyY4wAxlHndXYBndh4i57FHDtP7sesz5Ho5_KM2PTQ/formResponse?edit2=2_ABaOnufwCfxhyl1v7aK5dm57MWyxdWJUB5AMkauJRyqwpzPsDEa51x-LfgVPJACHjQ" target="_blank" rel="noopener noreferrer">Apply Now this Scholarship </Link>
            </button>
          </div>

          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="border rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-white"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                >
                  <FaChevronDown />
                </motion.span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="px-6 py-4 bg-gray-50"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
