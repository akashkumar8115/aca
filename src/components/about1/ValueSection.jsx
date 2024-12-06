import React from 'react'

const values = [
    {
        title: "Innovation",
        description: "Constantly evolving our solutions to meet modern career challenges"
    },
    {
        title: "Accessibility",
        description: "Making quality career resources available to all backgrounds"
    },
    {
        title: "Excellence",
        description: "Maintaining high standards in all our services and interactions"
    },
    {
        title: "Impact",
        description: "Creating meaningful change in students' career trajectories"
    }
]

const ValueSection = () => {
    return (
        <section className="py-24  bg-green-100 ">

            <div data-aos="fade-left" className="w-11/12 lg:w-10/12 mx-auto">



                <h2 className="text-2xl font-semibold mb-8 text-center">Our Values</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                            <p className="text-black-600">{value.description}</p>
                        </div>
                    ))}

                </div>


            </div>

        </section>
    )
}

export default ValueSection