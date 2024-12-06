import React from 'react'
import { helpData } from '../../data/help'

const Help = () => {
  return (
    <section className=' w-full sm:py-24 py-16  bg-black-100'>

      {/* ---------- container --------- */}

      <div className='w-11/12 lg:w-10/12 mx-auto flex flex-col gap-y-20' >

       {/* ------------ heading part ---------- */}

        <div className='flex flex-col gap-y-4 items-center'>


          <h2 className='text-center text-black-600'>How Can We help You</h2>

          <h1 className='xs:text-4xl text-3xl font-semibold text-center'>We make your ideas happen!</h1>

        </div>

        {/* --------- bottom part ------------- */}

        <div className='grid md:grid-cols-2 grid-cols-1 xmd:gap-x-12 gap-x-6 gap-y-8'>

          {
            helpData.map((item) => (
              <div key={item.id} style={{ backgroundColor: item.color }} className={`flex items-center gap-x-4 rounded-lg py-6 px-6 border-l-4 border-black-100 hover:border-black-900 hover:-translate-y-2 transition-all duration-500
            
              `}>

                <div className='flex flex-col gap-y-4 w-[60%]'>
                    <h2 className='xs:text-lg text-base font-semibold'>{item.title}</h2>
                    <p className='font-light text-sm'>{item.desc}</p>

                </div>

                <div className='w-[35%]'>
                  <img src={item.image} alt="help" className='w-full h-full object-cover'/>
                </div>

              
                
              </div>
            ))
          }

        </div>


      </div>

    </section>
  )
}

export default Help