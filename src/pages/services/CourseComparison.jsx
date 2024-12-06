import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import CourseComparisonTable from '../../components/courses/CourseComparisonTable'
import CourseFilter from '../../components/courses/CourseFilter'
import CourseDetails from '../../components/courses/CourseDetails'

const courseCategories = [
    "Engineering",
    "Management",
    "Medical",
    "ArtsAndHumanities",
    "Science",
    "Commerce",
    "Law",
    "Design",
    "Architecture"
]

const CourseComparison = () => {
    const [selectedCategory, setSelectedCategory] = useState("Engineering")
    const [selectedCourses, setSelectedCourses] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.5, staggerChildren: 0.1 }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    }

    const handleCategoryChange = (category) => {
        setIsLoading(true)
        setSelectedCategory(category)
        setSelectedCourses([])
        setTimeout(() => setIsLoading(false), 500)
    }

    const handleSearch = (event) => {
        setSearchQuery(event.target.value)
    }

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="pt-24 min-h-screen bg-gradient-to-b from-white to-violet-100 mt-28 pb-12"
        >
            <div className="w-11/12 lg:w-10/12 mx-auto">
                <motion.h1
                    variants={itemVariants}
                    className="text-4xl font-bold text-center mb-8 text-gray-800"
                >
                    Course Comparison Tool
                </motion.h1>

                {/* Search Bar */}
                <motion.div
                    variants={itemVariants}
                    className="mb-8"
                >
                    <input
                        type="text"
                        placeholder="Search courses..."
                        value={searchQuery}
                        onChange={handleSearch}
                        className="w-full max-w-md mx-auto block px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-200"
                    />
                </motion.div>

                {/* Category Selection */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap gap-4 mb-8 justify-center"
                >
                    {courseCategories.map((category) => (
                        <motion.button
                            key={category}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleCategoryChange(category)}
                            className={`px-6 py-2 rounded-full transition-all shadow-md ${selectedCategory === category
                                ? 'bg-violet-600 text-green-500'
                                : 'bg-white text-gray-700 hover:bg-violet-200'
                                }`}
                        >
                            {category}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Loading State */}
                {isLoading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-violet-500"></div>
                    </div>
                ) : (
                    <>
                        {/* Course Filter */}
                        <motion.div variants={itemVariants}>
                            <CourseFilter
                                category={selectedCategory}
                                onFilterChange={(filters) => console.log(filters)}
                            />
                        </motion.div>

                        {/* Course Comparison Table */}
                        <motion.div variants={itemVariants}>
                            <CourseComparisonTable
                                category={selectedCategory}
                                searchQuery={searchQuery}
                            />
                        </motion.div>

                        {/* Course Details Section */}
                        <motion.div variants={itemVariants}>
                            <CourseDetails
                                category={selectedCategory}
                                selectedCourses={selectedCourses}
                            />
                        </motion.div>
                    </>
                )}
            </div>
        </motion.div>
    )
}

export default CourseComparison