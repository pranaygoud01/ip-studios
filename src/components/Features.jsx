import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: 'Custom Website Alchemy',
    description: 'From sleek single pages to monstrous mega-sites, we build digital domains that are lightning-fast, super-smooth, and utterly irresistible.',
    imgSrc: 'https://threedio-prod-var-cdn.icons8.com/qx/preview_sets/previews/4SiVc24p6KiMnnlh.webp'
  },
  {
    title: 'E-Commerce Magic',
    description: 'Turn browsers into buyers with our hypnotic, high-converting online stores that make shopping an adventure!',
    imgSrc: 'https://threedio-prod-var-cdn.icons8.com/gk/preview_sets/previews/8Eht4Iyt5wjryXab.webp'
  },
  {
    title: 'Full-Stack Firepower',
    description: 'We wield the mightiest frontend and backend tech to conjure web wonders that perform like a dream.',
    imgSrc: 'https://threedio-prod-var-cdn.icons8.com/cr/preview_sets/previews/NixgdscUZmr4S7yH.webp'
  },
  {
    title: 'SEO & Speed Boost',
    description: 'Launch your website to the top of search engines and make it zoom like a rocket with our performance-boosting spells!',
    imgSrc: 'https://threedio-prod-var-cdn.icons8.com/el/preview_sets/previews/SSEmpBVixt4ldADQ.webp'
  }
];

const Features = () => {
  const [num, setNum] = useState(0);

  return (
    <div className='h-fit w-full flex py-14 bg-black justify-center'>
      <div className='max-w-[1200px] w-full h-fit px-4'>
        <h1 className='font-semibold text-4xl max-lg:text-[28px] text-white text-center'>Our Outrageously Awesome Services</h1>
        <div className='grid grid-cols-2 text-white mt-12 gap-10 max-lg:grid-cols-1 '>
          <motion.div
            className='bg-cover bg-no-repeat bg-center  shadow-lg h-96'
            style={{ backgroundImage: `url("https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")` }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          ></motion.div>
          
          <div className='flex flex-col justify-between'>
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                onClick={() => setNum(num === index ? null : index)} 
                className='p-5  cursor-pointer rounded-lg transition-all duration-300'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h1 className='font-semibold text-2xl flex justify-between items-center'>
                  {service.title}
                  <MdKeyboardArrowDown className={`transition-transform duration-300 ${num === index ? 'rotate-180' : ''}`} />
                </h1>
                <AnimatePresence>
                  {num === index && (
                    <motion.p 
                      className='pt-3 font-semibold text-neutral-200'
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;