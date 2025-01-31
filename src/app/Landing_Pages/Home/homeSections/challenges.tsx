"use client";
import Link from "next/link";
import ChallengeCard from "@/components/ChallengeCard_Landing";
import { Button } from "@/components/ui/button";

const challenges = [
  {
    id: "1",
    title: "Design a Dashboard for SokoFund",
    skills: ["UI/UX Design", "User Research", "User Research"],
    seniority: "(Junior, Intermediate, Senior)",
    timeline: "15 Days",
  },
  {
    id: "2",
    title: "Design a Dashboard for SokoFund",
    skills: ["UI/UX Design", "User Research", "User Research"],
    seniority: "(Junior, Intermediate, Senior)",
    timeline: "15 Days",
  },
  {
    id: "3",
    title: "Design a Dashboard for SokoFund",
    skills: ["UI/UX Design", "User Research", "User Research"],
    seniority: "(Junior, Intermediate, Senior)",
    timeline: "15 Days",
  },
];

export default function ChallengesPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#03192E] mb-4">
            Explore Challenges & Hackathons
          </h2>
          <p className="text-gray-600 text-lg">
            Join Skills Challenges Program to accelerate your career growth and
            become part of Africa's largest workforce of digital professionals.
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {challenges.map((challenge) => (
            <ChallengeCard key={challenge.id} {...challenge} />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Link href="/challenges">
            <Button
              variant="outline"
              className="px-8 py-6 text-[#2C71F0] border-[#2C71F0] hover:bg-[#2C71F0]/10"
            >
              View More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
