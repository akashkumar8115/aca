import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const testimonials = [
    {
        id: 1,
        name: "Rahul Kumar",
        role: "Software Engineer at Google",
        image: "https://png.pngtree.com/png-clipart/20240610/original/pngtree-cute-school-student-cartoon-charactor-png-image_15296474.png",
        quote: "The career guidance from ACA was instrumental in landing my dream job at Google."
    },
    {
        id: 2,
        name: "Priya Singh",
        role: "Data Scientist at Amazon",
        image: "https://i.pinimg.com/236x/25/31/04/25310462d84da620f281799e5d3f111a.jpg",
        quote: "Their comprehensive approach to career development helped me transition into data science seamlessly."
    },
    {
        id: 3,
        name: "Amit Patel",
        role: "Product Manager at Microsoft",
        image: "https://cdni.iconscout.com/illustration/free/thumb/free-character-2671583-2218222.png?f=webp",
        quote: "The industry insights and mentorship provided were invaluable for my career growth."
    },
    {
        id: 4,
        name: "Ankita Sharma",
        role: "UX Designer at Adobe",
        image: "https://i.pinimg.com/originals/7d/8d/c6/7d8dc68b2dd3cfe139cf3e7c32725a9c.png",
        quote: "ACA's design workshops honed my creative skills and prepared me for real-world challenges."
    },
    {
        id: 5,
        name: "Vikram Mehta",
        role: "Cloud Architect at IBM",
        image: "https://www.pngmart.com/files/22/Professional-Man-PNG-Transparent.png",
        quote: "The hands-on experience and mentorship I received helped me excel in cloud computing."
    },
    {
        id: 6,
        name: "Nisha Kapoor",
        role: "AI Researcher at OpenAI",
        image: "https://i.pinimg.com/236x/11/a8/f9/11a8f98bff6e6e097728fcd86dfe6593.jpg",
        quote: "The personalized guidance and innovative projects at ACA prepared me for cutting-edge AI roles."
    },
    {
        id: 7,
        name: "Rohan Gupta",
        role: "Cybersecurity Analyst at Cisco",
        image: "https://thumbs.dreamstime.com/b/school-student-vector-cartoon-style-isolated-white-background-young-boy-glasses-red-t-shirt-jeans-school-student-vector-126364532.jpg",
        quote: "ACA's rigorous training in cybersecurity gave me the confidence to secure sensitive data systems."
    },
    {
        id: 8,
        name: "Simran Kaur",
        role: "Digital Marketing Specialist at HubSpot",
        image: "https://www.kindpng.com/picc/m/105-1055655_woman-avatar-png-transparent-png.png",
        quote: "ACA's digital marketing program equipped me with the tools to excel in competitive markets."
    }
];


const TestimonialsSlider = () => {
    return (
        <section className="py-16">
            <h2 className="text-2xl font-semibold text-center mb-12">Success Stories</h2>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                className="pb-12"
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white rounded-xl shadow-lg p-8 h-full">
                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full object-cover"
                                />
                                <div>
                                    <h3 className="font-semibold">{testimonial.name}</h3>
                                    <p className="text-violet-500 text-sm">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="text-black-600 italic">"{testimonial.quote}"</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default TestimonialsSlider
