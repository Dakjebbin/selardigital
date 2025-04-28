
import { motion } from "motion/react"; //eslint-disable-line

const Details = () => {
  return (
    <section className='grid lg:grid-cols-[300px_1fr] grid-rows-1 gap-10 '>
        <div className=''>
            <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white mb-5 px-4 py-3 rounded-md">
                <p className='text-[#999797]'>You Can Email Us here</p>
                <a href="mailto:
contact@selardigitalmarketplace.com">
contact@selardigitalmarketplace.com</a>
            </motion.div>


            <motion.div
             initial={{ opacity: 0, y: -40 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, ease: "easeOut" }}
             viewport={{ once: true, amount: 0.2 }}
            className="bg-white mb-5 px-4 py-3 rounded-md">
                <p className='text-[#999797]'>You Can Call Us on</p>
                <a href="tel:+">+1 538-433-4356</a>
            </motion.div>
            
            <motion.div
             initial={{ opacity: 0, y: -30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.9, ease: "easeOut" }}
             viewport={{ once: true, amount: 0.2 }}
            className="bg-white mb-5 px-4 py-3 rounded-md">
                <p className='text-[#999797]'>Location</p>
                <a href="tel:+">United States</a>
            </motion.div>
        </div>

        <div className=' bg-white mb-10 px-9 py-10 rounded-md'>
            <form className=''>
                <motion.div
                 initial={{ opacity: 0, y: -50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, ease: "easeOut" }}
                 viewport={{ once: true, amount: 0.2 }}
                className='flex lg:flex-row flex-col gap-5'>
                    <input className='bg-[#d3cece]  py-3 lg:w-[50%] w-[100%] px-5 rounded-md outline-none' type="text" placeholder='First Name' required/>
                    <input className='bg-[#d3cece]  py-3 lg:w-[50%] w-[100%] px-5 rounded-md outline-none' type="text" placeholder='Last Name' required />
                </motion.div>

                <motion.div
                 initial={{ opacity: 0, y: -40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.9, ease: "easeOut" }}
                 viewport={{ once: true, amount: 0.2 }}
                className='flex  lg:flex-row flex-col  gap-5 mt-4'>
                    <input className='bg-[#d3cece] py-3 lg:w-[50%] w-[100%] px-5 rounded-md outline-none' type="email" placeholder='Email' required />
                    <input className='bg-[#d3cece]  py-3 px-5 lg:w-[50%] w-[100%] rounded-md outline-none' type="number" placeholder='PhoneNumber' required />
                </motion.div>

                <motion.div
                 initial={{ opacity: 0, y: -70 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 1.4, ease: "easeOut" }}
                 viewport={{ once: true, amount: 0.2 }}
                className='mt-10 '>
                <textarea name="" className='border-2 w-[100%] outline-none rounded-md p-2 border-[#928f8f]' cols={30} placeholder='Type Your Message' rows={8} id=""></textarea>
                </motion.div>

                <div className='flex items-center justify-center'>
                <button className='bg-[#A69051] px-3 cursor-pointer text-lg rounded-md mt-5 py-2'>Send</button>
                </div>
            </form>

        </div>
    </section>
  )
}

export default Details