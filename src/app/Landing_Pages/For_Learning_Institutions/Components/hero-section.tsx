import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="max-w-[1400px] mx-auto px-4 py-8 sm:py-16 grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-4 sm:space-y-6">
        <h1 className="text-3xl sm:text-2xl md:text-3xl font-semibold text-[#2B71F0] leading-tight">
          Accelerate Your Students and Trainees&apos;s Employability and Career
          Growth through Project-based Learning Solution
        </h1>
        <p className="text-[#2B3338] text-[20px] sm:text-xl md:text-2xl">
          We partner with Universities, Schools, and Training Institutions to
          build the work experience of their students and trainees through
          project based learning challenges and hackathons
        </p>
        <Button className="bg-[#2C71F0] hover:bg-[#2C71F0]/90 text-white font-semibold px-6 sm:px-8 py-5 sm:py-4 text-sm sm:text-lg w-[207px] h-[56px]">
          Partner with us
        </Button>
      </div>
      <div className="relative h-[200px] sm:h-[300px] md:h-[400px] rounded-3xl overflow-hidden">
        <Image
          src="/image3.png"
          alt="Students working on computers"
          fill
          className="object-cover rounded-3xl"
          priority
        />
      </div>
    </section>
  );
}

