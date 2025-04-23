import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { assets } from "../assets/assest";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="my-16 ">
      <h2 className="text-center text-3xl font-bold mb-8 text-[#59486e]">
        HOW <span className="underline">AFFILIATE MARKETING</span> WORKS
      </h2>

      <div className="flex gap-4 flex-wrap">
        <div className="grow basis-[180px]">
          <img src={assets.workflow_1} className="w-18 mb-4" alt="icon" />
          <p>AFFILIATE PROMOTE BRAND’S PRODUCT OR SERVICE ON WEBSITE</p>
        </div>
        <MdOutlineKeyboardDoubleArrowRight
          className="text-[#59486e] font-bold"
          size={80}
        />

        <div className="grow basis-[180px]">
          <img src={assets.workflow_2} className="w-18 mb-4" alt="icon" />
          <p>
            SOMEONE CLICKS ON THE PROMOTION PROVIDED BY US AND BUYS SOMETHING
          </p>
        </div>
        <MdOutlineKeyboardDoubleArrowRight
          className="text-[#59486e] font-bold"
          size={80}
        />

        <div className="grow basis-[180px]">
          <img src={assets.workflow_3} className="w-18 mb-4" alt="icon" />
          <p>AFFILIATE HUB TRACKS THE PURCHASE AND DETAILS OF TRAFFIC</p>
        </div>
        <MdOutlineKeyboardDoubleArrowRight
          className="text-[#59486e] font-bold"
          size={80}
        />

        <div className="grow basis-[180px]">
          <img src={assets.workflow_4} className="w-18 mb-4" alt="icon" />
          <p>
            WHEN PURCHASE IS CONFIRMED BY BRAND, AFFILIATE GET PAID THEIR
            COMMISSION
          </p>
        </div>
      </div>

      <div>
        <div className="our-courses ">
        <MdOutlineKeyboardDoubleArrowRight
          className="text-[#59486e] font-bold"
          size={30}
        />
          <span> About Us</span>
        </div>

        <div className="hero">
          <div className="hero-container">
            <div className="description">
              <p className="text-[19px]">
                Welcome to SelarDigitalMarketplace – your go-to hub for
                discovering top-rated digital products and services, all in one
                place. We’re an affiliate-powered platform built with one
                mission: to connect smart shoppers with the best deals in the
                digital world.
              </p>
              <p className="text-[19px]">
                At SelarDigitalMarketplace, we do the heavy lifting—researching,
                reviewing, and recommending products that deliver real value.
                From software tools and online courses to creative assets and
                marketing solutions, we help you make informed choices with
                confidence.
              </p>
            </div>
            <div className="image">
              <img src={assets.about_us} alt="Photo" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
