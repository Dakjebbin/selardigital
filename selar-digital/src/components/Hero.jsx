import React from "react";
import { assets } from "../assets/assest";
import { Link } from "react-router-dom";
import { motion } from "motion/react"; //eslint-disable-line

const Hero = () => {
  return (
    <main className="mb-20">
      <section className="flex flex-col items-center justify-center mt-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1, ease: "easeOut",
            // scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
          className="flex flex-col items-center justify-center"
        >
          <h1 className="md:text-6xl text-3xl sm:text-4xl font-bold text-center ">
            Explore the Possibilities <br />
            of Marketing with SelarDigitalMarketPlace
          </h1>
          <div className="md:w-[40rem] mt-2">
            <img src={assets.line} alt="line" />
          </div>
        </motion.div>

        <motion.p
         initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1, ease: "easeOut",
            // scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
        className="text-center my-10 md:text-xl text-lg font-semibold">
          Your premier destination for unlocking the full potential of affiliate
          marketing in World. We are thrilled to embark on this journey with
          you, where innovation meets opportunity and where partnerships
          flourish to drive unprecedented growth.
        </motion.p>

        <Link to="/register" onClick={() => scrollX(0, 0)}>
          <button className="bg-gradient-to-br from-[#23325A] to-[#967bb6] text-white px-4 py-3 text-xl rounded-xl cursor-pointer font-semibold">
            Register Now And Start Earning
          </button>
        </Link>
      </section>

      <section className="w-[90%] m-auto mt-10">
        <motion.div
         initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.2 }}
        className="h-96 w-full">
          <img
            className="h-full rounded-2xl w-full object-cover"
            src={assets.background}
            alt="background"
          />
        </motion.div>
      </section>

      <section className="mt-16">
        <motion.h2
         initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.2 }}
        className="sora text-center md:text-5xl text-[25px]">
          Grow Faster, Not Harder <br /> and scale bigger with <br />{" "}
          SelarDigitalMarketPlace
        </motion.h2>
      </section>
    </main>
  );
};

export default Hero;
