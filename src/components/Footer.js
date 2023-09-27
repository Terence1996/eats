import React from 'react'
import { FaDribbbleSquare, FaFacebookSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1520px] m-auto px-4 py-2 bg-[#24262b]'>
        <div className='py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl font-bold'>Snap<span className='text-blue-700 font-bold'>food</span></h1>
                <p className='text-yellow-50 font-medium'>The master franchise for operations in India is licensed to Young Franchise Holdings.</p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaFacebookSquare size={30}/>
                    <FaInstagram size={30}/>
                    <FaTwitterSquare size={30}/>
                    <FaDribbbleSquare size={30}/>
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mt-6'>
                <div>
                    <h6 className='font-medium text-[#9b9b9b]'>
                  Location
                    </h6>
                    <ul>
                        <li className='py-2 text-sm'>Chennai</li>
                        <li className='py-2 text-sm'>Coimabatore</li>
                        <li className='py-2 text-sm'>Bangalore</li>
                        <li className='py-2 text-sm'>Kerala</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer