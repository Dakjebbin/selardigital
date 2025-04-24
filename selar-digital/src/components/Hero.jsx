import React from 'react'
import { assets } from '../assets/assest'

const Hero = () => {
  return (
    <main className='mb-20'>
        <section className='flex flex-col items-center justify-center mt-10'>
            <h1 className='md:text-6xl text-3xl sm:text-4xl font-bold text-center '>
            Explore the Possibilities <br />of Marketing with SelarDigitalMarketPlace
            </h1>
            <div className='md:w-[40rem] mt-2'>
            <img src={assets.line} alt="line" />
            </div>

            <p className='text-center mt-10 md:text-xl text-lg font-semibold'>
            Your premier destination for unlocking the full potential of affiliate marketing in World. We are thrilled to embark on this journey with you, where innovation meets opportunity and where partnerships flourish to drive unprecedented growth.
            </p>

            <button className='my-10 bg-gradient-to-br from-[#23325A] to-[#967bb6] text-white px-4 py-3 text-xl rounded-xl font-semibold'>
              Register Now And Start Earning
            </button>
        </section>

        <section className='w-[90%] m-auto mt-10'>
          <div className='h-96 w-full'>
        <img className='h-full rounded-2xl w-full object-cover' src={assets.background} alt="background" />
        </div>
        </section>

        <section className='mt-16'>
          
          <h2 className='sora text-center md:text-5xl text-[25px]'>
          Grow Faster, Not Harder <br /> and  scale bigger with <br /> SelarDigitalMarketPlace
          </h2>
        </section>
    </main>
  )
}

export default Hero