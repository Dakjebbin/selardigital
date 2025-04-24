import React from 'react'
import { assets } from '../assets/assest'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-[#A69051]'>
       <div className='flex flex-wrap gap-10 w-[80%] m-auto items-center'>

        <div className='grow basis-[200px]'>
            <div className='w-60 h-40'>
            <img className='w-full h-full object-cover' src={assets.logo} alt="" />
            </div>
            <p className='text-lg text-[#353535]'>SelarDigitalMarketPlace is the best performing global affiliate network in World. Join us to start earning and to expend your business reach and revenue worldwide.</p>
        </div>

        <div className='grow basis-[200px] text-[#353535]'>
            <h2 className='text-2xl text-black mb-2 font-bold'>Services</h2>
            <p>Performance Marketing</p>
            <hr className='mb-2' />

            <p>Affiliate</p>
            <hr className='mb-2'/>

            <p>Merchant</p>
            <hr className='mb-2' />

            <p>About Us</p>
            <hr className='mb-2' />
        </div>

        <div className='grow basis-[200px] text-[#353535]'>
        <h2 className='text-2xl text-black mb-2 font-bold'>Information</h2>
            <p >Blog</p>
            <hr className='mb-2' />

            <p>FAQs</p>
            <hr className='mb-2' />

            <p>Privacy Policy</p>
            <hr className='mb-2' />

            <p>Affiliate Agreement</p>
            <hr className='mb-2' />
        </div>

        <div className='grow basis-[200px] text-[#353535]'>
        <h2 className='text-2xl text-black mb-2 font-bold'>Contact Us</h2>

            <p className='text-yellow-500 font-semibold text-lg'>Address:</p>
            <p>#1446, Green Valley
            Sector 127, Mohali, Punjab, India</p>

            <hr className='mb-2' />

            <p className='text-yellow-500 font-semibold text-lg'>Contact:</p>
            <hr className='mb-2'/>
            <p className='text-yellow-500 font-semibold text-lg'>Email</p>
            <hr className='mb-2'/>
            <div className='mt-5 flex'>
            <FaFacebook size={22} className='mr-4'/>
            <FaInstagramSquare size={22}/>
            </div>
        </div>
        </div>

        <div className='mt-5 bg-[#ceb675] py-5'>
            <section>
            <p>CopyRight 2023 &copy; SELARDIGITALMARKETPLACE | Privacy Policy  </p>
            </section>
        </div>
    </footer>
  )
}

export default Footer