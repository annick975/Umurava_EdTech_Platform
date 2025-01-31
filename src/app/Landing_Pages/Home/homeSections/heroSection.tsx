"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="flex max-sm:flex-wrap max-sm:flex-col-reverse items-center px-4 sm:px-6 lg:px-12 2xl:px-20 pb-10 py-16 2xl:pt-28 2xl:pb-12">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full lg:w-1/2 py-10 lg:py-10 px-6 lg:px-10 2xl:px-8"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-[#2B71F0]"
        >
          Build Work Experience through Skills Challenges Program
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xl my-6 lg:my-10 font-medium 2xl:text-[20px] text-[#2B3338]"
        >
          Enhance Your Employability and Accelerate Your Career Growth by
          working on Hands-on projects & Hackathons from various businesses &
          organizations
        </motion.p>
        <motion.a
          href="/Landing_Pages/Challenges"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className="inline-flex items-center justify-center gap-2 bg-[#2B71F0] text-white hover:bg-[#2B71F0]/90 h-11 rounded-md px-6 lg:px-12 py-5 lg:py-7 font-medium text-sm lg:text-lg">
            Get Started
          </button>
        </motion.a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full lg:w-1/2 flex justify-center"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            src="/image2.svg"
            alt="photo"
            width={648}
            height={501}
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-full h-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
