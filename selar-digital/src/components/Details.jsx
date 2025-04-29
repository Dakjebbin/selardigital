
import { motion } from "motion/react"; //eslint-disable-line
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Details = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
            publicKey: import.meta.env.VITE_PUBLIC_KEY,
          })
          .then(
            () => {
              toast.success('Email Sent Successfully!');
                e.target.reset();
            },
            (error) => {
              toast.error('FAILED...', error.text);
            },
          );
      };
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
            <form onSubmit={sendEmail} ref={form} className=''>
                <motion.div
                 initial={{ opacity: 0, y: -50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, ease: "easeOut" }}
                 viewport={{ once: true, amount: 0.2 }}
                className='flex lg:flex-row flex-col gap-5'>
                    <input className='bg-[#d3cece]  py-3 lg:w-[50%] w-[100%] px-5 rounded-md outline-none' type="text" placeholder='First Name' name="from_name" required/>
                    <input className='bg-[#d3cece]  py-3 lg:w-[50%] w-[100%] px-5 rounded-md outline-none' type="text" placeholder='Last Name' name="from_name" required />
                </motion.div>

                <motion.div
                 initial={{ opacity: 0, y: -40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.9, ease: "easeOut" }}
                 viewport={{ once: true, amount: 0.2 }}
                className='flex  lg:flex-row flex-col  gap-5 mt-4'>
                    <input className='bg-[#d3cece] py-3 lg:w-[50%] w-[100%] px-5 rounded-md outline-none' type="email" name="from_email" placeholder='Email' required />
                    <input className='bg-[#d3cece]  py-3 px-5 lg:w-[50%] w-[100%] rounded-md outline-none' type="number" name="from_phonenumber" placeholder='PhoneNumber' required />
                </motion.div>

                <motion.div
                 initial={{ opacity: 0, y: -70 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 1.4, ease: "easeOut" }}
                 viewport={{ once: true, amount: 0.2 }}
                className='mt-10 '>
                <textarea className='border-2 w-[100%] outline-none rounded-md p-2 border-[#928f8f]' cols={30} name="message" placeholder='Type Your Message' rows={8} id=""></textarea>
                </motion.div>

                <div className='flex items-center justify-center'>
                <button type="submit" value="Send" className='bg-[#A69051] px-3 cursor-pointer text-lg rounded-md mt-5 py-2'>Send</button>
                </div>
            </form>

        </div>
    </section>
  )
}

export default Details