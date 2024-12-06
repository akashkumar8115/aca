import React from 'react'
import founder from '../../assets/abouts/Shadab.jpg'

const Founder = () => {
    return (
        <section className="py-24  bg-gradient-to-b from-white to-violet-100 ">

            <div className="w-11/12 lg:w-10/12 mx-auto flex flex-col md:gap-y-16 gap-y-12 ">

                <h1 data-aos="fade-bottom" className="xmd:text-[42px] xs:text-4xl text-3xl font-semibold text-center">About The Founder</h1>

                <div className='rounded-lg border p-4  flex xmd:flex-row flex-col gap-x-6 justify-between'>

                    {/* --------- left ------------ */}

                    <div data-aos="fade-right" className='xmd:w-[35%] md:w-[400px] xs:w-[320px] w-[95%] xmd:mx-0 mx-auto flex flex-col gap-y-6 items-center bg-violet-50 py-12 px-4 rounded-lg text-white'>

                        {/* --------- image ----------- */}

                        <div className='xlg:w-[250px] xlg:h-[250px] w-[200px] h-[200px] '>
                            <img src={founder} alt="founder" className='w-full h-full object-cover rounded-full' />
                        </div>

                        {/* ------- info --------- */}

                        <div className='flex flex-col text-black gap-y-4'>
                            <h2 className='xlg:text-3xl md:text-2xl text-lg font-semibold text-center'>Mohd. Shadab Ansari</h2>
                            <p className='text-center text-lg'>Founder of ACA</p>
                        </div>



                    </div>

                    {/* ---------- right ---------- */}

                    <div data-aos="fade-left" className='xmd:w-[60%] md:text-lg text-base flex flex-col gap-y-4 py-12'>

                        <p className='text-justify'>
                            <span className='xlg:text-2xl text-xl font-semibold'> Mohd Shadab Ansari</span> is the founder of ACA Pvt. Ltd.
                            and a dynamic entrepreneur with a background in
                            electronics engineering. Driven by a strong passion for
                            developing transformative platforms for students,
                            professionals, and educational institutions, he
                            embarked on his entrepreneurial journey in 2021
                            during his first year of college.
                        </p>

                        <p className='text-justify'>


                            His early experiences as
                            a college counselor laid the foundation for his
                            commitment to bridging educational and professional
                            development gaps. Shadab’s vision and innovative
                            approach continue to inspire and create meaningful
                            impacts in the academic and professional
                            communities.

                        </p>

                    </div>

                </div>



            </div>

        </section>
    )
}

export default Founder