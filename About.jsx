import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>Us</span></p>
        </div>
        <div className='my-10 flex flex-col md:flex-row gap-12'>
          <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
            <p >We are a leading platform connecting individuals with top legal professionals. Our mission is to simplify the process of finding and booking appointments with trusted lawyers across various specializations.</p>
            <p >With a user-friendly interface, we ensure that you can easily browse through our extensive list of lawyers, check their availability, and book appointments at your convenience.</p>
            <b className='text-gray-800'> Our Vision</b>
            <p>Our platform is designed to provide transparency, reliability, and ease of access to legal services, making it simpler for you to get the legal help you need.</p>
          </div>
          </div> 
          <div className='text-xl my-4'>
            <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span> </p>
          </div>

          <div className='flex flex-col md:flex-row mb-20'>
            <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
              <b>Efficiency:</b>
              <p> StreamLined appointement scheduling that fits into your busy lifestyle.</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
              <b>Convinience</b>
              <p>Access to network of trusted healthcare professionals in your area.</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
              <b>Personalization</b>
              <p>Tailored recommendation and reminders to help you stay on top of your world</p>
            </div>
          </div>
    </div>
  )
}

export default About