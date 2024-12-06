import React from 'react'
import { memberData } from '../../data/memberData'
import { Link } from 'react-router-dom'




const Team = () => {
    return (
        <section className="lg:py-24 xs:py-16 py-24 mt-24 bg-black-100">

            <div className="w-11/12 lg:w-10/12 mx-auto flex flex-col gap-y-12 ">


                <div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center "
                >
                    <h1 className="xmd:text-[42px] xs:text-4xl text-3xl font-semibold ">Meet Our Team</h1>

                </div>


                <div className='grid xlg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 grid-cols-1 xxl:gap-y-12 gap-y-8 xxl:gap-x-6 gap-x-4 '>

                    {
                        memberData.map((member) => (
                            <Link
                                to={`/about/our-team/${member.name.toLowerCase().split(" ").join("-")}`}

                                data-aos={member.id % 2 === 0 ? "fade-up" : "fade-down"}
                                key={member.id} className='rounded-lg py-8 px-8 flex flex-col gap-y-6 items-center transition-all duration-500  hover:bg-green-200 group'>

                                <div className='xxl:w-[220px] xxl:h-[220px] xs:w-[180px] xs:h-[180px] w-[200px] h-[200px] '>
                                    <img src={member.photo} alt={member.name} className='w-full h-full object-cover rounded-md' />
                                </div>

                                {/* ------ info ------ */}
                                <div className='flex flex-col items-center gap-y-2'>
                                    <h2 className='text-center xmd:text-xl text-lg font-semibold'>{member.name}</h2>
                                    <h3 className='transition-all duration-300 group-hover:text-violet-50 text-green-700 font-semibold text-center'>{member.role}</h3>
                                </div>

                            </Link>

                        ))
                    }

                </div>

            </div>
        </section>
    )
}

export default Team