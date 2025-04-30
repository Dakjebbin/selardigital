import React from "react";
import { assets } from "../assets/assest";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "motion/react"; //eslint-disable-line

const Products = () => {
  return (
    <main id="products">
      <div className="our-courses ml-18 mb-8">
        <MdOutlineKeyboardDoubleArrowRight
          className="text-[#59486e] font-bold"
          size={30}
        />
        <span> Products</span>
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

              <div className="flex items-center justify-center my-4">
              <Link to="/login" onClick={() => scrollX(0, 0)}>
                <button className="bg-black text-white cursor-pointer px-3 py-2 text-lg rounded-2xl">Purchase</button>
                </Link>
              </div>

              {/* <div className="flex items-center">
               <img className="mr-4" src={assets.books} alt="" /> 
                <p className="text-lg text-center font-bold">$500 - $10,000</p>
              </div> */}

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
       
            <img className="rounded-md" loading="lazy" src={assets.course_2} alt="" />
        

          <div>
         
              <p className="font-bold text-lg text-center my-3">
                Affiliate Lab
              </p>
              <p className="text-[#464545] mb-2">
                SEO-Based affiliate sites and flipping them for profit{" "}
              </p>
              <p className="text-lg underline mb-2">Standard</p>

              
              <div className="flex items-center justify-center my-4">
              <Link to="/login" onClick={() => scrollX(0, 0)}>
                <button className="bg-black text-white cursor-pointer px-3 py-2 text-lg rounded-2xl">Purchase</button>
                </Link>
              </div>
              

              {/* <div className="flex items-center">
                <img className="mr-4" src={assets.books} alt="" />
                <p className="text-lg text-center font-bold">$10,000 - $50,000</p>
              </div>

              <div className="flex items-center mt-1">
               <img className="mr-4" src={assets.books} alt="" />
                <div>
                <p className="text-lg">Min Profit - 10%</p>
                <p className="text-lg">Max Profit - 5000%</p>
                <p className="text-lg">Gift Bonus - $250</p>
                </div>
              </div> */}
           
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{  amount: 0.2 }}
          className="grow basis-[200px] flex flex-col justify-between bg-[#FCEFCB] px-5 py-5 rounded-tr-3xl rounded-bl-3xl"
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

              <div className="flex items-center justify-center my-4">
              <Link to="/login" onClick={() => scrollX(0, 0)}>
                <button className="bg-black text-white cursor-pointer px-3 py-2 text-lg rounded-2xl">Purchase</button>
                </Link>
              </div>

              {/* <div className="flex items-center">
                <img className="mr-4" src={assets.books} alt="" />
                <p className="text-lg text-center font-bold">$50,000 - $500,000</p>
              </div>

              <div className="flex items-center mt-1">
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
     
            <img className="rounded-md" loading="lazy" src={assets.course_4} alt="" />
     

          <div className=" text-white">
   
              <p className="font-bold text-lg text-center my-3">
                Savage Affiliates
              </p>
              <p className="text-[#dbd9d9] mb-2">
                Focus: Funnels, Paid Ads, SEO, email marketing
              </p>
              <p className="text-lg underline mb-2">Legendary</p>

              <div className="flex items-center justify-center my-4">
              <Link to="/login" onClick={() => scrollX(0, 0)}>
                <button className="bg-black text-white cursor-pointer px-3 py-2 text-lg rounded-2xl">Purchase</button>
                </Link>
              </div>
{/* 
              <div className="flex items-center">
                <img className="mr-4" src={assets.books} alt="" />
                <p className="text-lg text-center font-bold">$500,000 - $5,000,000</p>
              </div>

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
  );
};

export default Products;
