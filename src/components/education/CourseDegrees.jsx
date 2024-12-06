
import React from 'react';
import { motion } from 'framer-motion';


const courseCategories = [
    {
        id: 1,
        title: "Science Degrees",
        image: "https://vishaledu.com/wp-content/uploads/2024/04/Bachelor-of-science.webp",
        courses: [
            {
                id: 101,
                name: "B.Tech/BE",
                duration: "4 years",
                description: "Engineering and technical fields"
            },
            {
                id: 102,
                name: "MBBS",
                duration: "5.5 years",
                description: "Medicine and Surgery"
            },
            {
                id: 103,
                name: "B.Sc",
                duration: "3 years",
                description: "Pure and Applied Sciences"
            }
        ]
    },
    {
        id: 2,
        title: "Commerce Degrees",
        image: "https://rgicdn.s3.ap-south-1.amazonaws.com/ghrcacs/images/blogs/bcom-degree.webp",
        courses: [
            {
                id: 201,
                name: "B.Com",
                duration: "3 years",
                description: "Commerce and Finance"
            },
            {
                id: 202,
                name: "BBA",
                duration: "3 years",
                description: "Business Administration"
            },
            {
                id: 203,
                name: "CA/CS",
                duration: "3-4 years",
                description: "Professional Finance Courses"
            }
        ]
    },
    {
        id: 3,
        title: "Arts & Humanities",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNarmDxDSETyIPRD-Q1nNHU2ixRTef7LLbXfvxHZBaE8e_RWngglMWuB0FSL9kxXSr-K0&usqp=CAU",
        courses: [
            {
                id: 301,
                name: "BA",
                duration: "3 years",
                description: "Liberal Arts and Humanities"
            },
            {
                id: 302,
                name: "BFA",
                duration: "4 years",
                description: "Fine Arts and Design"
            },
            {
                id: 303,
                name: "BPA",
                duration: "3 years",
                description: "Performing Arts"
            }
        ]
    },
    {
        id: 4,
        title: "Information Technology",
        image: "https://media.licdn.com/dms/image/D4D12AQFi6GSt7yZSJA/article-cover_image-shrink_600_2000/0/1702618998711?e=2147483647&v=beta&t=PMevJMa42l2oiJklC5Lfm2kEGsLe0rekDRUH9w1bIYM",
        courses: [
            {
                id: 401,
                name: "BCA",
                duration: "3 years",
                description: "Bachelor of Computer Applications"
            },
            {
                id: 402,
                name: "B.Sc IT",
                duration: "3 years",
                description: "Bachelor of Science in Information Technology"
            },
            {
                id: 403,
                name: "B.Tech IT",
                duration: "4 years",
                description: "Bachelor of Technology in Information Technology"
            }
        ]
    },
    {
        id: 5,
        title: "Law Degrees",
        image: "https://www.forbes.com/advisor/wp-content/uploads/2022/11/Law_Degree.jpeg-2.jpg",
        courses: [
            {
                id: 501,
                name: "LLB",
                duration: "3 years",
                description: "Bachelor of Laws"
            },
            {
                id: 502,
                name: "BA LLB",
                duration: "5 years",
                description: "Integrated Bachelor of Arts and Law"
            },
            {
                id: 503,
                name: "BBA LLB",
                duration: "5 years",
                description: "Integrated Bachelor of Business Administration and Law"
            }
        ]
    },
    {
        id: 6,
        title: "Education Degrees",
        image: "https://media.licdn.com/dms/image/C5112AQFWfZjrAI2qrw/article-cover_image-shrink_600_2000/0/1572778421752?e=2147483647&v=beta&t=Sbv76VWJKv-Esaa-xbYzNa0UpqyVPwP_10xpk8oztI0",
        courses: [
            {
                id: 601,
                name: "B.Ed",
                duration: "2 years",
                description: "Bachelor of Education"
            },
            {
                id: 602,
                name: "M.Ed",
                duration: "2 years",
                description: "Master of Education"
            }
        ]
    }
];


const CourseDegrees = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-16 pt-32">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-bold mb-4">Explore Degree Programs</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Discover comprehensive degree programs tailored to your interests and career aspirations
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {courseCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                        >
                            <div className="relative h-48">
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                    <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                                </div>
                            </div>

                            <div className="p-6">
                                {category.courses.map((course, idx) => (
                                    <div key={idx} className="mb-6 last:mb-0">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="font-semibold text-lg">{course.name}</h3>
                                            <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">
                                                {course.duration}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 text-sm">{course.description}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CourseDegrees;
