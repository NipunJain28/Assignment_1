import React from 'react'
import logo from "../Components/201-2014305_sites-of-jobs-ozil-almanoof-co-rh-ozil-almanoof-co-flexjobs-logo-removebg-preview-min.png"
const Navbar = () => {
  return (
    <nav className='w-full'>
    <div className='mx-auto flex font-serif justify-between items-center max-w-[1400px]'>
            <div>
            <a href="#"><img src={logo} alt="Logo Image" width="200px"></img></a>
            </div>
            {/* part 2 */}
            <ul className='flex justify-between gap-4 items-center text-xl'>
                <li className='text-blue-800 '>
                    <a href='#' className='hover:text-red-500'>Home</a>
                </li>
                <li className='text-blue-800 '>
                    <a href='#' className='hover:text-red-500'>Services</a>
                </li>
                <li className='text-blue-800 '>
                    <a href='#' className='hover:text-red-500'>Blog</a>
                </li>
                <li className='text-blue-800 '>
                    <a href='#' className='hover:text-red-500'>About</a>
                </li>
                <li className='text-blue-800 '>
                    <a href='#' className='hover:text-red-500'>Contact</a>
                </li>
            </ul>
            {/* part 3 */}
            <div className='flex justify-between items-center gap-4'>
                <button className='w-[150px] h-[50px] bg-red-600 text-white hover:bg-red-500'>Register</button>
                <button className='w-[150px] h-[50px] border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white'>Login</button>
            </div>
    </div>
   

        
    </nav>
  )
}

export default Navbar