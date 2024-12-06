import React, { useRef, useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { bannerData } from '../../data/banner'
import { FaArrowRight, FaArrowLeft, FaClock, FaStar, FaUsers } from 'react-icons/fa'

const SCROLL_INTERVAL = 4000
const SCROLL_BEHAVIOR = 'smooth'

const BannerCard = ({ item, index }) => (
    <motion.div
        key={`${item.id}-${index}`}
        initial={{ opacity: 0.5, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 0.9 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="flex-none mx-6 md:w-[48vw] w-full group hover:scale-105 transition-all duration-700"
    >
        <div className='relative h-[400px] rounded-3xl overflow-hidden shadow-2xl'>
            <img
                src={item.image}
                alt={item.title}
                className='w-[100%] h-full object-cover transform group-hover:scale-110 transition-all duration-700 opacity-0.8 filter brightness-50'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-8'>
                <span className='inline-block w-fit hover:bg-violet-700 px-2 py-1 bg-violet-600 text-white rounded-full text-sm font-semibold mb-4'>
                    {item.category}
                </span>
                <h3 className='text-3xl font-bold text-white mb-3'>{item.title}</h3>
                <p className='text-gray-200 text-white/90 leading-200 mb-6'>{item.description}</p>
                <CourseStats duration={item.duration} rating={item.rating} enrolled={item.enrolled} />
                <CourseActions path={item.path} buttonText={item.buttonText} price={item.price} />
            </div>
        </div>
    </motion.div>
)

const CourseStats = ({ duration, rating, enrolled }) => (
    <div className='flex items-center gap-6 mb-6 text-green-300 text-sm'>
        <span className='flex items-center gap-2'>
            <FaClock /> {duration}
        </span>
        <span className='flex items-center gap-2'>
            <FaStar /> {rating} Rating
        </span>
        <span className='flex items-center gap-2'>
            <FaUsers /> {enrolled} Enrolled
        </span>
    </div>
)

const CourseActions = ({ path, buttonText, price }) => (
    <div className='flex justify-between items-center'>
        <Link to={path} className='flex items-center gap-2'>
            <button className='bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105'>
                {buttonText}
            </button>
        </Link>
        <span className='text-2xl font-bold text-white'>{price}</span>
    </div>
)

const ScrollButton = ({ direction, onClick }) => (
    <button
        className={`absolute ${direction === 'left' ? 'left-8' : 'right-8'} z-20 bg-white/90 hover:bg-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300`}
        onClick={onClick}
    >
        {direction === 'left' ? 
            <FaArrowLeft className="text-violet-600 text-2xl" /> : 
            <FaArrowRight className="text-violet-600 text-2xl" />
        }
    </button>
)

const Banner = () => {
    const scrollRef = useRef(null)
    const [scrollDirection, setScrollDirection] = useState('right')
    const scrollAmount = window.innerWidth * 1

    const handleScroll = useCallback((direction) => {
        const container = scrollRef.current
        if (container) {
            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: SCROLL_BEHAVIOR
            })
            setScrollDirection(direction)
        }
    }, [scrollAmount])

    useEffect(() => {
        const container = scrollRef.current
        let scrollInterval

        const autoScroll = () => {
            if (container) {
                const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth
                const isAtStart = container.scrollLeft === 0

                if (isAtEnd) {
                    setScrollDirection('left')
                } else if (isAtStart) {
                    setScrollDirection('right')
                }

                handleScroll(scrollDirection)
            }
        }

        scrollInterval = setInterval(autoScroll, SCROLL_INTERVAL)
        return () => clearInterval(scrollInterval)
    }, [scrollDirection, handleScroll])

    return (
        <section className='h-[72vh] w-full relative overflow-hidden pt-24 pb-12'>
            <div className='absolute inset-0 bg-dots-pattern opacity-5 z-10'></div>
            <div className='h-full w-full relative z-10'>
                <div className='relative h-full flex items-center pt-4'>
                    <ScrollButton direction="left" onClick={() => handleScroll('left')} />
                    <div
                        ref={scrollRef}
                        className='flex overflow-x-auto scroll-smooth hide-scrollbar h-[400px] items-center'
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {[...bannerData, ...bannerData].map((item, index) => (
                            <BannerCard key={index} item={item} index={index} />
                        ))}
                    </div>
                    <ScrollButton direction="right" onClick={() => handleScroll('right')} />
                </div>
            </div>
        </section>
    )
}

export default Banner
