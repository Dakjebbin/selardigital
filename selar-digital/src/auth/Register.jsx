import React from 'react'
import { assets } from '../assets/assest'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <section className='w-[95%] m-auto'>
            <div className='grid lg:grid-cols-[420px_1fr] grid-rows-1 gap-10'>
                <div className='bg-[#967bb6] px-10 '>
                    <div className='w-20'>
                        <img className='w-full' src={assets.logo} alt="" />
                    </div>

                    <div className='text-white mt-16'>
                        <p className='text-3xl font-semibold mb-2'>Welcome!</p>
                        <p className='text-2xl font-semibold'>Register Now!!! Let's Grow Together, And Earn Together</p>
                        <p className='mt-7 text-lg text-[#e7e7e7]'>Enjoy every bit of StelarDigitalMartketplace</p>
                    </div>

                    <div className='mt-24'>
                        <p className='text-md text-[#ebeaea] mb-2'>
                       <em> "Affiliate marketing has made businesses millions and ordinary people millionaires."</em>
                        </p>

                        <p className='text-md text-white mb-2'>
                        — Bo Bennett
                        </p>
                    </div>
                </div>

                <div className='flex items-center flex-col '>
                    <div className='mt-10'>
                        <p className='text-3xl font-semibold mb-2'>Create an Account</p>
                        <p className='text-xl'>Already Have an Account? <Link  onClick={() => scrollX(0,0)} to="/login" className='text-blue-400'>Sign In</Link></p>
                    </div>

                    <form className='mt-16'>
                        <div className='flex flex-col'>

                        <label className='text-lg mb-1'>Full Name </label>
                        <input className='border shadow-md shadow-[#a7a6a6] border-[#aaa9a9] rounded-md px-5 py-3 md:w-96 w-[100%]  mb-3 outline-none' type="text" required name="" id="" />

                        <label className='text-lg mb-1'>Username </label>
                        <input className='border shadow-md shadow-[#a7a6a6] border-[#aaa9a9] rounded-md px-5 py-3 md:w-96 w-[100%]  mb-3 outline-none' type="text" required name="" id="" />

                            <label className='text-lg mb-1'>Email </label>
                        <input className='border shadow-md shadow-[#a7a6a6] border-[#aaa9a9] rounded-md px-5 py-3 md:w-96 w-[100%]  mb-3 outline-none' type="email" required name="" id="" />

                        <label className='text-lg mb-1'>PhoneNumber </label>
                        <input className='border shadow-md shadow-[#a7a6a6] border-[#aaa9a9] rounded-md px-5 py-3 md:w-96 w-[100%]  mb-3 outline-none' type="number" required name="" id="" />
                       

                        <label className='text-lg mb-1'> Password  </label>
                        <input className='border shadow-md shadow-[#a7a6a6] border-[#aaa9a9] rounded-md px-5 py-3 md:w-96 w-[100%]  mb-3 outline-none' type="password" name="" id="" />
                      
                        </div>

                        <div className='flex items-center'>
                    <input type="checkbox" required name="" id="" />
                    <p className='my-3 ml-2 sm:text-lg text-base'>I have Agreed to the Terms & Conditions</p>
                    </div>

                        <div className='flex items-center mb-5 justify-center'>
                        <button className='bg-[#776192] hover:bg-[#524266] cursor-pointer px-4 text-lg text-white rounded-xl py-3'>Create</button>
                        </div>
                    </form>
                    
                </div>
            </div>
    </section>
  )
}

export default Register