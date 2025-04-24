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
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="grow basis-[200px] bg-[#23325a] px-5 py-5 rounded-tr-3xl rounded-bl-3xl"
        >
          <Link to="/login"  onClick={() => scrollX(0,0)}>
            <div>
              <img className="rounded-md" src={assets.course_1} alt="" />
            </div>

            <div className=" text-white">
              <p className="font-bold text-lg text-center my-3">
                The Ultimate Branding BluePrint (UBB)
              </p>
              <p className="text-[#dbd9d9] mb-2">
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
          </Link>
        </motion.div>

        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
          
          className="grow basis-[200px] bg-[#d9bad7] px-5 py-5 rounded-tl-3xl rounded-br-3xl"
        >
          <Link to="/login"
          onClick={() => scrollX(0, 0)}>
            <img className="rounded-md" src={assets.course_2} alt="" />
          </Link>

          <div>
            <Link to="/login"  onClick={() => scrollX(0, 0)}>
            <p className="font-bold text-lg text-center my-3">Affiliate Lab</p>
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
            </Link>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, ease: "easeOut" }}
           viewport={{ once: true, amount: 0.2 }}
          className="grow basis-[200px] bg-[#967bb6] px-5 py-5 rounded-tr-3xl rounded-bl-3xl"
        >
          <Link to="/login"
          onClick={() => scrollX(0, 0)}>
            <img className="rounded-md" src={assets.course_3} alt="" />
          </Link>

          <div>
            <Link to="/login"
          onClick={() => scrollX(0, 0)}>
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
            </Link>
          </div>
        </motion.div>

        <motion.div

initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, ease: "easeOut" }}
viewport={{ once: true, amount: 0.2 }}
          
          className="grow basis-[200px] bg-[#23325a] px-5 py-5 rounded-tl-3xl rounded-br-3xl"
        >
          <Link to="/login"
          onClick={() => scrollX(0, 0)}>
            <img className="rounded-md" src={assets.course_4} alt="" />
          </Link>

          <div className=" text-white">
            <Link to="/login"
          onClick={() => scrollX(0, 0)}>
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
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Products;
