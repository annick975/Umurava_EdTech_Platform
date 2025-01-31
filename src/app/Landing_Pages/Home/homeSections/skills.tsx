"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="flex flex-col items-center px-8 pt-10 pb-0 mx-auto container text-center">
      <motion.div
        variants={headerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="items-center text-center py-20 md:w-2/3 mx-auto"
      >
        <h1 className="2xl:text-[40px] lg:text-3xl sm:text-2xl text-xl font-bold text-[#03192E]">
          Skills Challenges Cover various in-demand skills and Careers for the
          digital economy
        </h1>
        <p className="my-4 text-lg text-[#687588] font-normal">
          Explore the projects that various talents are working on.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto -mt-12"
      >
        <div className="flex justify-center gap-5 my-5">
          <motion.div
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center text-lg transition-colors rounded-md bg-[#2B71F0] text-white hover:bg-[#2B71F0]/95 hover:text-white px-6 py-4"
          >
            UI/UX Design
          </motion.div>
          <motion.div
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center text-lg transition-colors rounded-md bg-[#F1F1F1] text-[#687588] px-6 py-4"
          >
            Data Science
          </motion.div>
        </div>

        <motion.div
          variants={container}
          className="flex justify-center flex-wrap gap-5 my-5"
        >
          {[
            "Graphic Design",
            "Data Analysis & Research",
            "Animation",
            "Videography & Photography",
          ].map((skill) => (
            <motion.div
              key={skill}
              variants={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center text-lg transition-colors rounded-md bg-[#F1F1F1] text-[#687588] px-6 py-4"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={container}
          className="flex justify-center flex-wrap gap-5 my-2"
        >
          {[
            "Data Science",
            "AI & Machine Learning",
            "Web3",
            "Digital Marketing & Communications",
          ].map((skill) => (
            <motion.div
              key={skill}
              variants={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center text-lg transition-colors rounded-md bg-[#F1F1F1] text-[#687588] px-6 py-4"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
