import React, { useState } from 'react';
import Charts from '../components/Charts';
import { assets } from "../assets/assest";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { motion } from "motion/react";
import { useAuthContext } from '../context/auth-context';
import toast from 'react-hot-toast';
import axios from 'axios';

const Courses = () => {
  const { userData } = useAuthContext();

  const [permissionError, setPermissionError] = useState(false);
  const [inputAmountModal, setInputAmountModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [inputAmount, setInputAmount] = useState('');

  const courses = [
    {
      title: "The Ultimate Branding BluePrint (UBB)",
      description: "Visual Branding, Messaging, and creating brand consistency",
      range: "$500 - $10,000",
      bonus: "$250",
      courseType: "UBB",
      priceRange: [500, 10000],
      bg: "bg-[#A69051]",
      asset: assets.course_1,
      label: "Basic"
    },
    {
      title: "Affiliate Lab",
      description: "SEO-Based affiliate sites and flipping them for profit",
      range: "$10,000 - $50,000",
      bonus: "$500",
      courseType: "Amazon",
      priceRange: [10000, 50000],
      bg: "bg-[#FCEFCB]",
      asset: assets.course_2,
      label: "Standard"
    },
    {
      title: "HubSpot Academy",
      description: "Intro to affiliate marketing and how to get started",
      range: "$50,000 - $500,000",
      bonus: "$1,000",
      courseType: "Alibaba",
      priceRange: [50000, 500000],
      bg: "bg-[#FCEFCB]",
      asset: assets.course_3,
      label: "Premium"
    },
    {
      title: "Savage Affiliates",
      description: "Funnels, Paid Ads, SEO, email marketing",
      range: "$500,000 - $5,000,000",
      bonus: "$5,000",
      courseType: "Enterprise",
      priceRange: [500000, 5000000],
      bg: "bg-[#A69051]",
      asset: assets.course_4,
      label: "Legendary"
    }
  ];
  
  const baseUrl = "/api";
  axios.defaults.withCredentials = true;

  const handleBuyNow = (course) => {
    setSelectedCourse(course);
    setInputAmountModal(true);
  };

  const handleNext = () => {
    const amount = parseFloat(inputAmount);
    if (isNaN(amount) || amount <= 0) {
      toast.error('Please enter a valid amount');
      return;
    }

    const [min, max] = selectedCourse.priceRange;
    if (amount < min || amount > max) {
      toast.error(`Amount must be between $${min} and $${max} for this course.`);
      return;
    }
    setInputAmountModal(false);
    setPermissionError(true)
  
  };

  const handlePurchase = async () => {
    setPermissionError(false);



    try {
   
      const response = await axios.post(`${baseUrl}/userFund/purchase`,{
        amount: parseFloat(inputAmount),
        courseType: selectedCourse.courseType,
      },{
        withCredentials: true,
      })

      if (response.status === 200) {
        toast.success("Purchase successful");
        // setInputAmount('');
      } else {
        toast.error("An error Occured"); 
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
            toast.error(error.response); 
          } else if (error.response.status === 401) {
            toast.error(error.response); 
          } else if (error.response.status === 400) { 
             toast.error(error.response);
          }else {
            toast.error('An error occurred. Please try again later.'); 
          }
        } else if (error.request) {
          toast.error('No response from server. Please check your internet connection.');
        } else {
          toast.error('An unexpected error occurred.');
        }
    }
  };

  return (
    <div>
      {userData && (
        <>
          <div className="text-right text-xl my-3 font-semibold">
            <p>Welcome <span className="text-[#8b7a1a]">Back</span> {userData.username}</p>
          </div>

          <div className='flex gap-16 lg:flex-row flex-col'>
            <Charts />

            <div>
              <h1 className='text-2xl font-bold '>Courses</h1>
              <div className='text-3xl bg-[#A69051] px-10 py-10 rounded-lg shadow-2xl shadow-black mt-10 font-bold'>
                <p>TODAY IS A GOOD DAY, </p>
                <p>To Learn And Invest in Something NEW!</p>
              </div>
            </div>
          </div>

          <main id="products">
            <div className="our-courses ml-18 mb-8">
              <MdOutlineKeyboardDoubleArrowRight
                className="text-[#59486e] font-bold"
                size={30}
              />
              <span> Products</span>
            </div>

            <div className="flex flex-wrap gap-6">
              {courses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 + index * 0.2, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.2 }}
                  className={`grow basis-[200px] ${course.bg} px-5 py-5 rounded-3xl`}
                >
                  <img className="rounded-md" loading="lazy" src={course.asset} alt="" />

                  <div className={`text-${course.bg === 'bg-[#FCEFCB]' ? 'black' : 'white'}`}>
                    <p className="font-bold text-lg text-center my-3">{course.title}</p>
                    <p className="mb-2">{course.description}</p>
                    <p className="text-lg underline mb-2">{course.label}</p>
                    <div className="flex items-center">
                      <img className="mr-4" src={assets.books} alt="" />
                      <p className="text-lg font-bold">{course.range}</p>
                    </div>
                    <div className="mt-1">
                      <p className="text-lg">Min Profit - 20%</p>
                      <p className="text-lg">Max Profit - 5000%</p>
                      <p className="text-lg">Gift Bonus - {course.bonus}</p>
                    </div>
                    <div
                      onClick={() => handleBuyNow(course)}
                      className='mt-5 flex items-center justify-center bg-black rounded-2xl py-2 cursor-pointer'
                    >
                      <button className='cursor-pointer text-white'>Buy Now</button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Amount Input Modal */}
            {inputAmountModal && selectedCourse && (
              <div className="fixed inset-0 flex items-center justify-center bg-[#00000060] z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-xl font-bold text-center mb-4">Enter Amount for {selectedCourse.title}</h2>
                  <input
                    type="number"
                    value={inputAmount}
                    onChange={(e) => setInputAmount(e.target.value)}
                    placeholder={`Enter amount between ${selectedCourse.priceRange[0]} - ${selectedCourse.priceRange[1]}`}
                    className='border-2 px-4 py-2 rounded-md w-full border-black mb-4'
                  />
                  <div className="flex justify-center">
                    <button
                      onClick={handleNext}
                      className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Confirmation Modal */}
            {permissionError && selectedCourse && (
              <div className="fixed inset-0 flex items-center justify-center bg-[#00000060] z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-xl font-bold text-center mb-4">
                    Are you sure you want to purchase {selectedCourse.title} for ${inputAmount}?
                  </h2>
                  <div className="flex justify-between mt-4">
                    <button
                      onClick={() => setPermissionError(false)}
                      className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700"
                    >
                      No
                    </button>
                    <button
                      onClick={handlePurchase}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                    >
                      Yes, Buy Now
                    </button>
                  </div>
                </div>
              </div>
            )}
          </main>
        </>
      )}
    </div>
  );
};

export default Courses;
