import React from 'react'
import categoryImg from "./Cate1.JPG"
const categoryCard = (d) => {
    console.log(d);
  return (
    <div>
        <div className='font-sans border border-gray-200 flex w-[300px] h-[210px] hover:shadow-md hover:scale-125 transition-all duration-75 px-3 py-5 flex-col  justify-between items-center'>
            <img src={categoryImg}></img>
            <div className='flex flex-col justify-between font-sans items-center'>
                <div className='text-black font-semibold text-xl'>{d.d.heading}</div>
                <div className='text-black font-semibold text-xl'>Catergory:{d.d.category}</div>
            </div>
        </div>
    </div>
  )
}

export default categoryCard