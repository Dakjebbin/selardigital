

import { useState } from "react"
import "../styles/Ournumbers.css"
import { useRef } from "react";
import { useEffect } from "react";
import { assets } from "../assets/assest";
import { motion } from "motion/react"; //eslint-disable-line

const Impacts = () => {

    const [isCourses, setIsCourses ] = useState(0);
    const [isRegistered, setIsRegistered ] = useState(0);
    const [isTotal, setIsTotal ] = useState(0);
    // const [isLanguage, setIsLanguage ] = useState(0);
    // const [isPartner, setIsPartner ] = useState(0);
    // const [isBonus, setIsBonus ] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);

    const numbersRef = useRef(null)

    const animateCount = (endValue, setState, duration) => {
        let start = 0;
        const increment = endValue / (duration / 50);

        const counter = setInterval(() => {
            start += increment;

            if(start >= endValue) {
                setState(endValue);
                clearInterval(counter);
            } else {
                setState(Math.ceil(start));
            }
        }, 50);
    };

    const startAnimations = () => {
        
        
        if (!hasAnimated) {
            animateCount(100, setIsCourses, 2000);
            animateCount(1000, setIsRegistered, 2000);
            animateCount(100000, setIsTotal, 2000);
            // animateCount(25, setIsLanguage, 2000);
            // animateCount(250, setIsPartner, 2000);
            // animateCount(230000, setIsBonus, 2000);
            setHasAnimated(true);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if(entry.isIntersecting) {
                        startAnimations();
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.3 }
        );

        if(numbersRef.current) {
            observer.observe(numbersRef.current);
        }

        return () => {
            if (numbersRef.current) {
                observer.unobserve(numbersRef.current);
            }
        };
    }, [hasAnimated]);

  return (
    <div>
    <section ref={numbersRef}  className="bg-[#A69051] rounded-2xl ournumbers">
        <h2 className="pt-6">Sales In Numbers</h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col items-center justify-between p-9 flex-wrap lg:flex-row ">
            <div className="mb-3 lg:mb-0">
                <p className="numbers text-center">
                    {isCourses}+
                </p>
                <p className="numbers-text text-center">
                    Completed Projects
                </p>
            </div>

            <div className="mb-3 lg:mb-0">
                <p className="numbers text-center">
                   {isRegistered}+
                </p>
                <p className="numbers-text text-center">
                  Partners
                </p>
            </div>

            <div className="mb-3 lg:mb-0">
                <p className="numbers text-center">
                  {isTotal}+
                </p>
                <p className="numbers-text text-center">
                    Total Amount Earned in Dollars
                </p>
            </div>
        </motion.div>

    </section>

    <div className="my-16">
    
    <h2 className="text-center text-3xl font-bold mb-8 text-[#A69051]">
        OUR <span className="underline">HAPPY</span> CLIENTS
      </h2>

      <section className="flex gap-3 items-center justify-between">
        <motion.div
        initial={{ opacity: 0, y: -65 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        >
        <img src={assets.aliexpress} alt="Aliexpress" />
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: -60 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.3, ease: "easeOut" }}
           viewport={{ once: true, amount: 0.2 }}
        >
        <img src={assets.agoda} alt="Agoda" />
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: -55 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: "easeOut" }}
           viewport={{ once: true, amount: 0.2 }}
        >
        <img src={assets.trip} alt="Trip" />
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, y: -50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           viewport={{ once: true, amount: 0.2 }}
        >
        <img src={assets.shopee} alt="Shopee" />
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, y: -50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           viewport={{ once: true, amount: 0.2 }}
        >
        <img className="w-46" src={assets.logo} alt="selar" />
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, y: -50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           viewport={{ once: true, amount: 0.2 }}
        >
        <img className="w-50 h-20 object-cover" src={assets.shopify} alt="Shopee" />
        </motion.div>
      </section>
</div>
    </div>
  )
}

export default Impacts