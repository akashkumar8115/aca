import React from 'react'
import OurStoryHero from '../../components/about1/OurStoryHero'
import Connect from '../../components/about1/Connect'
import FounderNote from '../../components/about1/FounderNote'
import SuccessStories from '../../components/about1/SuccessStories'


const OurStory = () => {
    return (
        <div >
            <OurStoryHero />
            <Connect />
            <SuccessStories />
            <FounderNote />

        </div>
    )
}

export default OurStory