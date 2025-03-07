"use client";
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
      className="relative flex flex-col items-center justify-center bg-[#2B71F0] px-4 sm:px-8 md:px-12 lg:px-24 py-12 sm:py-16 md:py-20 lg:py-24 mx-4 sm:mx-8 md:mx-16 lg:mx-32 my-8 md:my-12 lg:my-16 rounded-2xl text-white overflow-hidden"
    >
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] border-[80px] border-[#FFFFFF]/10 rounded-full transform translate-y-1/2 -translate-x-1/2"
        aria-hidden="true"
      />
      <div
        className="absolute -top-[20%] -right-[10%] w-[300px] h-[300px] border-[60px] border-[#FFFFFF]/10 rounded-full"
        aria-hidden="true"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 md:gap-16 lg:gap-20 text-center relative z-10">
        {statsData.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <motion.p
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-2"
            >
              {stat.value}
            </motion.p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
