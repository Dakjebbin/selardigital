import React from 'react'
import { assets } from '../assets/assest'
import { IoTime } from "react-icons/io5";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { motion } from "motion/react"; //eslint-disable-line


const ContactHero = () => {
  return (
    <section className='bg-white rounded-2xl m-auto w-[95%]  pb-10 mt-10 mb-10 '>
        
        <motion.div
        initial={{ opacity: 0, y: -80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className='flex flex-col justify-center  items-center'>
        <div className='w-24'>
            <img className='w-full' src={assets.logo} alt="" />
        </div>

        <h2 className='text-xl md:text-3xl font-semibold my-2'>
            We'd Love to hear from You. 
        </h2>

        <p className='text-[#636161] md:text-lg text-sm'>Here's What Some of our satisfied clients have to say</p>

        <div className='flex gap-5 lg:flex-row flex-col  items-center mt-4'>
            <div className='flex items-center border-2 rounded-md border-[#a1a1a1] px-3 py-1'>
            <IoTime className='text-[#A69051] mr-1' />
            <p>24/7 Customer Services</p>
            </div>

            <div className='flex items-center border-2 rounded-md border-[#a1a1a1] px-3 py-1'>
            <BsFillLightningChargeFill  className='text-[#A69051] mr-1' />
            <p>Fast Customer Service Response</p>
            </div>

            <div className='flex items-center border-2 rounded-md border-[#a1a1a1] px-3 py-1'>
            <FaStar  className='text-[#A69051] mr-1'  />
                <p>Flexible and accessible customer Services</p>
            </div>
        </div>
        </motion.div>
      
    </section>
  )
}

export default ContactHero