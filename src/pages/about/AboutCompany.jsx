import React from 'react'
import Company from '../../components/about1/Company'
import MissionVision from '../../components/about1/MissionVision'
import Founder from '../../components/about1/Founder'
import Join from '../../components/about1/Join'
import MissionVisionDetails from '../../components/about1/MissionVisionDetails'
import FounderJourney from '../../components/about1/FounderJourney'
import ValueSection from '../../components/about1/ValueSection'
import OurImapct from '../../components/about1/OurImapct'
import FounderAchievements from '../../components/about1/FounderAchievements'

const AboutCompany = () => {
    return (
        <div >

            <Company />
            <MissionVision />
            <ValueSection />
            <Founder />
            <FounderJourney />
            <FounderAchievements />
            <OurImapct />
            <Join />
            <MissionVisionDetails />
        </div>
    )
}

export default AboutCompany