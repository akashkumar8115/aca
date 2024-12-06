import React from 'react'
import { academicData } from '../../data/academic'

const Academic = () => {
  return (
    <section className='w-full sm:py-24 py-16'>
      <div className='w-11/12 lg:w-10/12 mx-auto'>
        <div className='text-center mb-16'>
          <span className='text-violet-600 font-semibold tracking-wide uppercase'>Academic Excellence</span>
          <h2 className='text-4xl md:text-5xl font-bold mt-4'>Pathways to Success</h2>
        </div>

        <div className='grid xmd:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6'>
          {academicData.map((item) => (
            <div key={item.id}
              className='group p-8 rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2'>
              <div className='text-5xl mb-6 text-violet-600'>{item.icon}</div>
              <h3 className='text-xl font-bold mb-4'>{item.title}</h3>
              <p className='text-gray-600'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Academic