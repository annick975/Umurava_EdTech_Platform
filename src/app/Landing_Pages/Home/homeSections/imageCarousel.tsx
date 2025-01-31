"use client";

import { useState, useEffect } from "react";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";

const skills = [
  "UI/UX Design",
  "Data Science",
  "Graphic Design",
  "Data Analysis & Research",
  "Animation",
  "Videography & Photography",
  "AI & Machine Learning",
  "Web3",
  "Digital Marketing & Communications",
];

const slides = [
  {
    logo: "/sfLogo.png",
    description:
      "Embedded Finance platform and Payroll Management Software Solutions for your organization and Workforce",
    image: "/clipPath.png",
  },
  {
    logo: "/sfLogo.png",
    description:
      "Embedded Finance platform and Payroll Management Software Solutions for your organization and Workforce",
    image: "/clipPath.png",
  },
  {
    logo: "/sfLogo.png",
    description:
      "Embedded Finance platform and Payroll Management Software Solutions for your organization and Workforce",
    image: "/clipPath.png",
  },
  {
    logo: "/sfLogo.png",
    description:
      "Embedded Finance platform and Payroll Management Software Solutions for your organization and Workforce",
    image: "/clipPath.png",
  },
];

export default function SkillsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Carousel */}
        <div className="relative bg-[#F9FAFB] rounded-[20px] min-h-[600px] overflow-hidden">
          <div className="relative w-full h-full">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                  currentIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <div className="grid md:grid-cols-2 gap-8 h-full p-8 md:p-16 lg:p-20">
                  <div className="space-y-8 flex flex-col justify-center">
                    <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center">
                      <Image
                        src={slide.logo || "/placeholder.svg"}
                        alt="Company logo"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <p className="text-lg md:text-xl text-[#4B5563] leading-relaxed">
                      {slide.description}
                    </p>
                    <button className="flex items-center gap-2 text-[#2B71F0] font-semibold group">
                      Learn more
                      <ArrowRightCircle className="w-6 h-6 bg-[#2B71F0] rounded-full text-white transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                  <div className="relative flex items-center justify-center h-full">
                    <div className="relative w-full aspect-[4/3]">
                      <Image
                        src={slide.image || "/placeholder.svg"}
                        alt="Project preview"
                        fill
                        className="object-contain"
                        priority={index === currentIndex}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? "bg-[#2C71F0]" : "bg-[#D9D9D9]"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
