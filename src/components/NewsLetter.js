import React from 'react'

const NewsLetter = () => {
  return (
    <div className='max-w-[1520px] m-auto text-yellow-50 px-4 bg-[#24262b]'>
        <div className='mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1>Need an advice on how to improve?</h1>
                <p>Sign up to join our newsletter and stay upto date!</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input
                        type='email'
                        placeholder='email'
                        className='p-3 flex w-full rounded-md text-black'
                        />
                        <button className='bg-blue-700 text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>Notify me</button>
                    </div>
                    <p>We are concerned about your data, Read{' '}
                        <span className='text-blue-700'>Privacy Policy</span>
                    </p>
                </div>
                <hr className='my-8 bg-gray-700 border-1'></hr>
        </div>
    </div>
  )
}

export default NewsLetter