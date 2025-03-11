import React, { useState } from 'react'

import { FaWandMagicSparkles } from "react-icons/fa6";

import { Link } from '@tanstack/react-router';
const NavBar = () => {
  const [open,setOpen]=useState(false);
    const menu=[
        {name:"Home",path:"/"},
        {name:"Portfolio",path:"/"},
        {name:"About",path:"/"},
        {name:"Services",path:"/"},
        
    ]
  return (
    <>
    <div className='w-full p-3 text-white  bg-black'>
      <p className='text-center text-xs font-semibold'>Elevate Your Online Presence with Stunning Websites! <span className='max-lg:hidden'> Custom, Responsive, and SEO-Optimized Web Solutions. Let's Build Something Amazing Together!</span></p>
    </div>
    <div className='w-full sticky top-0 flex justify-center bg-[#f7f7f7] '>
    <div className='w-full max-w-[1200px] max-lg:max-w-full px-8 max-lg:px-4  bg-[#f7f7f7]  text-[#1d1d1d] py-4 flex justify-between max-lg:text-lg max-lg:p-4 text-xl font-[500] '>
           <div className='flex gap-10 items-center'>
            <Link to="/" className='flex gap-2 font-semibold  items-center'> <span className='text-gray-900'><FaWandMagicSparkles/></span> IP Studios</Link>
            <div className='border py-2 border-neutral-300'></div>
            <ul className='flex text-sm gap-5 max-lg:hidden'>
                {menu.map((item,index)=>{
                    return <li key={index} className='px-2 py-1 rounded-md hover:bg-neutral-100 cursor-pointer'><Link to={item.path}>{item.name}</Link></li>
                })}
            </ul>
           </div>
           <div className='text-2xl flex gap-5 items-center'>
            <img src='https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151033973.jpg?t=st=1741335575~exp=1741339175~hmac=c6cc25b784abbfc094babc3ea93096c7b281cd2d9be472bd91a8f0c7c950c40d&w=900'
            className='w-[25px] h-[25px] rounded-full object-center object-cover'/>
           <a href='#contact' className='text-xs px-5 py-2 border-neutral-900 border rounded-md font-semibold max-lg:hidden'>Request Quote</a>
           <a href='#contact' className='text-xs px-5 py-2  bg-black text-white rounded-md font-semibold'>Get Started</a>
            </div>

    </div>
    </div>
    </>
  )
}

export default NavBar