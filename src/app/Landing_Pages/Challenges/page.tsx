
"use client";

import { Header } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ChallengeCard from "@/components/ChallengeCard_Landing";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function ChallengesPage() {
  const challenges = Array(12).fill({
    id: "1",
    title: "Design a Dashboard for SokoFund",
    skills: ["UX/UI Design", "User Research", "User Testing"],
    seniority: "Junior, Intermediate, Senior",
    timeline: "15 Days",
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-[#F8F9FB]">
        <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-6 md:mb-8">
            <Link
              href="/"
              className="flex items-center text-gray-600 hover:text-[#2C71F0]"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Go Back
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#2C71F0]">Challenges & Hackathons</span>
          </div>

          {/* Challenge Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {challenges.map((challenge, index) => (
              <ChallengeCard key={index} {...challenge} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
