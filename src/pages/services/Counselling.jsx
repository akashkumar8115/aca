import React from 'react'
import CHeroSection from '../../components/services/Counselling/CHeroSection'
import CounselStats from '../../components/services/Counselling/CounselStats'
import CounsellingContainer from '../../components/services/Counselling/CounsellingContainer'

const Counselling = () => {
  return (
    <div className='mt-24 '>
      <CHeroSection/>
      <CounselStats/>
      <CounsellingContainer/>
    
    </div>
  )
}

export default Counselling