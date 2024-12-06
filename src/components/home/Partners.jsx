import React from 'react'
import { motion } from 'framer-motion'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { partnerData } from '../../data/partner';
const Partners = () => {
    const sliderRef = React.useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    const nextSlide = () => {
        sliderRef.current.slickNext();
    };

    const prevSlide = () => {
        sliderRef.current.slickPrev();
    };
    return (
        <>
            <section className="mt-24 py-12 ">
                <div className='lg:w-10/12 w-11/12 mx-auto flex flex-col gap-y-16 '>
                    <div className="relative py-8 ">
                        <h1 data-aos="fade-left" className='xmd:text-4xl text-3xl font-semibold text-center mb-16'>Our Trusted Partners</h1>
                        <button
                            className="absolute xl:top-64 xmd:top-56 smd:top-48 xs:top-60 top-[200px] left-5 z-10 -translate-y-1/2 text-white  bg-green-500 hover:text-white-100 p-2 shadow-lg hover:bg-violet-50  transition-transform duration-300 transform rounded-full hover:scale-110 hover:shadow-lg hover:shadow-gray-600 xmd:text-2xl text-base "
                            onClick={prevSlide}
                        >
                            <FaArrowLeft />
                        </button>
                        <button
                            className="absolute xl:top-64 xmd:top-56 smd:top-48 xs:top-60 top-[200px] right-5 z-10 -translate-y-1/2 bg-green-500 text-white bg-white-100  p-2 shadow-lg hover:bg-violet-50 transition-transform duration-300 transform rounded-full hover:scale-110 hover:shadow-lg xmd:text-2xl text-base "
                            onClick={nextSlide}
                        >
                            <FaArrowRight />
                        </button>

                        <Slider {...settings} ref={sliderRef} className="">
                            {partnerData.map((partner) => (
                                <div data-aos="fade-down" key={partner.id} className="px-6  w-[200px] h-[200px] ">

                                    <img
                                        src={partner.image}
                                        alt={partner.name}
                                        className="w-full h-full object-contain aspect-square transition-transform duration-500 transform  "
                                        style={{
                                            animation: 'fadeIn 1s ease-in-out',
                                        }}
                                    />

                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </>


    )
}

export default Partners
