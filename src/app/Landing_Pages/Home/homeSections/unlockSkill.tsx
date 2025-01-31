import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type React from "react"; // Added import for React

interface UnlockSkillProps {
  className?: string;
}

const UnlockSkill: React.FC<UnlockSkillProps> = ({ className }) => {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="relative bg-[#2B71F0] rounded-[32px] overflow-hidden">
          {/* Decorative circles */}
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] border-[80px] border-[#FFFFFF]/10 rounded-full transform translate-y-1/2 -translate-x-1/2"
            aria-hidden="true"
          />
          <div
            className="absolute -top-[20%] -right-[10%] w-[300px] h-[300px] border-[60px] border-[#FFFFFF]/10 rounded-full"
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative z-10 grid lg:grid-cols-2 items-center gap-8 p-8 lg:p-16">
            <div className="relative w-full max-w-[500px] aspect-[4/3]">
              <Image
                src="/students.png"
                alt="Students collaborating on a laptop"
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                Ready to Unlock Your Career Potential Today!
              </h2>
              <p className="text-lg font-medium text-white/90">
                Join a challenge or a hackathon to gain valuable work
                experience, build an impressive portfolio and increase your
                chances to land job opportunities and accelerate your career
                growth
              </p>
              <Link href="/Landing_Pages/Challenges">
                <Button className="bg-white hover:bg-white/95 text-[#2B71F0] hover:text-[#2B71F0]/90 font-semibold px-6 py-5 h-[56px] w-[241px] text-base rounded-lg mt-7">
                  View Challenge
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnlockSkill;
