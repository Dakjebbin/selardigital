import React, { useState } from "react";
import { assets } from "../assets/assest";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react"; //eslint-disable-line
import axios from "axios";
import toast from "react-hot-toast";
import eye from "../assets/eye.svg";
import eyeOff from "../assets/eye-off.svg";

const Register = () => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const baseUrl = "/api";
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullname || !username || !email || !phonenumber || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Invalid email format.");
      return;
    }

    setLoading(true);

    // Perform registration logic here
    try {
      const response = await axios.post(`${baseUrl}/auth/register`, {
        fullname,
        username,
        email,
        phonenumber,
        password,
      });

      if (response.status === 201) {
        toast.success("Registered Successfully");
        // if (typeof window.$smartsupp === "function") {
        //   window.$smartsupp('user', {
        //     name: fullname,
        //     email: email,
        //   });
  
        //   window.$smartsupp('variables', {
        //     signedUp: 'true',
        //     username: username,
        //     phone: phonenumber,
        //   });
        // }else{
        //   console.warn("Smartsupp is not available or not a function");
        // }
      } else {
        toast.error("Registration Failed");
        
      }
      setFullname("");
      setUsername("");
      setEmail("");
      setPhoneNumber("");
      setPassword("");

      navigate("/login");
    } catch ( error) {
      if (error.response) {
        const status = error.response.status;
        const message = error.response.data?.message || 'An error occurred';
      
        if (status === 404) {
          toast.error(message)
        } else if (status === 409) {
          toast.error(message);
        } else if (status === 403) {
          toast.error('Access denied. Please contact admin.');
        } else {
          toast.error(message);
        }
      } else if (error.request) {
        toast.error('No response from server. Please check your internet connection.');
      } else {
        toast.error('An unexpected error occurred.');
      }
     
      
    } finally {
      setLoading(false);
    }
  };

  

  return (
    <section className="w-[95%] m-auto">
      <div className="grid lg:grid-cols-[420px_1fr] grid-rows-1 gap-10">
        <div className="bg-[#A69051] px-10 ">
          <div className="w-20">
            <img className="w-full" src={assets.logo} alt="" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-white mt-16"
          >
            <p className="text-3xl font-semibold mb-2">Welcome!</p>
            <p className="text-2xl font-semibold">
              Register Now!!! Let's Grow Together, And Earn Together
            </p>
            <p className="mt-7 text-lg text-[#e7e7e7]">
              Enjoy every bit of StelarDigitalMartketplace
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="mt-24"
          >
            <p className="text-md text-[#ebeaea] mb-2">
              <em>
                {" "}
                "Affiliate marketing has made businesses millions and ordinary
                people millionaires."
              </em>
            </p>

            <p className="text-md text-white mb-2">— Bo Bennett</p>
          </motion.div>
        </div>

        <div className="flex items-center flex-col ">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="mt-10"
          >
            <p className="text-3xl font-semibold mb-2">Create an Account</p>
            <p className="text-xl">
              Already Have an Account?{" "}
              <Link
                onClick={() => scrollX(0, 0)}
                to="/login"
                className="text-blue-400"
              >
                Sign In
              </Link>
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="mt-16">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col"
            >
              <label className="text-lg mb-1">Full Name </label>
              <input
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                className="border shadow-md shadow-[#a7a6a6] border-[#aaa9a9] rounded-md px-5 py-3 md:w-96 w-[100%]  mb-3 outline-none"
                type="text"
                required
                name=""
                id="fullname"
              />

              <label className="text-lg mb-1">Username </label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border shadow-md shadow-[#a7a6a6] border-[#aaa9a9] rounded-md px-5 py-3 md:w-96 w-[100%]  mb-3 outline-none"
                type="text"
                required
                name=""
                id="username"
              />

              <label className="text-lg mb-1">Email </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border shadow-md shadow-[#a7a6a6] border-[#aaa9a9] rounded-md px-5 py-3 md:w-96 w-[100%]  mb-3 outline-none"
                type="email"
                required
                name=""
                id="email"
              />

              <label className="text-lg mb-1">PhoneNumber </label>
              <input
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phonenumber}
                className="border shadow-md shadow-[#a7a6a6] border-[#aaa9a9] rounded-md px-5 py-3 md:w-96 w-[100%]  mb-3 outline-none"
                type="number"
                required
                name=""
                id="phonenumber"
              />

              <label className="text-lg mb-1"> Password </label>


              <div className='flex items-center justify-between border shadow-md shadow-[#a7a6a6] border-[#aaa9a9] rounded-md px-5 py-3 md:w-96 w-[100%] mb mb-10 outline-none'>
                        <input 
                        value={password}
                        className='outline-none w-[90%] h-full' 
                        onChange={(e) => setPassword(e.target.value)} 
                        name="" 
                        id="password"
                        type={showPassword ? "text" : "password"}
                        />
                         <div className="eye-button " onClick={() => setShowPassword(!showPassword)}
                        aria-label={showPassword ? "Hide password" : "Show password"}>
                        <img src={showPassword ? eye : eyeOff} alt={showPassword ? "Hide password" : "Show password"} />
                      </div>
                      </div>
            </motion.div>

            <div className="flex items-center">
              <input type="checkbox" required name="" id="" />
              <p className="my-3 ml-2 sm:text-lg text-base">
                I have Agreed to the <Link to="/terms" onClick={()=> scrollX(0,0)}> Terms & Conditions </Link>
              </p>
            </div>

            <div className="flex items-center mb-5 justify-center">
              <button
                type="submit"
                className="bg-[#A69051] hover:bg-[#443b23] cursor-pointer px-4 text-lg text-white rounded-xl py-3"
              >
                {loading ? "Loading" : "Create"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
