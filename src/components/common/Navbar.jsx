import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { RiMenu2Fill, RiSearchLine } from "react-icons/ri"
import { IoMdClose } from "react-icons/io"
import { IoIosArrowDown } from "react-icons/io"
import logo from '../../assets/home/logo.png'

const navlink = [
    {
        id: 1,
        title: "Home",
        path: "/",
    },
    {
        id: 2,
        title: "About",
        path: "/about",
        dropdown: [
            { title: "About Company", path: "/about/about-company" },
            { title: "Our Story", path: "/about/our-story" },
            { title: "Our Team", path: "/about/our-team" },
            { title: "Our Partners", path: "/about/our-partners" },
            { title: "Blog", path: "/about/blogs" },
            { title: "Student Success Stories & Testimonials", path: "/about/student-success-stories" },
        ]
    },
    {
        id: 3,
        title: "Services",
        path: "/services",
        dropdown: [
            { title: "Counselling Sessions", path: "/services/counselling-sessions" },
            { title: "Internships & Jobs", path: "/services/internships-jobs" },
            { title: "IT/Tech based Services", path: "/services/it-tech-based-services" },
            { title: "Career Guidance program", path: "/services/career-guidance-program" },
            { title: "ACA Scholarship Program", path: "/services/aca-scholarship-program" },
            { title: "Partnership & Collaborations", path: "/services/partnership-collaborations" },
        ]
    },
    {
        id: 5,
        title: "Education",
        path: "#",
        dropdown: [
            { title: "Courses & Degrees", path: "/education/courses-degrees" },
            { title: "Study Abroad", path: "/education/study-abroad" },
            { title: "Entrance Exams", path: "/education/entrance-exams" },
            { title: "Scholarships & Financial Aid", path: "/education/scholarships-financial-aid" },
            { title: "College List", path: "/education/colleges" },
            { title: "Course Comparison", path: "/education/course-comparison" },
            { title: "Placement Stats", path: "/education/placement-stats" },
        ]
    },
    {
        id: 6,
        title: "Accommodation",
        path: "#",
        dropdown: [
            { title: "On-Campus Housing", path: "/accommodation/on-campus-housing" },
            { title: "Off-Campus Housing", path: "/accommodation/off-campus-housing" },
            { title: "Student Housing Communities", path: "/accommodation/student-housing-communities" },
            { title: "Budgeting Tips", path: "/accommodation/budgeting-tips" },
            { title: "Safety Tips", path: "/accommodation/safety-tips" },
            { title: "PG/Hostel Details", path: "/accommodation/pg-hostel-details" },
            { title: "Hostel Rules", path: "/accommodation/hostel-rules" },
            { title: "Campus Life", path: "/accommodation/campus-life" },
        ]
    },


    {
        id: 7,
        title: "Contact",
        path: "/contact-us",
    },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null)
    const location = useLocation();

    useEffect(() => {
        setActiveDropdown(null)
    }, [location.pathname])


    const handleDropdown = (id) => {
        setActiveDropdown(activeDropdown === id ? null : id)
    }
    const [isScrolled, setIsScrolled] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true)
        }, 3000)

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const [showSearch, setShowSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
            setShowSearch(false);
            setSearchQuery('');
        }
    };



    return (
        <>
            <header className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
                <nav className='w-full fixed top-0 left-0 z-[9999] right-0 text-black py-2 bg-white shadow-lg'>
                    <div className='w-11/11 lg:w-10/12 mx-auto flex justify-between items-center'>
                        <div className='py-3 px-3 flex items-center justify-between'>
                            <motion.div
                                initial={{ x: '40vw', y: '45vh', scale: 2.5 }}
                                animate={isLoaded ? { x: 0, y: 0, scale: 1 } : {}}
                                transition={{ duration: 1, ease: 'easeOut' }}
                            >
                                <Link to='/' className='text-2xl font-bold'>
                                    <img
                                        src={logo} // Add your logo path here
                                        alt="Career Academy"
                                        className="h-12"
                                    />
                                </Link>
                            </motion.div>
                        </div>

                        {/* laptop view */}

                        <div className='hidden smd:flex xl:gap-x-6 xmd:gap-x-4 items-center gap-x-2 flex'>
                            {navlink.map((item) => (
                                <div key={item.id} className="relative group flex items-center">
                                    {item.dropdown ? (
                                        <div>
                                            <button
                                                className='py-1 px-3 flex items-center gap-1 transition-all duration-300 anime rounded-lg font-semibold'
                                                onClick={() => handleDropdown(item.id)}
                                            >
                                                {item.title}
                                                <IoIosArrowDown className={`transition-transform duration-300 ${activeDropdown === item.id ? 'rotate-180' : ''}`} />

                                            </button>

                                            <div className=' absolute z-[999] mt-4 items-cemter'>
                                                <div className={`flex flex-col gap-y-2 w-60 justify-start overflow-hidden transition-all duration-500 ease-in-out max-h-0 group-hover:max-h-[600px] bg-white shadow-lg rounded-lg ${activeDropdown === item.id ? 'max-h-[600px]' : ''}`}>
                                                    {item.dropdown.map((dropItem, index) => (
                                                        <Link
                                                            key={index}
                                                            to={dropItem.path}
                                                            className=" block px-2 py-4 justify-start hover:bg-green-100 transition-colors items-center gap-x-2"
                                                        >
                                                            {dropItem.title}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>

                                        </div>
                                    ) : (
                                        <Link to={item.path} className='py-1 px-3 justify-start transition-all h-full  duration-300 anime rounded-lg font-semibold'>
                                            {item.title}
                                        </Link>
                                    )}


                                </div>
                            ))}

                            {/* Search Button */}
                            <button
                                onClick={() => setShowSearch(true)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <RiSearchLine className="text-xl" />
                            </button>
                        </div>


                        {/* Mobile Menu Button */}
                        <div className="text-2xl font-bold smd:hidden flex items-center justify-center">
                            {!isOpen ? (
                                <RiMenu2Fill
                                    onClick={() => setIsOpen(true)}
                                    className="cursor-pointer text-black"
                                />
                            ) : (
                                <IoMdClose
                                    onClick={() => setIsOpen(false)}
                                    className="cursor-pointer text-black"
                                />
                            )}
                        </div>



                        {/* Mobile Menu */}
                        <div className={`absolute top-[88px] left-0 font-semibold w-full bg-gradient-to-b from-white to-violet-100 smd:hidden flex flex-col items-center gap-y-2 shadow-xl border-t-[3px] border-violet-50
                    ${isOpen ? "translate-x-[0%]" : "translate-x-[100%]"} transition-all duration-500`}>
                            {navlink.map((item) => (
                                <div key={item.id} className="w-10/12 text-left">
                                    {item.dropdown ? (
                                        <>
                                            <button
                                                onClick={() => handleDropdown(item.id)}
                                                className="py-3 px-4 flex items-center justify-between w-full border-b border-black-400"
                                            >
                                                {item.title}
                                                <IoIosArrowDown className={`transition-transform duration-300 ${activeDropdown === item.id ? 'rotate-180' : ''}`} />
                                            </button>
                                            {activeDropdown === item.id && (
                                                <div className="bg-white py-2 justify-left">
                                                    {item.dropdown.map((dropItem, index) => (
                                                        <Link
                                                            key={index}
                                                            to={dropItem.path}
                                                            className="block px-2 py-2 hover:bg-violet-100"
                                                            onClick={() => setIsOpen(false)}
                                                        >
                                                            {dropItem.title}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <Link
                                            to={item.path}
                                            className="py-3 px-4 block border-b border-black-400 hover:bg-violet-100 text-left"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.title}
                                        </Link>
                                    )}

                                </div>
                            ))}
                            {/* Search Button */}
                            <button
                                onClick={() => setShowSearch(true)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <RiSearchLine className="text-xl" />
                            </button>
                        </div>
                    </div>

                    {/* Search Overlay */}
                    {showSearch && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-0 left-0 w-full h-screen bg-black/50"
                        >
                            <div className="bg-white p-4">
                                <form onSubmit={handleSearch} className="relative">
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search courses, programs, resources..."
                                        className="w-full p-4 pr-12 border rounded-lg focus:outline-none focus:border-violet-500"
                                        autoFocus
                                    />
                                    <button
                                        type="submit"
                                        className="absolute right-4 top-1/2 -translate-y-1/2"
                                    >
                                        <RiSearchLine className="text-xl text-gray-500" />
                                    </button>
                                </form>
                                <button
                                    onClick={() => setShowSearch(false)}
                                    className="mt-2 text-sm text-gray-500 hover:text-gray-700"
                                >
                                    Cancel
                                </button>
                            </div>
                        </motion.div>
                    )}
                </nav>
            </header>
        </>
    )
}

export default Navbar