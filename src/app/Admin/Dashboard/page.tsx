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

const DashboardPage: FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const challenges = [
    {
      title: "Design a Dashboard for SokoFund, Fintech Product",
      skills: ["UI/UX Design", "User Research", "User Research"],
      seniority: "(Junior, Intermediate, Senior)",
      timeline: "15 Days",
    },
    {
      title: "Design a Dashboard for SokoFund, Fintech Product",
      skills: ["UI/UX Design", "User Research", "User Research"],
      seniority: "(Junior, Intermediate, Senior)",
      timeline: "15 Days",
    },
    {
      title: "Design a Dashboard for SokoFund, Fintech Product",
      skills: ["UI/UX Design", "User Research", "User Research"],
      seniority: "(Junior, Intermediate, Senior)",
      timeline: "15 Days",
    },
  ];

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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {challenges.map((challenge, index) => (
                  <ChallengeCard key={index} {...challenge} />
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </WhatsAppModalProvider>
  );
};

export default DashboardPage;
