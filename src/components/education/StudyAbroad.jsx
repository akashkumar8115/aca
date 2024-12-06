
import React from 'react';
import { motion } from 'framer-motion';

const countries = [
    {
        name: "United States",
        image: "https://c8.alamy.com/comp/K7B63A/usa-map-country-united-states-of-america-lettering-vector-illustration-K7B63A.jpg",
        features: [
            "Liberal arts education",
            "Flexible major selection",
            "Strong research opportunities",
            "Diverse campus life"
        ],
        universities: ["Harvard", "MIT", "Stanford"]
    },
    {
        name: "United Kingdom",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg/900px-Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg",
        features: [
            "Globally recognized degrees",
            "One-year master's programs",
            "Emphasis on independent study",
            "High research quality"
        ],
        universities: ["University of Oxford", "University of Cambridge", "Imperial College London"]
    },
    {
        name: "Canada",
        image: "data:image/jpeg;base64,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",
        features: [
            "Co-op programs combining work and study",
            "Affordable tuition fees",
            "Multicultural campuses",
            "High quality of life for students"
        ],
        universities: ["University of Toronto", "University of British Columbia", "McGill University"]
    },
    {
        name: "Australia",
        image: "https://www.holidayhamster.co.uk/wp-content/uploads/Pinkish-colourful-sunrise-over-Sydney-city.jpg",
        features: [
            "Post-study work opportunities",
            "Strong focus on research and innovation",
            "Emphasis on critical thinking",
            "Scholarship opportunities for international students"
        ],
        universities: ["University of Melbourne", "Australian National University", "University of Sydney"]
    },
    {
        name: "Germany",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNm8NXunZCcD6G2VmUC8NU6-4uzwXO-HgONA&s",
        features: [
            "No or low tuition fees for public universities",
            "Strong engineering and technical programs",
            "Practice-oriented education",
            "Work opportunities for students"
        ],
        universities: ["Technical University of Munich", "Heidelberg University", "University of Freiburg"]
    },
    {
        name: "Japan",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWSWS0Bq_UAmk9_vBEgNO7xTohk8Ew4oRw9Q&s",
        features: [
            "Emphasis on discipline and ethics",
            "High-tech facilities",
            "Scholarship opportunities for international students",
            "Vibrant campus life and cultural exchange"
        ],
        universities: ["University of Tokyo", "Kyoto University", "Osaka University"]
    },
    {
        name: "France",
        image: "https://worldwildschooling.com/wp-content/uploads/2024/05/Strasbourg_Givaga_AdobeStock_320312981-1024x576.webp",
        features: [
            "High quality of research",
            "Cultural immersion in French language",
            "Strong focus on humanities and arts",
            "Affordable education at public universities"
        ],
        universities: ["Sorbonne University", "École Polytechnique", "Sciences Po"]
    },
    {
        name: "India",
        image: "https://m.media-amazon.com/images/I/71RgfIeTq6L._AC_UF894,1000_QL80_.jpg",
        features: [
            "Strong STEM and IT programs",
            "Emphasis on theoretical knowledge",
            "Competitive entrance exams for top institutions",
            "Diverse cultural experience"
        ],
        universities: ["Indian Institute of Technology Bombay", "University of Delhi", "Jawaharlal Nehru University"]
    },
    {
        name: "China",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjzLfHH7lWcsUA1QWfXaq4juNvvId6wgMAEw&s",
        features: [
            "Focus on STEM and innovation",
            "Government-funded scholarships for international students",
            "International partnerships and collaborations",
            "High-tech learning environments"
        ],
        universities: ["Tsinghua University", "Peking University", "Fudan University"]
    }
];


const StudyAbroad = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 pt-32">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="container mx-auto px-4"
            >
                <h1 className="text-4xl font-bold text-center mb-16">Study Abroad Opportunities</h1>

                <div className="grid lg:grid-cols-3 gap-8">
                    {countries.map((country, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden"
                        >
                            <div className="relative h-64">
                                <img
                                    src={country.image}
                                    alt={country.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 p-4">
                                    <h3 className="text-2xl font-bold text-white mb-200">{country.name}</h3>
                                </div>
                            </div>

                            <div className="p-6">
                                <h4 className="font-semibold mb-3">Key Features:</h4>
                                <ul className="space-y-2 mb-6">
                                    {country.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center space-x-2">
                                            <span className="text-blue-500">✓</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="border-t pt-4">
                                    <h4 className="font-semibold mb-2">Top Universities:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {country.universities.map((uni, idx) => (
                                            <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                                {uni}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default StudyAbroad;
