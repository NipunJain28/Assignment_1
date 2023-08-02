import React, { useState } from 'react'
import {useRef} from 'react';

import main1copy from "../Components/main1copy.jpg"
const Section1 = () => {
    const ref = useRef(null);
    const [formData,setFormData]=useState({
        jobsearch:''
    });
    function changeHandler(event){
        setFormData(prevState=>{
            return {
                ...prevState,
                [event.target.name]:event.target.value,
            }
        })
    }
    function handleClick(){
        console.log("in this");
        console.log(formData);
        ref.current.value = '';
    }
  return (
    <div className='w-full bg-gray-200 '>
        <div className='mx-auto relative flex justify-between items-center max-w-[1400px] h-[650px] px-10'>
            <div className='w-[600px] flex flex-col justify-between items-start gap-2'>
                <p className='text-blue-800 text-[50px] font-extrabold'>Find The Most</p>
                <p className='text-blue-800 text-[50px] font-extrabold'>Exciting</p>
                <p className='text-blue-800 text-[50px] font-extrabold'>Startup Jobs</p>
                <div className='flex justify-start  realtaive w-full'>
                    <input type='text' ref={ref} onChange={changeHandler} placeholder='Job Title Or Keyword' name='jobsearch' value={formData.jobsearch} className='w-[60%] px-2 py-2'></input>
                    <button className='w-[150px] h-[50px] bg-red-600 text-white hover:bg-red-500' onClick={handleClick}>Find Job</button>
                </div>
            </div>
            <div className='w-[50%]'>
                <img src={main1copy} alt="This is an image" className='w-full h-[600px] object-fill'></img>
            </div>
        </div>
    </div>
  )
}

export default Section1