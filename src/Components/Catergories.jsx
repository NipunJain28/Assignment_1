import React from 'react'
import Categorycard from './Categorycard'
import data from './data'
const Catergories = () => {
    
  return (
    <div className='w-full font-sans'>
        <div className='max-w-[1400px] mx-auto mt-12'>
            <div className='flex flex-col justify-between items-center'>
                    <div className='text-pink-600 font-sans font-semibold text-2xl'>Featured  Categories</div>
                    <div className='text-blue-600 text-4xl font-bold'>Browse Top Categories</div>
            </div>
            <div className='grid grid-cols-4 grid-rows-2 gap-y-14 px-3 py-7'>
                {
                    data.map((d,index)=>{
                        return <Categorycard d={d} key={index}></Categorycard>
                    })
                }
            </div>
           
           
            
        </div>
    </div>
  )
}

export default Catergories