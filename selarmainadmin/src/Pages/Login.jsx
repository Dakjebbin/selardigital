import React, { useState } from 'react'
import { assets } from '../assets/assest'
import { Link} from 'react-router-dom'
import { motion } from "motion/react"; //eslint-disable-line
import toast from 'react-hot-toast';
import axios from 'axios';
import Footer from '../components/Footer';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [permissionError, setPermissionError] = useState(false);

   const baseUrl = "/api";
     //const baseUrl = "http://localhost:8527"
    axios.defaults.withCredentials = true;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error("Please fill in all fields");
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            toast.error("Invalid email format.");
            return;
        }
        setLoading(true);
        setPermissionError(false);
        try {
            const response = await axios.post(`${baseUrl}/auth/login`, {
                email,
                password,
            }, {
                withCredentials: true,
            })

            if (response.status === 200) {
                toast.success("Login Successfully");
                setEmail('');
                 setPassword('');
                window.location.assign("/dashboard");
            } else {
                toast.error("Login Failed");
            }
        } catch (error) {
            if (error.response) {
                if (error.response.status === 404) {
                    toast.error('Email or Password is incorrect'); // Invalid credentials
                  } else if (error.response.status === 409) {
                    toast.error('Incorrect credentials or account issues'); // Conflict error (e.g., email already taken)
                  } else if (error.response.status === 403) {
                    setPermissionError(true);
                  } else {
                    toast.error('An error occurred. Please try again later.'); // Generic error
                  }
                } else if (error.request) {
                  toast.error('No response from server. Please check your internet connection.');
                } else {
                  toast.error('An unexpected error occurred.');
                }
        } finally{
            setLoading(false);
        }
        
    }
  return (
    <div className=''>
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
                        <p className='text-3xl font-semibold'>Welcome Back! ADMIN</p>
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
                        <p className='text-3xl font-semibold mb-2'>Login to your Account ADMIN</p>
                       
                    </motion.div>

                    <form onSubmit={handleSubmit} className='mt-16'>
                        <motion.div
                         initial={{ opacity: 0, y: -50 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.6, ease: "easeOut" }}
                         viewport={{ once: true, amount: 0.2 }}
                        className='flex flex-col'>
                            <label className='text-xl mb-3'>Email </label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} className='border shadow-md shadow-[#a7a6a6] border-[#aaa9a9] rounded-md px-5 py-3 md:w-96 w-[100%] mb-7 outline-none' type="email" name="" id="email" />
                       

                        <label className='text-xl mb-3'> Password  </label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} className='border shadow-md shadow-[#a7a6a6] border-[#aaa9a9] rounded-md px-5 py-3 md:w-96 w-[100%] mb mb-10 outline-none' type="password" name="" id="password" />
                      
                        </motion.div>

                        <div className='flex items-center justify-center'>
                        <button type='submit' className='bg-[#A69051] hover:bg-[#413923] cursor-pointer px-4 text-lg text-white rounded-xl py-3'>{loading ? "Loading": "Login"}</button>
                        </div>
                    </form>

                    {permissionError && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#ffffff48] bg-opacity-50 z-50">
          <div className="bg-[#d6d4d4] p-6 rounded-lg w-80 max-w-full">
            <h2 className="text-xl font-bold text-center text-red-500">Access Denied</h2>
            <div className="mt-4 flex justify-center">
              <button 
                onClick={() => setPermissionError(false)} 
                className="bg-[#FE0000] text-white px-6 py-2 rounded-lg hover:bg-[#b44747]">
                Close
              </button>
            </div>
          </div>
        </div>
      )}


                    <Link to="/forgotPassword">
                    <p className='my-3 text-xl'>Forgot Password?</p>
                    </Link>
                </div>
            </div>
            <Footer/>
    </div>
  )
}

export default Login