import React from 'react'
import { blogData } from '../../data/blog'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaTag } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Blog = () => {
  return (
    <section className=' w-full'>
      {/* ---------- container --------- */}

      <div className='w-11/12 lg:w-10/12 mx-auto flex flex-col gap-y-20' >

        {/* ------------ heading part ---------- */}
        <div className='flex flex-col gap-y-4 items-center'>
          {/* <h2 className='text-center text-black-600'>Latest Blog</h2> */}
          <h1 className='xs:text-4xl text-3xl font-semibold text-center'>Our latest Blogs & articles!</h1>

        </div>

        {/* --------- bottom part ------------- */}

        <div className='px-4'>
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            loop
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              // when window width is >= 320px

              // when window width is >= 640px
              800: {
                slidesPerView: 3,
                spaceBetween: 20,
              },

              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            modules={[Autoplay, Pagination]}

            className="mySwiper"
          >
            {
              blogData.map((item) => (

                <SwiperSlide key={item.id}>
                  <div className='rounded-lg  flex flex-col   xlg:h-[420px] group overflow-hidden '>

                    <img src={item.image} alt="blog" className=' rounded-t-lg transition-all duration-300 group-hover:scale-110  max-h-[250px] sm:h-[180px] xlg:h-[220px]' />

                    <div className='w-full px-4 sm:pt-6 pt-10 h-full sm:pb-10 pb-12 flex flex-col sm:items-start items-center gap-y-4 bg-black-100 rounded-b-lg '>

                      <div className='flex items-center gap-x-2'>
                        <p><FaTag /></p>
                        <p className='uppercase text-sm'>{item.tag}</p>
                      </div>

                      <div className='flex items-center gap-x-2'>
                        <p><MdOutlineDateRange /></p>
                        <p className='uppercase text-sm'>{item.date}</p>
                      </div>

                      <Link className='lg:text-lg xmd:text-base sm:text-sm xs:text-base text-sm font-semibold transition-all duration-300 group-hover:text-violet-50  sm:text-left text-center'>
                        {item.title}
                      </Link>

                    </div>

                  </div>
                </SwiperSlide>
              ))
            }

          </Swiper>

        </div>

        <div>

        </div>

      </div>

    </section>
  )
}

export default Blog