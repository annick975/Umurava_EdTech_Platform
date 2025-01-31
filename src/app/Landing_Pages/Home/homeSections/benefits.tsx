"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export function Benefits() {
  const benefits = [
    {
      icon: "/icons/Briefcase-White.svg",
      title: "Enhance Your Employment Path",
      description:
        "Network with other talented individuals and learn from their experiences",
    },
    {
      icon: "/icons/Diploma.svg",
      title: "Earn Recognition and Prizes",
      description:
        "Gain valuable experience and knowledge to advance your career in the digital economy",
    },
    {
      icon: "/icons/Graph.svg",
      title: "Personal Growth",
      description:
        "Challenge yourself, learn new skills, and expand your professional network",
    },
    {
      icon: "/icons/Medal.svg",
      title: "Learn from Industry Experts",
      description:
        "Access valuable insights and guidance from experienced professionals in the digital careers fields and spaces",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-[1400px] mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#03192E] mb-4">
            What else can I gain from
            <br />
            participating in Skills Challenges ?
          </h2>
          <p className="text-gray-600 text-lg">
            Join Skills Challenges Program to accelerate your career growth and
            become part of Africa&apos;s largest workforce of digital
            professionals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
                className="flex flex-col gap-4"
              >
                <motion.div
                  initial={{ rotate: -10, scale: 0.9 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 150 }}
                  className="w-14 h-14 bg-[#2C71F0] rounded-xl flex items-center justify-center"
                >
                  <Image
                    src={benefit.icon || "/placeholder.svg"}
                    alt=""
                    width={24}
                    height={24}
                    className="text-white"
                  />
                </motion.div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-[#03192E]">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/banner_img1.png"
                alt="Skills Challenge Dashboard"
                width={600}
                height={800}
                className="w-full h-auto object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
