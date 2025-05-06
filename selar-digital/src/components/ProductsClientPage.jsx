import React from 'react'
import { assets } from '../assets/assest'
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import { motion } from "motion/react"; //eslint-disable-line

const ProductsClientPage = () => {
  return (
    <div><main id="products">
    <div className="our-courses ml-18 mb-8">
      <MdOutlineKeyboardDoubleArrowRight
        className="text-[#59486e] font-bold"
        size={30}
      />
      <span> AI EMPLOYEE</span>
    </div>
    <section className="flex flex-wrap gap-6 m-auto w-[90%]">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{  amount: 0.2 }}
        className="grow basis-[200px] flex flex-col justify-between bg-[#A69051] px-5 py-5 rounded-tr-3xl rounded-bl-3xl"
      >
        
          <div>
            <img className="rounded-md" loading="lazy" src={assets.grok} alt="" />
          </div>

          <div className=" text-white">
            <p className="font-bold text-lg text-center my-3">
              The Grok AI
            </p>
           

         <div className="flex items-center">
             <img className="mr-4" src={assets.books} alt="" /> 
              <p className="text-lg text-center font-bold">$3,000</p>
            </div> 

            {/* <div className="flex items-center mt-1">
              <img className="mr-4" src={assets.books} alt="" />
              <div>
              <p className="text-lg">Min Profit - 5%</p>
              <p className="text-lg">Max Profit - 5000%</p>
              <p className="text-lg">Gift Bonus - $100</p>
              </div>
            </div> */}
          </div>
      
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0.2 }}
        className="grow basis-[200px] flex flex-col justify-between bg-[#FCEFCB] px-5 py-5 rounded-tl-3xl rounded-br-3xl"
      >
     
          <img className="rounded-md" loading="lazy" src={assets.convo} alt="" />
      

        <div>
       
            <p className="font-bold text-lg text-center my-3">
              ConvoGPT
            </p>
           
            

          <div className="flex items-center">
              <img className="mr-4" src={assets.books} alt="" />
              <p className="text-lg text-center font-bold">$1800</p>
            </div>
{/* 
            <div className="flex items-center mt-1">
             <img className="mr-4" src={assets.books} alt="" />
              <div>
              <p className="text-lg">Min Profit - 10%</p>
              <p className="text-lg">Max Profit - 5000%</p>
              <p className="text-lg">Gift Bonus - $250</p>
              </div>
            </div>  */}
         
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{  amount: 0.2 }}
        className="grow basis-[200px] flex flex-col justify-between bg-[#FCEFCB] px-5 py-5 rounded-tr-3xl rounded-bl-3xl"
      >
       
          <img className="rounded-md" loading="lazy" src={assets.socialflow} alt="" />
       

        <div>
       
            <p className="font-bold text-lg text-center my-3">
              Social flow
            </p>
         

            <div className="flex items-center">
              <img className="mr-4" src={assets.books} alt="" />
              <p className="text-lg text-center font-bold">$2,000</p>
            </div>

            {/* <div className="flex items-center mt-1">
               <img className="mr-4" src={assets.books} alt="" />
              <div>
              <p className="text-lg">Min Profit - 15%</p>
              <p className="text-lg">Max Profit - 5000%</p>
              <p className="text-lg">Gift Bonus - $1,000</p>
              </div>
            </div> */}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{  amount: 0.2 }}
        className="grow flex flex-col justify-between basis-[200px] bg-[#A69051] px-5 py-5 rounded-tl-3xl rounded-br-3xl"
      >
   
          <img className="rounded-md" loading="lazy" src={assets.icp} alt="" />
   

        <div className=" text-white">
 
            <p className="font-bold text-lg text-center my-3">
                THE ICP BOT
            </p>
           


            <div className="flex items-center">
              <img className="mr-4" src={assets.books} alt="" />
              <p className="text-lg text-center font-bold">$1900</p>
            </div>
{/* 
            <div className="flex items-center mt-1">
               <img className="mr-4" src={assets.books} alt="" /> 
              <div>
              <p className="text-lg">Min Profit - 20%</p>
              <p className="text-lg">Max Profit - 5000%</p>
              <p className="text-lg">Gift Bonus - $5,000</p>
              </div>
            </div> */}
      
        </div>
      </motion.div>
    </section>
  </main>
  <p className='my-3'><em>Visit Courses Page to Purhase a Product</em></p>

  <div>
  <div className="our-courses ml-18 mb-8">
      <MdOutlineKeyboardDoubleArrowRight
        className="text-[#59486e] font-bold"
        size={30}
      />
      <span> Sales Optimizer</span>
    </div>

        <div>
            <img src={assets.ai_bot} alt="" />

            <p className='bg-[#FCEFCB] inline-block text-xl font-semibold px-3 py-2 rounded-xl mb-3'>Sales Optimizer Bot</p>
            <p>Boost your sales Capacity with our optimized AI Bot</p>
        </div>
  </div>
  </div>
  )
}

export default ProductsClientPage