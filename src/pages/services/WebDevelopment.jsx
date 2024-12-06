// import React from 'react'

// const WebDevelopment = () => {
//     const services = [
//         {
//             title: "Frontend Development",
//             items: ["React.js", "Next.js", "Vue.js", "Responsive Design", "UI/UX Implementation"]
//         },
//         {
//             title: "Backend Development",
//             items: ["Node.js", "Python", "Database Design", "API Development", "Server Management"]
//         },
//         {
//             title: "E-commerce Solutions",
//             items: ["Online Store Setup", "Payment Integration", "Inventory Management", "Shopping Cart", "Order Processing"]
//         }
//     ]

//     return (
//         <div className="pt-24 min-h-screen bg-gradient-to-b from-white to-green-shade-50">
//             <div className="w-11/12 lg:w-10/12 mx-auto">
//                 <h1 className="text-4xl font-bold text-center mb-12">Web Development Services</h1>

//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {services.map((service, index) => (
//                         <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
//                             <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
//                             <ul className="space-y-2">
//                                 {service.items.map((item, i) => (
//                                     <li key={i} className="text-black-600">• {item}</li>
//                                 ))}
//                             </ul>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default WebDevelopment


// new
import React from 'react'
import { motion } from 'framer-motion'
import WebDevImg from '../../assets/services/web-development.jpg'

const WebDevelopment = () => {
    const technologies = [
        { name: "React.js", level: "90%" },
        { name: "Node.js", level: "85%" },
        { name: "MongoDB", level: "80%" },
        { name: "Next.js", level: "75%" }
    ]

    return (
        <div className="pt-24 min-h-screen bg-gradient-to-b from-white to-green-shade-50 mt-28 pb-28">
            <div className="w-11/12 lg:w-10/12 mx-auto">
                <div className="relative h-[300px] mb-12 rounded-xl overflow-hidden">
                    <img
                        src={WebDevImg}
                        alt="Web Development"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl font-bold text-white"
                        >
                            Web Development Solutions
                        </motion.h1>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                        <h2 className="text-2xl font-semibold mb-6">Our Tech Stack</h2>
                        {technologies.map((tech, index) => (
                            <div key={index} className="mb-4">
                                <div className="flex justify-between mb-2">
                                    <span>{tech.name}</span>
                                    <span>{tech.level}</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: tech.level }}
                                        transition={{ duration: 1, delay: index * 0.2 }}
                                        className="bg-violet-50 h-2 rounded-full"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg">
                        <h2 className="text-2xl font-semibold mb-6">Development Process</h2>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center mr-4">1</div>
                                <span>Requirement Analysis</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center mr-4">2</div>
                                <span>Design & Planning</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center mr-4">3</div>
                                <span>Development</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center mr-4">4</div>
                                <span>Testing & Deployment</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-violet-50 text-white px-8 py-3 rounded-lg hover:bg-violet-100 transition-colors"
                    >
                        Start Your Project
                    </motion.button>
                </div>
            </div>
        </div>
    )
}

export default WebDevelopment
