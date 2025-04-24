import React from 'react'
import { assets } from '../assets/assest'
import { Link } from 'react-router-dom'
import { motion } from "motion/react"; //eslint-disable-line

const Login = () => {
  return (
    <section className='w-[95%] m-auto'>
            <div className='grid lg:grid-cols-[420px_1fr] grid-rows-1  gap-10'>
                <div className='bg-[#A69051] px-10 w-full '>
                    <div className='w-20'>
                        <img className='w-full' src={assets.logo} alt="" />
                    </div>

                    <motion.div
                     initial={{ opacity: 0, y: -50 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6, ease: "easeOut" }}
                     viewport={{ once: true, amount: 0.2 }}
                    className='text-white mt-16 lg:text-left text-center'>
                        <p className='text-3xl font-semibold'>Welcome Back!</p>
                        <p className='text-3xl font-semibold'>Let's Grow Together, And Earn Together</p>
                        <p className='mt-7 text-lg text-[#e7e7e7]'>Enjoy every bit of StelarDigitalMartketplace</p>
                    </motion.div>

                    <motion.div 
                     initial={{ opacity: 0, y: 50 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.9, ease: "easeOut" }}
                     viewport={{ once: true, amount: 0.2 }}
                    className='mt-24'>
                        <p className='text-md text-[#ebeaea] mb-2'>
                       <em> "Affiliate marketing has made businesses millions and ordinary people millionaires."</em>
                        </p>

                        <p className='text-md text-white mb-2'>
                        — Bo Bennett
                        </p>
                    </motion.div>
                </div>

                <div className='flex items-center flex-col '>
                    <motion.div
                     initial={{ opacity: 0, x: -50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.6, ease: "easeOut" }}
                     viewport={{ once: true, amount: 0.2 }}
                    
                    className='mt-10'>
                        <p className='text-3xl font-semibold mb-2'>Login to your Account</p>
                        <p className='text-xl'>Don't Have an Account?<Link  onClick={() => scrollX(0,0)} to="/register" className='text-blue-400'> Sign Up</Link></p>
                    </motion.div>

                    <form className='mt-16'>
                        <motion.div
                         initial={{ opacity: 0, y: -50 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.6, ease: "easeOut" }}
                         viewport={{ once: true, amount: 0.2 }}
                        className='flex flex-col'>
                            <label className='text-xl mb-3'>Email </label>
                        <input className='border shadow-md shadow-[#a7a6a6] border-[#aaa9a9] rounded-md px-5 py-3 md:w-96 w-[100%] mb-7 outline-none' type="email" name="" id="" />
                       

                        <label className='text-xl mb-3'> Password  </label>
                        <input className='border shadow-md shadow-[#a7a6a6] border-[#aaa9a9] rounded-md px-5 py-3 md:w-96 w-[100%] mb mb-10 outline-none' type="password" name="" id="" />
                      
                        </motion.div>

                        <div className='flex items-center justify-center'>
                        <button className='bg-[#A69051] hover:bg-[#413923] cursor-pointer px-4 text-lg text-white rounded-xl py-3'>Login</button>
                        </div>
                    </form>

                    <p className='my-3 text-xl'>Forgot Password?</p>
                </div>
            </div>
    </section>
  )
}

export default Login