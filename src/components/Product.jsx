import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

function Product() {
  return (
    <motion.div 
    initial={{opacity:0, x:200}}
    transition={{duration:1}}
    whileInView={{opacity:1,x:0}}
    viewport={{once:true}}
    className='flex flex-col items-center justify-center 
    container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
      <h1 className='text-2xl sm::text-4xl font-bold mb-2'>Sensomatic <span 
      className=' decoration-1 under font-light'>Smart Dry</span></h1>
      <p className='text-gray-500 max-w-80 text-center mb-8'>Weather-Responsive Laundry, Effortless Care</p>
      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        <img src={assets.brand_img1} alt="" className='w-full sm:w-1/2 max-w-lg'/>
        <div className='flex flex-col items-center md:items-start mt-1 text-gray-600 '>
            <p className='my-1 max-w-lg mb-5'>
            Sensomatic Smart Dry is an innovative, weather-responsive laundry solution that automatically
protects your clothes from rain and optimizes drying in sunlight. With intelligent sensors, Smart
Dry retracts and extends your clothesline based on real-time weather changes, making laundry
care easier and more efficient.</p>
            <p className='max-w-lg'><strong class="bold-text">• Automatic Weather Detection:</strong> Smart Dry’s sensors detect rain and sunlight in realtime, automatically retracting your clothesline when rain begins and extending it when
the sun returns. No more rushing to bring in clothes during sudden showers!
</p>
            <p className='my-1 max-w-lg'>
            <strong class="bold-text">• Seamless Installation:</strong> Our compact, weather-resistant sensor easily attaches to most
commercial clotheslines and racks, integrating smoothly into your home setup.
            </p>
            <p className='my-1 max-w-lg'>
            <strong class="bold-text">• Eco-Friendly Design: </strong>
             With solar-powered operation, Smart Dry uses renewable energy
for minimal impact on the environment, while saving you time and effort.
            </p>
            <p className='my-1 max-w-lg'>
            <strong class="bold-text">• Enhanced Convenience: </strong>
             Simplify your daily routine by trusting Smart Dry to manage
your laundry exposure—perfect for busy schedules and unpredictable weather.
            </p>
            <button className='bg-blue-600 text-white px-8 py-2 rounded mt-5'>Order Now</button>
        </div>
      </div>
    </motion.div>
  )
}

export default Product
