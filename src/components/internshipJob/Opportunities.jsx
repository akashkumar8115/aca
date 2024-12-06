import React from 'react'
import { servicesData } from '../../data/services'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Opportunities = () => {
  return (
    <section className='py-24 '>

    {/* --------- container --------- */}

    <div className='w-10/12 mx-auto flex flex-col gap-y-16 border'> 

    <h2 className='text-4xl font-semibold text-center'>Our Opportunities</h2>


    {/* ----------- bottom part ------- */}

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
              servicesData.map((item) => (

                // {
                //     id: 1,
                //     title: "Career Counselling",
                //     description: "Expert guidance for your career journey, from skill development to career path with personalized counseling sessions",
                //     image: CounsellingImg,
                //     path: "/services/career-counselling",
                //     features: [
                //         "One-on-one counseling sessions",
                //         "Personality assessment",
                //         "Career path planning",
                //         "Industry insights"
                //     ]
                // },

                <SwiperSlide key={item.id}>
                  <Link className='rounded-lg  flex flex-col gap-y-6   xlg:h-[420px] group overflow-hidden shadow-lg'>

                    <img src={item.image} alt={item.title} className=' rounded-t-lg transition-all duration-300 group-hover:scale-110  max-h-[250px] sm:h-[180px] xlg:h-[220px]' />

                    <div className='px-4 flex flex-col gap-y-2'>
                        <p className='text-lg font-semibold'>
                            {item.title}
                        </p>

                        <p>
                            Type : Paid
                        </p>
                    </div>


                  </Link>
                </SwiperSlide>
              ))
            }

          </Swiper>

        </div>
       
    </div>

</section>
  )
}

export default Opportunities