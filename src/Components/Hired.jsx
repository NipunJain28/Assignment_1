import React from 'react'
import mens from "./men.jpg"
const Hired = () => {
  return (
    <div className='w-full mt-16'>
        <div className='w-[1400px] mx-auto realtive flex justify-between items-start gap-5'>
            {/* part 1 */}
            <div className='w-[60%] font-sans flex flex-col justify-between gap-y-3'>
                    <div className='text-pink-600 font-medium'>WHAT WE ARE DOING</div>
                    <div className='text-blue-900 font-medium text-6xl'>24K Talented People Are</div>
                    <div className='text-blue-900 font-medium text-6xl'>Getting Jobs</div>
                    <div className='text-lg text-black font-bold'>
                    A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    </div>
                    <div className='text-lg'>
                    A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipA common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    </div>
                    <div className='bg-pink-700 hover:bg-pink-500 text-white w-[200px] flex justify-center items-center px-5 py-5'>
                        Post A Job
                    </div>
            </div>
            {/* part 2 */}
            <div className='w-[40%] h-[350px]'>
                    <img src={mens} className=''></img>
            </div>
        </div>
    </div>
  )
}

export default Hired