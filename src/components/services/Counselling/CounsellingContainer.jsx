import React from 'react'
import CollegeCounselling from './CollegeCounselling'

const CounsellingContainer = () => {
  return (
    <section className='py-24 '>

      <div className='lg:w-10/12 w-11/12 mx-auto flex flex-col gap-y-16'>

        <h1 className='text-center text-4xl tracking-widest font-semibold'> What We Offer</h1>

        {/* --------- college counselling ------- */}

        <div >


          <CollegeCounselling />

        </div>

        {/* ---------- career counselling ----------- */}



      </div>

    </section>
  )
}

export default CounsellingContainer