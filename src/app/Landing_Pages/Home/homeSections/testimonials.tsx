"use client";

import { useState, useEffect, useCallback } from "react";
import { Play } from "lucide-react";

const testimonials = [
  { id: 1, name: "Manzi Jack", role: "Product Designer, Kigali" },
  { id: 2, name: "Manzi Jack", role: "Product Designer, Kigali" },
  { id: 3, name: "Manzi Jack", role: "Product Designer, Kigali" },
  { id: 4, name: "Manzi Jack", role: "Product Designer, Kigali" },
  { id: 5, name: "Manzi Jack", role: "Product Designer, Kigali" },
  { id: 6, name: "Manzi Jack", role: "Product Designer, Kigali" },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((current) =>
      current === testimonials.length - 3 ? 0 : current + 1
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="max-w-2xl mb-16">
          <h2 className="flex text-4xl sm:text-4xl lg:text-[40px] font-bold text-[#03192E] mb-4">
            Users are in Love with Skills Challenges Program
          </h2>
          <p className="text-lg font-normal text-[#687588]">
            See what our clients say about working with us. Their success speaks
            for our dedication and expertise.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 33.333}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full md:w-1/3 flex-shrink-0 px-3"
                >
                  <div className="bg-white rounded-2xl shadow-sm border border-[#D2D2D2] p-4">
                    <div className="bg-[#2C71F0] rounded-xl aspect-video flex items-center justify-center">
                      <button
                        className="w-14 h-14 rounded-full bg-white/60 flex items-center justify-center transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/80"
                        aria-label="Play testimonial video"
                      >
                        <Play className="w-7 h-7 text-white fill-white ml-1" />
                      </button>
                    </div>
                    <div className="pt-4 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#2B71F0] flex-shrink-0" />
                      <div>
                        <h3 className="text-[#00473B] font-bold text-lg">
                          {testimonial.name}
                        </h3>
                        <p className="text-[#737373] font-medium text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: testimonials.length - 2 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? "bg-[#2C71F0]" : "bg-[#D9D9D9]"
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
