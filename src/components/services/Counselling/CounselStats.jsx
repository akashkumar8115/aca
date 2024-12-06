import React from 'react'
import { FaGraduationCap } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";
import { RiFilePaper2Line } from "react-icons/ri";
import { IoCall } from "react-icons/io5";

const statData = [
    {
        id: 1,
        title: "1500+ Students Counselled",
        icon: <FaGraduationCap />,
        color: "#91aaff"

    },
    {
        id: 2,
        title: "1400+ College Admissions",
        icon: <FaUniversity />,
        color: "#ff80c5"

    },
    {
        id: 3,
        title: "50+ Scholarship Secured",
        icon: <RiFilePaper2Line />,
        color: "#8aff9c"

    },
    {
        id: 4,
        title: "1500+ Personalize Counselling",
        icon: <IoCall />,
        color: "#c356ea"

    },
]

const CounselStats = () => {
    return (
        <section className='py-2 '>

            {/* ----------- container ----------- */}

            <div className='lg:w-10/12 w-11/12 mx-auto grid xmd:grid-cols-4 grid-cols-2 xl:gap-8 gap-6 justify-items-center'>

                {
                    statData.map((item) => (
                        <div data-aos={item.id % 2 === 0 ? "fade-up" : "fade-down"} key={item.id} style={{ backgroundColor: item.color }} className={`h-[200px] xmd:w-full md:w-[90%] w-full flex flex-col gap-y-6 items-center justify-center rounded-lg trantion-all duration-300 hover:translate-y-[-10px] hover:shadow-lg
            `}>

                            <p className='xs:text-5xl text-3xl '>{item.icon}</p>
                            <h2 className='xl:text-xl tetx-lg text-center font-semibold w-[80%]'>{item.title}</h2>

                        </div>
                    ))
                }

            </div>

        </section>
    )
}

export default CounselStats