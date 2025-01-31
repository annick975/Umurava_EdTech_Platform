import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function GetStarted() {
  const steps = [
    {
      number: 1,
      title: "Sign up on Umurava Platform",
      description: "Submit your completed project for evaluation",
      image: "/signup1.png",
    },
    {
      number: 2,
      title: "Browse Open Challenges",
      description:
        "Explore the range of challenges and hackathons and choose one that aligns with your interests and career goals",
      image: "/challenges1.png",
    },
    {
      number: 3,
      title: "Register and Participate",
      description:
        "Sign up for the challenge and start working on the project.",
    },
    {
      number: 4,
      title: "Submit your work",
      description: "Submit your completed project for evaluation",
    },
    {
      number: 5,
      title: "Receive Feedback and Recognition",
      description: "Get feedback on your work and celebrate your achievements",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className="bg-[#F9FAFB] py-16 sm:py-24"
    >
      <div className="max-w-[1400px] mx-auto px-4">
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl font-bold text-[#03192E] text-center mb-16"
        >
          How to Get Started
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Left Column - Large Cards */}
          <motion.div className="space-y-8">
            {/* Step 1 */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-sm"
            >
              <div className="p-8 flex justify-between items-start gap-8">
                <div className="flex-1">
                  <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Badge className="bg-[#2C71F0] hover:bg-[#2C71F0] text-white rounded-md px-4 py-1 mb-6">
                      Step 1
                    </Badge>
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#101928] mb-2">
                      Sign up on Umurava Platform
                    </h3>
                    <p className="text-gray-600">
                      Submit your completed project for evaluation
                    </p>
                  </motion.div>
                </div>
                <motion.div
                  variants={itemVariants}
                  className="relative w-64 h-40"
                >
                  <Image
                    src="/signup1.png"
                    alt="Sign up"
                    fill
                    className="object-contain rounded-tl-3xl"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-sm"
            >
              <div className="p-8">
                <motion.div variants={itemVariants}>
                  <Badge className="bg-[#2C71F0] hover:bg-[#2C71F0] text-white rounded-md px-4 py-1 mb-6">
                    Step 2
                  </Badge>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#101928] mb-2">
                    Browse Open Challenges
                  </h3>
                  <p className="text-gray-600">
                    Explore the range of challenges and hackathons and choose
                    one that aligns with your interests and career goals
                  </p>
                </motion.div>
              </div>
              <motion.div
                variants={itemVariants}
                className="relative h-48 w-full"
              >
                <Image
                  src="/challenges1.png"
                  alt="Challenges"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Small Cards */}
          <motion.div className="space-y-8">
            {steps.slice(2).map((step) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl shadow-sm p-8"
              >
                <Badge className="bg-[#2C71F0] hover:bg-[#2C71F0] text-white rounded-md px-4 py-1 mb-6">
                  Step {step.number}
                </Badge>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#101928] mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
