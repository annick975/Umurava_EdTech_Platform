"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Stats() {
  const statsData = [
    { value: "1", label: "Year" },
    { value: "500+", label: "Challenges Completed" },
    { value: "10K+", label: "Users" },
    { value: "6+", label: "Countries" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative flex flex-col items-center justify-center bg-[#2B71F0] px-4 sm:px-8 lg:px-24 py-8 sm:py-12 lg:py-20 mx-4 sm:mx-8 lg:mx-32 my-8 lg:my-16 rounded-2xl text-white space-y-8 lg:space-y-0 overflow-hidden"
    >
      <motion.svg
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 0.14 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute top-[-50px] sm:top-[-100px] lg:top-[-200px] right-[-50px] sm:right-[-130px] lg:right-[-200px] w-[150px] sm:w-[250px] lg:w-[400px] h-[150px] sm:h-[250px] lg:h-[400px]"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="250"
          cy="250"
          r="200"
          stroke="white"
          strokeWidth="65"
          fill="none"
        />
      </motion.svg>

      <motion.svg
        initial={{ rotate: 90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 0.14 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-[-100px] sm:bottom-[-160px] lg:bottom-[-300px] left-[100px] sm:left-[20px] lg:left-[200px] w-[150px] sm:w-[250px] lg:w-[400px] h-[150px] sm:h-[250px] lg:h-[400px]"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="200"
          cy="200"
          r="150"
          stroke="white"
          strokeWidth="65"
          fill="none"
        />
      </motion.svg>

      <div className="inline-flex justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-36 text-center">
        {statsData.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <motion.p
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-4xl font-bold"
            >
              {stat.value}
            </motion.p>
            <p className="text-xl sm:text-lg font-normal">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
