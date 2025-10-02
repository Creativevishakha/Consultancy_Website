import React from 'react'
import {assets} from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* {......leftside...........} */}
            <div>
              <img className='mb-5 w-40' src={assets.logo} alt="" />
              <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, nemo ducimus praesentium !</p>
            </div>
            {/* {......centerside...........} */}
            <div>
            <p className='text-xl font-medium mb-5'>Company</p>
              <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Privacy policy</li>
                </ul>
            </div>
            {/* {......rightside...........} */}
            <div>
                <p className='text-xl font-medium mb-5'>Get in Touch</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                  <li>Email:  support@example.com</li>
                  <li>Phone: +1 123 456 7890</li>
                  <li>Address: 123 Main St, City, State, Zip</li>
                </ul>
            </div>
        </div>
         {/* {............copy right text...............} */}
        <div>
         <hr />
         <p className='text-center text-sm py-5'>�� 2023 Priscripto. All rights reserved.</p>

        </div>
    </div>
  )
}

export default Footer