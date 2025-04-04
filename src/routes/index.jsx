import { createFileRoute } from '@tanstack/react-router'

import Features from '../components/Features';
import Process from '../components/Process';
import Video from '../components/Video';
import Contact from '../components/Contact';
export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return(
    <>
   
    <div className='w-full h-fit flex justify-center bg-[#f7f7f7]  py-26 max-lg:py-10'>
          <div className='max-w-[1200px] w-full h-fit mt-5 max-lg:mt-0  gap-5 grid max-lg:grid-cols-1 grid-cols-2'>
            <div className='flex flex-col  gap-2 max-lg:p-3 '>
              <h1 className='font-semibold text-5xl max-lg:text-[39px] max-lg:leading-10  leading-15'>Creating Stunning, High-Performance Websites That Elevate Your Brand</h1>
            <p className='font-normal text-neutral-700 text-lg'> Turn Your Ideas into Powerful Websites</p>
            <p className='text-neutral-500'>At IP Studios, we design and develop websites that are fast, modern, and user-friendly. Whether you're a startup, small business, or large company, we create digital solutions tailored to your needs.</p>
           <button className='w-fit px-5 py-2 bg-black  mt-6 rounded-md text-white max-lg:text-sm font-semibold'><a href='#contact'>Get Started</a></button>
          </div>
          <div className='bg-cover bg-center bg-no-repeat max-lg:h-[200px] w-full' style={{backgroundImage:`url("https://images.unsplash.com/photo-1629058546566-646c2e9d8522?q=80&w=2104&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`}}>
            </div>
          </div>
    </div>
    
    <Features/>
   
    <Process/>
    <Video/>
    <Contact/>
    </>
  );
}
