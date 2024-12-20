import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

function About() {
  return (
    <motion.div 
    initial={{opacity:0, x:200}}
    transition={{duration:1}}
    whileInView={{opacity:1,x:0}}
    viewport={{once:true}}
    className='flex flex-col items-center justify-center 
    container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
      <h1 className='text-2xl sm::text-4xl font-bold mb-2'>About <span 
      className='decoration-1 under font-light'> Our Brand</span></h1>
      <p className='text-gray-500 max-w-80 text-center mb-8'>Driven by Innovation, Committed to Your Home's Future</p>
      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        <img src={assets.logo} alt="" className='w-full sm:w-1/2 max-w-lg'/>
        <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
            <p className='my-10 max-w-lg '>
            Sensomatic Solutions is dedicated to transforming home living with smart, automated sensor
            technology. Our innovative products simplify daily household tasks, making life more
            convenient, efficient, and worry-free. From protecting laundry during unpredictable weather to
            seamlessly integrating with home systems, Sensomatic Solutions brings intelligent solutions for a
            better home experience.</p>
            <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn more</button>
        </div>
      </div>
    </motion.div>
  )
}

export default About
