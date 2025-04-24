import React from 'react'

const Details = () => {
  return (
    <section className='grid lg:grid-cols-[300px_1fr] grid-rows-1 gap-10 '>
        <div className=''>
            <div className="bg-white mb-5 px-4 py-3 rounded-md">
                <p className='text-[#999797]'>You Can Email Us here</p>
                <a href="mailto:contact@SelarDigitalMarketPlace">contact@SelarDigitalMarketPlace</a>
            </div>


            <div className="bg-white mb-5 px-4 py-3 rounded-md">
                <p className='text-[#999797]'>You Can Call Us on</p>
                <a href="tel:+">+1 538-433-4356</a>
            </div>
            
            <div className="bg-white mb-5 px-4 py-3 rounded-md">
                <p className='text-[#999797]'>Location</p>
                <a href="tel:+">United States</a>
            </div>
        </div>

        <div className=' bg-white mb-10 px-9 py-10 rounded-md'>
            <form className=''>
                <div className='flex lg:flex-row flex-col gap-5'>
                    <input className='bg-[#d3cece]  py-3 lg:w-[50%] w-[100%] px-5 rounded-md outline-none' type="text" placeholder='First Name' required/>
                    <input className='bg-[#d3cece]  py-3 lg:w-[50%] w-[100%] px-5 rounded-md outline-none' type="text" placeholder='Last Name' required />
                </div>

                <div className='flex  lg:flex-row flex-col  gap-5 mt-4'>
                    <input className='bg-[#d3cece] py-3 lg:w-[50%] w-[100%] px-5 rounded-md outline-none' type="email" placeholder='Email' required />
                    <input className='bg-[#d3cece]  py-3 px-5 lg:w-[50%] w-[100%] rounded-md outline-none' type="number" placeholder='PhoneNumber' required />
                </div>

                <div className='mt-10 '>
                <textarea name="" className='border-2 w-[100%] outline-none rounded-md p-2 border-[#928f8f]' cols={30} placeholder='Type Your Message' rows={8} id=""></textarea>
                </div>

                <div className='flex items-center justify-center'>
                <button className='bg-[#967bb6] px-3 cursor-pointer text-lg rounded-md mt-5 py-2'>Send</button>
                </div>
            </form>

        </div>
    </section>
  )
}

export default Details