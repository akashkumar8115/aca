
import React from 'react';
import { motion } from 'framer-motion';

const examCategories = [
    {
        title: "Engineering",
        image: "https://www.t2s-solutions.com/wp-content/uploads/system-engineering-img-05.jpg",
        exams: [
            { name: "JEE Main & Advanced", description: "For admission into IITs, NITs, IIITs, and other top engineering colleges in India." },
            { name: "BITSAT", description: "BITS Admission Test for BITS Pilani, Goa, and Hyderabad campuses." },
            { name: "VITEEE", description: "VIT Engineering Entrance Exam for admission to Vellore Institute of Technology." },
            { name: "SRMJEEE", description: "SRM Joint Engineering Entrance Examination for SRM University." },
            { name: "COMEDK UGET", description: "Consortium of Medical, Engineering and Dental Colleges of Karnataka for engineering courses in Karnataka." }
        ]
    },
    {
        title: "Medical",
        image: "https://etimg.etb2bimg.com/thumb/101417133.cms?width=400&height=300",
        exams: [
            { name: "NEET", description: "National Eligibility cum Entrance Test for MBBS, BDS, and AYUSH courses." },
            { name: "AIIMS", description: "AIIMS entrance exam for AIIMS institutions across India." },
            { name: "AIPVT", description: "All India Pre-Veterinary Test for admission to veterinary courses." },
            { name: "JIPMER", description: "Jawaharlal Institute of Postgraduate Medical Education & Research entrance exam." },
            { name: "PGIMER", description: "Post Graduate Institute of Medical Education & Research for postgraduate medical courses." }
        ]
    },
    {
        title: "Law",
        image: "https://www.sharda.ac.in/blog/attachments/blog_images/4-Main-Types-of-Law-Which-One-Is-the-Best-For-You-1170x614-min.jpg",
        exams: [
            { name: "CLAT", description: "Common Law Admission Test for admission to NLUs and other law colleges in India." },
            { name: "AILET", description: "All India Law Entrance Test for National Law University, Delhi." },
            { name: "LSAT India", description: "Law School Admission Test for law courses in India." },
            { name: "SLAT", description: "Symbiosis Law Admission Test for Symbiosis Law Schools." },
            { name: "DU LLB Entrance Exam", description: "Delhi University LLB entrance test." }
        ]
    },
    {
        title: "Management",
        image: "data:image/jpeg;base64,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",
        exams: [
            { name: "CAT", description: "Common Admission Test for IIMs and top MBA colleges in India." },
            { name: "XAT", description: "Xavier Aptitude Test for XLRI and other management institutes." },
            { name: "MAT", description: "Management Aptitude Test conducted by AIMA for MBA/PGDM courses." },
            { name: "CMAT", description: "Common Management Admission Test conducted by NTA for AICTE-approved management programs." },
            { name: "NMAT", description: "NMIMS Management Aptitude Test for NMIMS and other business schools." }
        ]
    },
    {
        title: "Design",
        image: "https://img.freepik.com/premium-photo/ai-generated-illustration-eye-with-vibrant-array-hues-featuring-streaks-multicolored-paint-iris_665346-37411.jpg?w=360",
        exams: [
            { name: "NID DAT", description: "National Institute of Design Design Aptitude Test for admission to NID campuses." },
            { name: "UCEED", description: "Undergraduate Common Entrance Exam for Design for IITs and other participating institutes." },
            { name: "CEED", description: "Common Entrance Exam for Design for postgraduate design courses at IITs and IISc." },
            { name: "NIFT Entrance Exam", description: "National Institute of Fashion Technology exam for design and fashion courses." },
            { name: "FDDI AIST", description: "Footwear Design & Development Institute All India Selection Test." }
        ]
    }
];


const EntranceExams = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-12 pt-24">
            <div className="container mx-auto px-4">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-center mb-12"
                >
                    Entrance Exams Guide
                </motion.h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {examCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                        >
                            <img
                                src={category.image}
                                alt={category.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                                <ul className="space-y-3">
                                    {category.exams.map((exam, idx) => (
                                        <li key={idx} className="flex items-start space-x-2">
                                            <span className="text-green-600">•</span>
                                            <div>
                                                <p className="font-medium">{exam.name}</p>
                                                <p className="text-sm text-gray-600">{exam.description}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EntranceExams;
