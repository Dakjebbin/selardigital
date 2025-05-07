import React, { useState } from 'react'
import { assets } from '../assets/assest'
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import { motion } from "motion/react"; //eslint-disable-line
import { FaExternalLinkAlt, FaWindowClose } from "react-icons/fa";
import axios from 'axios';
import toast from "react-hot-toast";

const ProductsClientPage = () => {
  const [depositModal, setDepositModal] = useState(false);
  const [amount, setAmount] = useState(0);

//const baseUrl = "http://localhost:8527";
axios.defaults.withCredentials = true;
const baseUrl = "/api";

  const handlePurchase = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${baseUrl}/sales/SalesOptimizer`,{
        amount
      }, {
        withCredentials: true,
      })

      if (response.data.success) {
        toast.success("Sales Optimizer Purchase Successful");
        setDepositModal(false);
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);  
    } else if (error.request) {
        toast.error("No response from server. Please check your network and try again.");
    } else {
        toast.error("An error occurred. Please try again later.");
    }
    }
  }

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
              <p className="text-lg text-center font-bold">$300</p>
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
              <p className="text-lg text-center font-bold">$500</p>
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
              <p className="text-lg text-center font-bold">$800</p>
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
              <p className="text-lg text-center font-bold">$1000</p>
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

        <div >
          <div onClick={() => setDepositModal(true)}>
            <img src={assets.ai_bot} alt="" />

            <p className='bg-[#FCEFCB] flex items-center text-xl font-semibold px-3 py-2 rounded-xl mb-3'>Sales Optimizer Bot <FaExternalLinkAlt size={15} className='ml-3' /></p>
            </div>
            <p>Boost your sales Capacity with our optimized AI Bot</p>
        </div>
  </div>
  
     { depositModal && (
       <div className="fixed inset-0 flex items-center justify-center bg-[#00000060] z-50">
                <div className="bg-white rounded-xl shadow-lg">
                  <div className="bg-[#998516] flex items-center justify-between p-4 rounded-t-lg">
                    <p className="font-semibold text-lg">Purchase Sales Optimizer Bot</p>
                    <div onClick={() => setDepositModal(false)}><FaWindowClose size={20} /></div>
                  </div>
                 
                  <div className="mt-4 p-4">
                  
                   <form onSubmit={handlePurchase}>
                    <div className="flex flex-col mb-3">
                      <label>Enter Amount ($)</label>
                      <input placeholder="$" value={amount} onChange={(e) => setAmount(e.target.value)} className="border-2 px-2 w-96  py-1 rounded-md mt-2 border-gray-400" type="number" />
                    </div>

                    <button type="submit" className="bg-[#998516] my-3 p-2 font-semibold rounded-2xl">Proceed to Payment</button>
                   </form>
                  </div>
                </div>
              </div>
            )} 
  </div>
  )
}

export default ProductsClientPage