import React from 'react'
import Charts from '../components/Charts'
import { assets } from "../assets/assest";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { motion } from "motion/react"; //eslint-disable-line

const Courses = () => {
  return (
    <div>
        <div className='flex gap-16 lg:flex-row flex-col'>
        <Charts/>

        <div>
            <h1 className='text-2xl font-bold '>Courses</h1>
           <div className='text-3xl bg-[#A69051] px-10 py-10 rounded-lg shadow-2xl shadow-black mt-10 font-bold'>
            <p>TODAY IS A GOOD DAY, </p>
            <p>To Learn And Invest in Something NEW!</p>
            
           </div>
        </div>
        </div>

        <div>
        <main id="products">
      <div className="our-courses ml-18 mb-8">
        <MdOutlineKeyboardDoubleArrowRight
          className="text-[#59486e] font-bold"
          size={30}
        />
        <span> Products</span>
      </div>
      <div className="flex flex-wrap gap-6">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true,  amount: 0.2 }}
          className="grow basis-[200px] bg-[#A69051] px-5 py-5 rounded-tr-3xl rounded-bl-3xl"
        >
         
            <div>
              <img className="rounded-md" loading="lazy" src={assets.course_1} alt="" />
            </div>

            <div className=" text-white">
              <p className="font-bold text-lg text-center my-3">
                The Ultimate Branding BluePrint (UBB)
              </p>
              <p className="text-[#dad3d3] mb-2">
                Visual Branding, Messaging, and creating brand consistency
              </p>
              <p className="text-lg underline mb-2">Basic</p>

              <div className="flex items-center">
                <img className="mr-4" src={assets.books} alt="" />
                <p className="text-lg">$250 to Earn</p>
              </div>

              <div className="flex items-center mt-1">
                <img className="mr-4" src={assets.books} alt="" />
                <p className="text-lg">$1,500 - $3,500</p>
              </div>
            </div>
          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{once: true, amount: 0.2 }}
          className="grow basis-[200px] bg-[#FCEFCB] px-5 py-5 rounded-tl-3xl rounded-br-3xl"
        >
          
            <img className="rounded-md" loading="lazy" src={assets.course_2} alt="" />
        

          <div>
          
              <p className="font-bold text-lg text-center my-3">
                Affiliate Lab
              </p>
              <p className="text-[#464545] mb-2">
                SEO-Based affiliate sites and flipping them for profit{" "}
              </p>
              <p className="text-lg underline mb-2">Standard</p>

              <div className="flex items-center">
                <img className="mr-4" src={assets.books} alt="" />
                <p className="text-lg">$450 to Earn</p>
              </div>

              <div className="flex items-center mt-1">
                <img className="mr-4" src={assets.books} alt="" />
                <p className="text-lg">$4,500 - $6,500</p>
              </div>
           
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{once: true,  amount: 0.2 }}
          className="grow basis-[200px] bg-[#FCEFCB] px-5 py-5 rounded-tr-3xl rounded-bl-3xl"
        >
    
            <img className="rounded-md" loading="lazy" src={assets.course_3} alt="" />
          

          <div>
         
              <p className="font-bold text-lg text-center my-3">
                HubSpot Academy
              </p>
              <p className="text-[#464545] mb-2">
                Focus: Intro to affiliate marketing and how to get started
              </p>
              <p className="text-lg underline mb-2">Premium</p>

              <div className="flex items-center">
                <img className="mr-4" src={assets.books} alt="" />
                <p className="text-lg">$850 to Earn</p>
              </div>

              <div className="flex items-center mt-1">
                <img className="mr-4" src={assets.books} alt="" />
                <p className="text-lg">$9,500 - $11,500</p>
              </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{once: true,  amount: 0.2 }}
          className="grow basis-[200px] bg-[#A69051] px-5 py-5 rounded-tl-3xl rounded-br-3xl"
        >
          
            <img className="rounded-md" loading="lazy" src={assets.course_4} alt="" />
       

          <div className=" text-white">
           
              <p className="font-bold text-lg text-center my-3">
                Savage Affiliates
              </p>
              <p className="text-[#dbd9d9] mb-2">
                Focus: Funnels, Paid Ads, SEO, email marketing
              </p>
              <p className="text-lg underline mb-2">Legendary</p>

              <div className="flex items-center">
                <img className="mr-4" src={assets.books} alt="" />
                <p className="text-lg">$2000 to Earn</p>
              </div>

              <div className="flex items-center mt-1">
                <img className="mr-4" src={assets.books} alt="" />
                <p className="text-lg">$20,000 - $25,000</p>
              </div>
          </div>
        </motion.div>
      </div>
    </main>
        </div>
        
    </div>
  )
}

export default Courses