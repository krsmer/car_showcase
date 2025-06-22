"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { CustomButton } from "@components";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover"); 

    if (nextSection) {             
      nextSection.scrollIntoView({ behavior: "smooth" });
    }                               
  };

  return (
    <div className="flex-1 pt-36 padding-x">
        <div className="hero">
        <h1 className="hero__title">
          Find, book, rent a car—quick and super easy!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

      <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95, rotate: "2.5deg" }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <CustomButton
            title="Explore Cars"
            containerStyles="bg-primary-blue text-white max-w-[200px] sm:w-[100px] rounded-full mt-10 hover:scale-105 duration-300"
            handleClick={handleScroll}
          />
      </motion.div>
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
