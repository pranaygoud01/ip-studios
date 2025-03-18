import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { Link } from '@tanstack/react-router';
import {AnimatePresence, motion} from "motion/react"
import { easeOut } from 'motion';
const NavBar = () => {
  const [open,setOpen]=useState(false);
    const menu=[
        {name:"Home",path:"/"},
        {name:"Portfolio",path:"/"},
        {name:"About",path:"/about"},
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
           <button className='lg:hidden' onClick={()=>setOpen(true)}><HiOutlineMenuAlt4/></button>
            </div>

    </div>
    </div>
    <AnimatePresence>
    {open && (
  <motion.div
    initial={{ x: "100%" }}
    animate={{ x: 0 }}
    exit={{ x: "100%" }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    className="bg-[#f7f7f7] pt-10 lg:hidden top-0 fixed h-full w-full right-0"
  >
    <button
      className="text-4xl w-full flex justify-end px-10"
      onClick={() => setOpen(false)}
    >
      <IoMdClose />
    </button>
    <div className='flex flex-col justify-between items-center h-[80vh]'>
    <ul className="flex flex-col text-xl justify-start pt-16 items-center h-fit font-semibold gap-5">
      {menu.map((item, index) => (
        <li
          key={index}
          className="px-2 py-1 text-4xl hover:underline rounded-md hover:bg-neutral-100 cursor-pointer"
        >
          <Link onClick={()=>setOpen(false)} to={item.path}>{item.name}</Link>
        </li>
      ))}
    </ul>
    <h1 className=' bottom-0 text-neutral-700 text-xs text-center font-semibold '>Developed by <a className='underline' href='https://pranayportfolio.vercel.app/about'>Pranay</a></h1>
    </div>
  </motion.div>
)}
</AnimatePresence>
    </>
  )
}

export default NavBar