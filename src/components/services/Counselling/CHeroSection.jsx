import React from 'react'
import counsellingImg from '../../../assets/counsel-shadab.png'

const CHeroSection = () => {
  return (
    <section className='py-10 '>  

    {/* ------------ container ----------------- */}

    <div className='lg:w-10/12 w-11/12 mx-auto flex xmd:flex-row flex-col items-center gap-x-8 gap-y-4 justify-between'>

    {/* ---------- left side ----------- */}

    <div data-aos="fade-left" className='xxl:w-[55%] xmd:w-[54%] flex flex-col gap-y-8   justify-center '>

        <h1 className='xlg:text-[40px] text-3xl xmd:text-left text-center font-semibold xlg:leading-[52px] leading-[46px]'>Shape Your Future with Expert Guidance</h1>

        <p className='text-justify xs:text-base text-sm'>From college choices to career advice, our counseling services are here to guide you in making the best decisions for your education and professional journey. Our dedicated counselors provide insights on college applications, course selection, and career paths, helping you align your strengths and goals for a bright future.</p>

    </div>

    {/* --------- right side ------------ */}

    <div data-aos="fade-right" className='xxl:w-[40%] xmd:w-[45%] xsm:w-[80%] w-[95%] '>
        <img src={counsellingImg} alt="counselling" className='object-contain aspect-square h-80 w-80 m-auto' />
    </div>


    </div>

    </section>
  )
}

export default CHeroSection