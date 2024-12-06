import React, { useState } from 'react'
import { motion } from 'framer-motion'

const AICareerRecommender = () => {
    const [userResponses, setUserResponses] = useState({})
    const [recommendations, setRecommendations] = useState([])

    const questions = [
        {
            id: 'interests',
            text: 'What are your main areas of interest?',
            options: ['Technology', 'Business', 'Arts', 'Science']
        },
        {
            id: 'skills',
            text: 'What are your strongest skills?',
            options: ['Problem Solving', 'Communication', 'Creativity', 'Analysis']
        }
    ]

    const handleSubmit = async () => {
        // AI recommendation logic would go here
        setRecommendations([
            {
                career: 'Software Developer',
                match: 95,
                description: 'Based on your strong problem-solving skills and interest in technology.'
            },
            {
                career: 'Data Analyst',
                match: 88,
                description: 'Matches your analytical skills and technical interests.'
            }
        ])
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-3xl font-bold mb-8">AI Career Recommendation</h2>

            <div className="space-y-8">
                {questions.map((q) => (
                    <motion.div
                        key={q.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white p-6 rounded-lg shadow-lg"
                    >
                        <h3 className="text-xl mb-4">{q.text}</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {q.options.map((option) => (
                                <button
                                    key={option}
                                    onClick={() => setUserResponses({ ...userResponses, [q.id]: option })}
                                    className={`p-3 rounded-lg ${userResponses[q.id] === option
                                            ? 'bg-indigo-600 text-green-600'
                                            : 'bg-gray-100'
                                        }`}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                ))}

                <button
                    onClick={handleSubmit}
                    className="w-full bg-indigo-600 text-green-600 py-3 rounded-lg hover:bg-indigo-700"
                >
                    Get Recommendations
                </button>

                {recommendations.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-8 space-y-4"
                    >
                        {recommendations.map((rec, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-bold">{rec.career}</h3>
                                <div className="text-indigo-600 font-semibold">{rec.match}% Match</div>
                                <p className="mt-2 text-gray-600">{rec.description}</p>
                            </div>
                        ))}
                    </motion.div>
                )}
            </div>
        </div>
    )
}

export default AICareerRecommender
