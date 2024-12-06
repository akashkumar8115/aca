import React from 'react'
import Banner from '../components/home/Banner.jsx'
import HeroSection from '../components/home/HeroSection'
import Stats from '../components/home/Stats'
import Services from '../components/home/Services'
import Academic from '../components/home/Academic'
import Partners from '../components/home/Partners'
import Testimonials from '../components/home/Testimonials'
import Blog from '../components/home/Blog'
import FAQ from '../components/home/FAQ'
import UpcomingEvents from '../components/home/UpcomingEvents.jsx'
import NewsletterSignup from '../components/home/NewsletterSignup'
import ContactCTA from './ContactCTA.jsx'
import SuccessStories from '../components/home/SuccessStories.jsx'
import Mission from '../components/home/Mission'
import Features from '../components/home/Features'
import Founder from '../components/home/Founder'

const Home = () => {
    return (
        <div className='bg-white'>
            <Banner />
            <HeroSection />
            <Services />
            <Stats />
            <Founder />
            {/* <Academic /> */}
            <Partners />
            <Blog />
            <SuccessStories />
            {/* <Testimonials /> */}
            <UpcomingEvents />
            <FAQ />
            <NewsletterSignup/>
            {/* <ContactCTA /> */}
        </div>
    )
}

export default Home