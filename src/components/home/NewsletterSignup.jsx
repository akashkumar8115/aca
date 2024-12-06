import React from 'react'

const NewsletterSignup = () => {
    return (
        <section className='w-full py-8 bg-voilet-300'>
            <div className='w-11/12 mx-auto'>
                <div className='bg-gray-100 rounded-lg p-6 sm:p-12'>
                    <div className='max-w-2xl mx-auto text-center'>
                        <h2 className='text-2xl sm:text-3xl font-bold mb-3'>Stay Updated with Career Insights</h2>
                        <p className='text-gray-600 mb-6'>Get weekly updates on industry trends, job opportunities, and career development tips</p>
                        
                        <form className='flex flex-col sm:flex-row gap-3 max-w-md mx-auto'>
                            <input 
                                type="email" 
                                placeholder="Enter your email"
                                className='w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-gray-400'
                            />
                            <button className='w-full sm:w-auto px-6 py-2 bg-green-300 text-black rounded-lg hover:bg-green-600 hover:text-white transition-colors'>
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsletterSignup