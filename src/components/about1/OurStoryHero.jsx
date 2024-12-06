import React from 'react'
import story from '../../assets/abouts/story.png'

const OurStoryHero = () => {
    return (
        <section className="xlg:pt-24 xmd:pt-16 pt-24 pb-16 xlg:mt-28 mt-16  ">

            <div className="w-11/12 lg:w-10/12 mx-auto flex  flex-col gap-y-12 ">

                <div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center "
                >
                    <h1 className="xmd:text-[42px] xs:text-4xl text-3xl font-semibold ">Our Story</h1>

                </div>


                <div  className='flex xmd:flex-row flex-col gap-x-8 gap-y-12 justify-between'>

                    {/* ----------- left side ----------- */}

                    <div data-aos="fade-right" className='xlg:w-[62%] xmd:w-[55%] flex flex-col gap-y-4 text-justify '>

                        <p>
                            ACA Pvt Ltd was founded in 2021 by an ambitious 19-
                            year-old boy with a long-term vision and an unwavering
                            passion for future innovation. Mohd Shadab Ansari, the
                            visionary behind ACA, completed his schooling at
                            India’s prestigious Jawahar Navodaya Vidyalaya,
                            Kirtanpur, Bahraich (U.P.). He successfully cleared the
                            IIT JEE Main Exam on his first attempt in 2020, earning
                            admission to Punjab University, Chandigarh—a top-tier
                            institution—where he pursued a B.Tech in Electronics
                            and Communication, graduating in 2024.

                        </p>

                        <p>

                            During his final year, Shadab experienced the pressure
                            and excitement of shaping a professional future. It was
                            then that his dream of establishing a transformative
                            company took form, aimed at providing valuable job
                            internships and career guidance to students and young
                            professionals. Motivated by this vision, Shadab launched
                            ACA Pvt Ltd in his final semester, supported by
                            dedicated co-founder, Manish Yadav . The co-founder
                            was his classmates from the Electronics and
                            Communication Department, sharing the same
                            enthusiasm for innovation and excellence.


                        </p>

                        <p>
                            Akash Kumar is also a vital part of ACA Pvt. Ltd.’s journey.
                            A close friend of Shadab and a fellow Electronics and
                            Communication Engineer from NIT Hamirpur, Akash
                            shares the same vision and plays a crucial role in ACA’s
                            digital initiatives. Akash’s technical prowess and
                            experience in web development have been instrumental
                            in building ACA’s online presence, making the company’s
                            resources accessible to a wider audience. His background
                            in projects like e-commerce websites, web scraping, and
                            full-stack applications has brought a cutting-edge
                            approach to ACA’s technology strategy.

                        </p>

                    </div>


                   {/* ------------ right side  ------------ */}

                    
                        <div data-aos="fade-left" className='xlg:w-[32%] xmd:w-[45%] flex items-center justify-center'>

                            <img src={story} alt="story" className='xmd:w-full xmd:h-full xs:w-[80%] xs:h-[80%] object-contain' />

                        </div>
                    




                </div>





            </div>

        </section>
    )
}

export default OurStoryHero