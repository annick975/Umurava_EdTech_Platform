"use client";

import { useState } from "react";
import type { FC } from "react";
import Link from "next/link";
import { WhatsAppModalProvider, Sidebar } from "@/components/Sidebar_Admin";
import ChallengeCard from "@/components/ChallengeCard_Admin";
import {
  ChevronRight,
  FileText,
  Users,
  CheckCircle,
  Clock,
} from "lucide-react";
import Header from "@/components/Header";
import StatsCard from "@/components/StatsCard";
import { useGetChallengesQuery } from "@/lib/api/challengesApi";

const ITEMS_PER_PAGE = 3;

const DashboardPage: FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <WhatsAppModalProvider>
      <div className="flex min-h-screen bg-[#F8F9FB]">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        <div className="flex-1 md:ml-80">
          <Header onMenuClick={toggleSidebar} />
          <main className="p-4 sm:p-6 lg:p-8">
            <div className="mb-6 sm:mb-8">
              <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1">
                Welcome back Hilaire,
              </h1>
              <p className="text-sm sm:text-base text-gray-500">
                Build Work Experience through Skills Challenges
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6">
              <StatsCard
                icon={FileText}
                title="Total Challenge"
                value="29,405"
                percentage="15%"
                period="This Week"
              />
              <StatsCard
                icon={Users}
                title="Total Participants"
                value="29,405"
                percentage="15%"
                period="This Week"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
              <StatsCard
                icon={CheckCircle}
                title="Completed Challenges"
                value="5,837"
                percentage="15%"
                period="Last 30 days"
              />
              <StatsCard
                icon={FileText}
                title="Open Challenges"
                value="5,837"
                percentage="15%"
                period="Last 30 days"
              />
              <StatsCard
                icon={Clock}
                title="Ongoing Challenges"
                value="5,837"
                percentage="15%"
                period="Last 30 days"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg sm:text-xl font-semibold">
                  Recent Challenges
                </h2>
                <Link
                  href="/Admin/Challenges"
                  className="text-[#2563EB] flex items-center text-sm hover:underline"
                >
                  See all <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
              {isLoading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#2B71F0]"></div>
                </div>
              ) : isError ? (
                <div className="text-center text-red-500">
                  Error loading challenges
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {challenges?.map((challenge) => (
                    <ChallengeCard key={challenge.id} {...challenge} />
                  ))}
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </WhatsAppModalProvider>
  );
};

export default DashboardPage;
