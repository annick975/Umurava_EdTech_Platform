"use client";
import { useState } from "react";
import Link from "next/link";
import ChallengeCard from "@/components/ChallengeCard_Landing";
import { Button } from "@/components/ui/button";
import { useGetChallengesQuery } from "@/lib/api/challengesApi";
const ITEMS_PER_PAGE = 3;

export default function ChallengesPage() {
    const [currentPage, setCurrentPage] = useState(1);
  const {
     data: challengesData,
     isLoading,
     isError,
   } = useGetChallengesQuery({
     page: currentPage,
     limit: ITEMS_PER_PAGE,
   });
  const challenges = challengesData?.challenges;
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
            become part of Africa&apos;s largest workforce of digital
            professionals.
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {challenges?.map((challenge) => (
            <ChallengeCard key={challenge.id} {...challenge} />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Link href="/Landing_Pages/Challenges">
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
