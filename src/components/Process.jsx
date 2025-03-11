import React from 'react'
import { SiPolestar } from "react-icons/si";
const Process = () => {
    const webDevelopmentProcess = [
        {
          id: 1,
          title: "Research & Planning",
          description:
            "We start by understanding your business goals, audience, and competitors. Then, we create a strategic plan, including wireframes and content structure, to ensure a strong foundation."
        },
        {
          id: 2,
          title: "Design & Development",
          description:
            "Our team crafts a visually appealing and responsive design that aligns with your brand. Using the latest technologies, we develop a fast, secure, and user-friendly website."
        },
        {
          id: 3,
          title: "Testing & Optimization",
          description:
            "We rigorously test the website for functionality, responsiveness, and performance. This step ensures a seamless experience across all devices and browsers."
        },
        {
          id: 4,
          title: "Launch & Support",
          description:
            "After final approval, we launch your website and ensure everything runs smoothly. We also offer ongoing support, updates, and maintenance to keep your site performing at its best."
        }
      ];
      
      
  return (
    <div className='w-full flex justify-center bg-[#f7f7f7] py-20 p-10'>
        <div className='max-w-[1200px] w-full  flex flex-col gap-10 items-center justify-center'>
        <div className='w-8/12 max-lg:w-full'><h1 className='text-center text-4xl font-bold max-lg:text-2xl'>From Vision to Reality: Our Seamless Web Development Process</h1></div>
        <ul className='flex max-lg:flex-col gap-8 h-fit max-lg:h-fit max-lg:w-full mt-6 w-11/12 '>
            <li className='w-[20%] max-lg:w-full text-white flex justify-center items-center bg-black rounded-xl max-lg:hidden'>
                <SiPolestar className='text-9xl'/>
            </li>
            {webDevelopmentProcess.map((item)=>{
                return <li key={item.id} className='w-[20%] max-lg:w-full h-full flex flex-col  gap-10  rounded-xl bg-neutral-200 p-5'>
                     <p className='text-3xl font-bold'>0{item.id}</p>
                     <div className='flex flex-col gap-3'>
                        <h1 className='font-bold text-xl'>{item.title}</h1>
                        <p className='text-xs text-neutral-600'>{item.description}</p>
                     </div>
                </li>
            })}
        </ul>
        </div>
    </div>
  )
}

export default Process