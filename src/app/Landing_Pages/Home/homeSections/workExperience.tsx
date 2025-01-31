"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WorkExperienceSection() {
  const offerings = [
    {
      title: "Build a Strong Portfolio and Hand-On Experience",
      description:
        "Tackle real-world projects through challenges and hackathons that mirror real world challenges faced by businesses and organizations. Therefore, showcase your skills and accomplishments to potential employers and clients through a portoflio. of completed projects.",
      icon: "/icons/Briefcase.svg",
      className: "col-span-full",
    },
    {
      title: "Enhance Your Employment Path",
      description:
        "elop the in-demand skills and build a strong portofotio to increase your chances of landing your dream job or contract.",
      icon: "/icons/Briefcase.svg",
      className: "col-span-full md:col-span-1",
    },
    {
      title: "Earn Recognition and Prizes",
      description:
        "Earn both Money and Knowledge Prizes by participating in various contests and competitions by working on real world projects and hackathons from our partner companies & organizations",
      icon: "/icons/Briefcase.svg",
      className: "col-span-full md:col-span-1",
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-[#F9FAFB]">
      <div className="max-w-[1400px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl sm:text-4xl font-bold mb-4 text-[#03192E]">
            Experience a New Way of Building Work Experience
          </h2>
          <p className="text-[#687588] text-lg font-medium">
            Join Skills Challenges Program to accelerate your career growth and
            become part of Africa's largest workforce of digital professionals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-[48px]">
          {offerings.map((offering, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              className={`${offering.className} bg-[#2B71F0] rounded-xl p-12 space-y-6`}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
                className="w-14 h-14 bg-white rounded-xl flex items-center justify-center"
              >
                <Image
                  src={offering.icon || "/placeholder.svg"}
                  alt=""
                  width={28}
                  height={28}
                  className="text-[#2B71F0]"
                />
              </motion.div>
              <h3 className="text-2xl font-bold text-white">
                {offering.title}
              </h3>
              <p className="text-white/90 text-lg font-normal leading-relaxed">
                {offering.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
