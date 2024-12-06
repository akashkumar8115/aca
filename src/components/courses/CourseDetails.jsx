import React from 'react'
import { motion } from 'framer-motion'

const courseDetails = {
    Engineering: {
        description: "Engineering courses focus on applying scientific and mathematical principles to develop practical solutions for real-world problems.",
        skills: ["Problem Solving", "Technical Knowledge", "Analytical Thinking", "Project Management"],
        scope: "High demand across various industries with excellent growth opportunities.",
        topInstitutes: [
            "IIT Bombay",
            "IIT Delhi",
            "BITS Pilani",
            "NIT Trichy",
            "VIT Vellore"
        ]
    },
    Management: {
        description: "Management courses prepare students for leadership roles in business and organizations.",
        skills: ["Leadership", "Strategic Thinking", "Communication", "Decision Making"],
        scope: "Wide range of opportunities in the corporate sector and entrepreneurship.",
        topInstitutes: [
            "IIM Ahmedabad",
            "IIM Bangalore",
            "XLRI Jamshedpur",
            "FMS Delhi",
            "SP Jain Mumbai"
        ]
    },
    Medicine: {
        description: "Medicine focuses on diagnosing, treating, and preventing diseases to improve human health.",
        skills: ["Clinical Knowledge", "Empathy", "Research", "Critical Thinking"],
        scope: "Continuous demand with lucrative and fulfilling career options.",
        topInstitutes: [
            "AIIMS Delhi",
            "CMC Vellore",
            "JIPMER Puducherry",
            "Kasturba Medical College",
            "AFMC Pune"
        ]
    },
    Law: {
        description: "Law courses teach the legal system and prepare students for careers in the judiciary, legal counsel, and advocacy.",
        skills: ["Legal Research", "Critical Thinking", "Negotiation", "Communication"],
        scope: "Careers in corporate law, criminal law, litigation, and public service.",
        topInstitutes: [
            "NLSIU Bangalore",
            "NALSAR Hyderabad",
            "NLU Delhi",
            "WBNUJS Kolkata",
            "Symbiosis Law School Pune"
        ]
    },
    Arts: {
        description: "Arts courses focus on creativity, cultural studies, and human expression.",
        skills: ["Creative Thinking", "Communication", "Critical Analysis", "Research"],
        scope: "Careers in media, public relations, education, and cultural management.",
        topInstitutes: [
            "Delhi University",
            "JNU Delhi",
            "TISS Mumbai",
            "Loyola College Chennai",
            "Presidency College Kolkata"
        ]
    },
    Science: {
        description: "Science courses develop a deep understanding of natural and physical phenomena.",
        skills: ["Scientific Reasoning", "Research", "Problem Solving", "Critical Thinking"],
        scope: "Diverse opportunities in research, academia, and industry.",
        topInstitutes: [
            "IISc Bangalore",
            "IIT Kanpur",
            "St. Xavier's College Mumbai",
            "Christ University Bangalore",
            "Madras Christian College"
        ]
    },
    IT: {
        description: "Information Technology focuses on managing and processing data using software and systems.",
        skills: ["Programming", "Networking", "Problem Solving", "Cybersecurity"],
        scope: "Booming industry with high demand for IT professionals.",
        topInstitutes: [
            "IIT Hyderabad",
            "IIT Guwahati",
            "VIT Vellore",
            "SRM University",
            "Amity University"
        ]
    },
    Agriculture: {
        description: "Agriculture courses cover farming techniques, sustainability, and agribusiness management.",
        skills: ["Technical Knowledge", "Sustainability Awareness", "Management", "Research"],
        scope: "Growing importance with diverse career paths in farming, research, and agribusiness.",
        topInstitutes: [
            "IARI Delhi",
            "PAU Ludhiana",
            "GBPUAT Uttarakhand",
            "UAS Bangalore",
            "Tamil Nadu Agricultural University"
        ]
    },
    Design: {
        description: "Design courses focus on creativity and functionality in creating visual and physical products.",
        skills: ["Creativity", "Software Proficiency", "Attention to Detail", "Project Management"],
        scope: "High demand in fashion, graphic design, and interior design.",
        topInstitutes: [
            "NID Ahmedabad",
            "NIFT Delhi",
            "Pearl Academy",
            "Srishti Bangalore",
            "MIT Institute of Design"
        ]
    },
    Hospitality: {
        description: "Hospitality courses teach hotel management, event planning, and customer service.",
        skills: ["Communication", "Customer Service", "Team Management", "Problem Solving"],
        scope: "Global demand in tourism, hotels, and event management industries.",
        topInstitutes: [
            "IHM Mumbai",
            "IHM Delhi",
            "Welcomgroup Manipal",
            "IIHM Kolkata",
            "Christ University Bangalore"
        ]
    },
    Journalism: {
        description: "Journalism courses train students to report news and tell stories across media platforms.",
        skills: ["Research", "Communication", "Editing", "Networking"],
        scope: "Opportunities in media houses, publishing, and digital platforms.",
        topInstitutes: [
            "IIMC Delhi",
            "Symbiosis Pune",
            "Xavier Institute of Communications",
            "AJK Mass Communication Research Centre",
            "Asian College of Journalism"
        ]
    },
    Animation: {
        description: "Animation courses focus on creating visual effects, cartoons, and 3D designs.",
        skills: ["Creativity", "Technical Proficiency", "Storyboarding", "Animation Software"],
        scope: "High demand in entertainment, gaming, and advertising industries.",
        topInstitutes: [
            "Arena Animation",
            "MAAC Mumbai",
            "Toonz Academy",
            "Amity University",
            "NSHM Kolkata"
        ]
    },
    Education: {
        description: "Education courses prepare individuals for teaching and academic research.",
        skills: ["Pedagogy", "Communication", "Research", "Empathy"],
        scope: "Careers in teaching, education administration, and academic counseling.",
        topInstitutes: [
            "Banaras Hindu University",
            "Delhi University",
            "TISS Mumbai",
            "Christ University Bangalore",
            "IGNOU"
        ]
    },
    Architecture: {
        description: "Architecture courses teach the art and science of designing buildings and spaces.",
        skills: ["Creativity", "Technical Drawing", "Software Knowledge", "Sustainability Awareness"],
        scope: "Growing demand in urban planning, construction, and design.",
        topInstitutes: [
            "SPA Delhi",
            "IIT Kharagpur",
            "CEPT Ahmedabad",
            "Anna University Chennai",
            "NIT Calicut"
        ]
    }
};

const CourseDetails = ({ category }) => {
    const details = courseDetails[category]

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 bg-white rounded-lg shadow-lg p-8"
        >
            <h2 className="text-2xl font-bold mb-6">{category} - Detailed Overview</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-semibold mb-4">Description</h3>
                    <p className="text-gray-700">{details?.description}</p>

                    <h3 className="text-xl font-semibold mt-6 mb-4">Key Skills</h3>
                    <div className="flex flex-wrap gap-2">
                        {details?.skills.map((skill, index) => (
                            <span
                                key={index}
                                className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">Career Scope</h3>
                    <p className="text-gray-700">{details?.scope}</p>

                    <h3 className="text-xl font-semibold mt-6 mb-4">Top Institutes</h3>
                    <ul className="list-disc list-inside text-gray-700">
                        {details?.topInstitutes.map((institute, index) => (
                            <li key={index} className="mb-2">{institute}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    )
}

export default CourseDetails