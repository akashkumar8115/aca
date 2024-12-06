import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const testimonials = [
    {
        name: "Rahul Kumar",
        role: "Software Engineer at Google",
        image: "/path-to-image.jpg",
        quote: "The career guidance from ACA was instrumental in landing my dream job at Google."
    },
    {
        name: "Priya Singh",
        role: "Data Scientist at Amazon",
        image: "/path-to-image.jpg",
        quote: "Their comprehensive approach to career development helped me transition into data science seamlessly."
    },
    {
        name: "Amit Patel",
        role: "Product Manager at Microsoft",
        image: "/path-to-image.jpg",
        quote: "The industry insights and mentorship provided were invaluable for my career growth."
    }
]

const TestimonialsSlider = () => {
    return (
        <section className="py-16">
            <h2 className="text-2xl font-semibold text-center mb-12">Success Stories</h2>
            <Swiper
                modules={[Navigation,Pagination, Autoplay]}
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
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full object-cover"
                                />
                                <div>
                                    <h3 className="font-semibold">{testimonial.name}</h3>
                                    <p className="text-violet-50 text-sm">{testimonial.role}</p>
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
