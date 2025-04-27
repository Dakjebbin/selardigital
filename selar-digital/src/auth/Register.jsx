import React, { useState } from "react";
import { assets } from "../assets/assest";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react"; //eslint-disable-line
import axios from "axios";
import toast from "react-hot-toast";

const Register = () => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const baseUrl = "/api";
  const Navigate = useNavigate();

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
      } else {
        toast.error("Registration Failed");
      }
      setFullname("");
      setUsername("");
      setEmail("");
      setPhoneNumber("");
      setPassword("");

      Navigate("/login");
    } catch (error) {
      if (error instanceof axios.AxiosError) {
        toast.error(error?.response?.data);
      } else {
        toast.error("reg error => ", error);
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
                id=""
              />

              <label className="text-lg mb-1">Username </label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border shadow-md shadow-[#a7a6a6] border-[#aaa9a9] rounded-md px-5 py-3 md:w-96 w-[100%]  mb-3 outline-none"
                type="text"
                required
                name=""
                id=""
              />

              <label className="text-lg mb-1">Email </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border shadow-md shadow-[#a7a6a6] border-[#aaa9a9] rounded-md px-5 py-3 md:w-96 w-[100%]  mb-3 outline-none"
                type="email"
                required
                name=""
                id=""
              />

              <label className="text-lg mb-1">PhoneNumber </label>
              <input
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phonenumber}
                className="border shadow-md shadow-[#a7a6a6] border-[#aaa9a9] rounded-md px-5 py-3 md:w-96 w-[100%]  mb-3 outline-none"
                type="number"
                required
                name=""
                id=""
              />

              <label className="text-lg mb-1"> Password </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="border shadow-md shadow-[#a7a6a6] border-[#aaa9a9] rounded-md px-5 py-3 md:w-96 w-[100%]  mb-3 outline-none"
                type="password"
                name=""
                id=""
              />
            </motion.div>

            <div className="flex items-center">
              <input type="checkbox" required name="" id="" />
              <p className="my-3 ml-2 sm:text-lg text-base">
                I have Agreed to the Terms & Conditions
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
