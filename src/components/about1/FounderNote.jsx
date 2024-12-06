import React from 'react'
import Note from '../../assets/abouts/note.png'

const FounderNote = () => {
    return (
        <section className=" pt-24 pb-16   ">

            <div className="w-11/12 lg:w-10/12 mx-auto flex  flex-col gap-y-16 ">

                <div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center "
                >
                    <h1 className=" xs:text-4xl text-3xl font-semibold ">A Note on the founder
                        , Mohd Shadab Ansari</h1>

                </div>


                <div className='flex xmd:flex-row-reverse flex-col gap-x-8 gap-y-12 justify-between'>

                    {/* ----------- left side ----------- */}

                    <div data-aos="fade-left" className='xlg:w-[62%] xmd:w-[55%] flex flex-col gap-y-4 text-justify '>

                        <p>
                            Beyond his technical achievements, Shadab is recognized
                            for his creativity and leadership. A proactive problem-
                            solver, he is always seeking new ways to innovate and
                            make a difference. His entrepreneurial mindset and
                            dedication to giving back to the community have been
                            driving forces behind ACA Pvt. Ltd. Shadab believes in a
                            future where education and career development are
                            accessible, personalized, and directly connected to real-
                            world opportunities.

                        </p>

                        <p>

                            Shadab’s Vision for ACA Pvt. Ltd. is to build a system that
                            not only provides jobs and internships but also empowers
                            individuals with lifelong skills. Under his leadership, ACA
                            Pvt. Ltd. is positioned as a transformative player in the
                            industry, offering a comprehensive suite of resources to
                            help users navigate their career paths with confidence and
                            clarity.


                        </p>

                        <p>
                            With ACA Pvt. Ltd., Shadab, Manish, and Akash are
                            redefining career readiness in India, ensuring that the next
                            generation has the support and resources they need to
                            thrive in an ever-evolving job market.

                        </p>

                    </div>


                    {/* ------------ right side  ------------ */}


                    <div data-aos="fade-right" className='xlg:w-[32%] xmd:w-[45%] flex items-center justify-center'>

                        <img src={Note} alt="founder's note" className='xmd:w-full xmd:h-full xs:w-[80%] xs:h-[80%] object-contain' />

                    </div>





                </div>





            </div>

        </section>
    )
}

export default FounderNote