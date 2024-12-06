import React from 'react'
import { Link } from 'react-router-dom'
import { internshipBasedData } from '../../data/intern-job'


const InternshipType = () => {


  return (
    <section className=' py-16'>

      {/* --------- container --------- */}

      <div className='xl:w-10/12 w-11/12 mx-auto grid xlg:grid-cols-4 xs:grid-cols-2 grid-cols-1 xxl:gap-x-8 gap-x-4 gap-y-12 justify-items-center'>
        {
          internshipBasedData.map((item) => (
            <Link to={`/services/internships-jobs/${item.type.toLowerCase().split(" ").join("-")}`} key={item.id} className='xlg:w-full xmd:w-[80%] xs:w-full xsm:w-[80%] w-[95%] flex flex-col gap-y-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105  hover:bg-green-200  relative shadow-lg '>

              <img src={item.image} alt="" className='w-full h-[200px]  object-cover rounded-lg ' />
              <div className='px-6 py-6 flex flex-col gap-y-3'>
                <h2 className='smd:text-xl text-lg font-semibold text-center'>{item.title}</h2>

                <p className='text-center smd:text-base  text-sm'>({item.subtitle})</p>
              </div>



            </Link>
          ))
        }

      </div>

    </section>
  )
}

export default InternshipType