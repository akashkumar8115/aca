import React from 'react'
import { useLocation } from 'react-router-dom'
import { memberData } from '../../data/memberData';

const Member = () => {

    const location = useLocation();

    const pathname = location.pathname.split("/");
    const name = pathname[pathname.length - 1].split("-").join(" ");

    const memberInfo = memberData.filter((item) => item.name.toLowerCase() === name);

    console.log(memberInfo)


    return (
        <section className="smd:pt-24 pt-40 pb-24  xlg:mt-20 mt-8">

            <div className="w-11/12 lg:w-10/12 mx-auto border rounded-lg flex xmd:flex-row flex-col  gap-y-6 xxl:gap-x-8 gap-x-6 justify-between py-6 px-6  bg-white">

                {/* -------------- left side ------------- */}

                <div className='xmd:w-[35%]  flex flex-col gap-y-6  '>

                    {/* ----------- photo name  --------- */}

                    <div className='flex flex-col items-center gap-y-3'>

                        <div className='w-[220px] h-[220px] '>
                            <img src={memberInfo[0].photo} alt={memberInfo.name} className='w-full h-full object-cover rounded-full aspect-square' />
                        </div>

                        <h2 className='text-xl font-semibold'>{memberInfo[0].name}</h2>

                    </div>

                    {/* ---------- skills  ---------- */}

                    <div className='flex flex-col gap-y-3 '>

                        <h2 className='text-lg text-center text-black-600 font-semibold'>Skills</h2>

                    </div>

                    <div className={`grid xmd:gap-x-4 gap-y-6 text-sm xmd:${memberInfo[0].skills.length > 1 ? "xs:grid-cols-2 grid-cols-2 " : "grid-cols-1"}  xmd:gap-y-4 gap-y-2  xmd:text-base text-sm font-semibold text-black-600 xmd:`}>
                        {
                            memberInfo[0].skills.map((skill) => (
                                <p className='bg-green-100 rounded-full flex items-center justify-center text-center xmd:py-2 py-3 px-4'>
                                    {skill}
                                </p>
                            ))
                        }

                    </div>



                </div>

                {/* ---------- right side  ------------- */}

                <div className='xmd:w-[60%]  py-6 px-6  flex items-center  '>



                    <div className=' flex flex-col gap-y-6'>

                        <h2 className='text-2xl font-semibold'>{`About ${memberInfo[0].name}`}</h2>

                        <p className='text-black-500 italic xl:text-base text-sm'>" {memberInfo[0].bio} "</p>



                        <p className='flex gap-x-2 '>
                            <span className='font-semibold xs:text-lg  text-base'>Role: </span>
                            <span className='mt-1 xs:text-base text-sm'>{memberInfo[0].role}</span>
                        </p>

                        <p className='flex gap-x-2 '>
                            <span className='font-semibold xs:text-lg  text-base'>Education: </span>
                            <span className='mt-1 xs:text-base text-sm'>{memberInfo[0].education}</span>
                        </p>

                        {
                            memberInfo[0].socialLinks.length > 0 &&

                            <div className='flex flex-col gap-y-4'>

                                <h2 className='font-semibold xs:text-lg tetx-base'>Connect with me : </h2>

                                <div className='flex flex-row gap-y-3'>

                                    {
                                        memberInfo[0].socialLinks.map((link) => (
                                            <div className='flex gap-x-4 flex-wrap justify-center justify-items-center m-1'>
                                                <p className='capitalize'>{link.title}: </p>
                                                {/* <a href={link.url} className='text-violet-50 hover:text-green-500 xs:text-base text-sm m-1'> {link.icon}</a> */}
                                            </div>
                                        ))
                                    }

                                </div>
                            </div>
                        }

                        {
                            memberInfo[0].quote.length !== 0 && (<p className='text-black-500 italic xxl:text-lg text-base mt-8'>
                                "{memberInfo[0].quote}"
                            </p>)
                        }



                    </div>




                </div>





            </div>

        </section>
    )
}

export default Member