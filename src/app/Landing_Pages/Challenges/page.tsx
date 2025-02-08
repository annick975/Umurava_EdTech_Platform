
"use client";
import { useState } from "react";
import { Header } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ChallengeCard from "@/components/ChallengeCard_Landing";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useGetChallengesQuery } from "@/lib/api/challengesApi";

const ITEMS_PER_PAGE = 9;

export default function ChallengesPage() {

  const [currentPage] = useState(1);
   
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
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#2B71F0]"></div>
            </div>
          ) : isError ? (
            <div className="text-center text-red-500">
              Error loading challenges
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {challenges?.map((challenge, index) => (
                <ChallengeCard key={index} {...challenge} />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
