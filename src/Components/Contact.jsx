import React from 'react'
import Capture from './Capture.JPG'
const Contact = () => {
  return (
    <div className='w-full mt-64 '>
            <div className='mx-auto max-w-[1400px] flex flex-col justify-between gap-6 items-center'>
                    <div>
                        <img src={Capture} className='rounded-full w-[200px] h-[200px]'></img>
                    </div>
                    <div className='font-sans text-black'>
                        <div className='font-semibold'>Margret Lawson</div>
                        <div className='font-medium'>Creative Director</div>
                    </div>
                    <div className='flex flex-col items-center justify-center mx-auto'>
                   <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</div>  <div>of type and scrambled it to make a type specimen book</div>
                    </div>
                    <div className='bg-pink-700 hover:bg-pink-500 text-white w-[200px] flex justify-center items-center px-5 py-5'>
                        Contact
                    </div>
            </div>
    </div>
  )
}

export default Contact