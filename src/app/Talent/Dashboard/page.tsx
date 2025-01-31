"use client";

import { useState } from "react";
import type { FC } from "react";
import Link from "next/link";
import { WhatsAppModalProvider, Sidebar } from "@/components/Sidebar_Talent";
import ChallengeCard from "@/components/ChallengeCard_Talent";
import {
  Eye,
  ChevronRight,
  FileCheck,
  ClipboardList,
  Clock,
} from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

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
          <main className="p-4 sm:p-6 md:ml-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8">
              <div>
                <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1">
                  Welcome back Hilaire,
                </h1>
                <p className="text-sm sm:text-base text-gray-500">
                  Build Work Experience through Skills Challenges
                </p>
              </div>
              <Button className="mt-4 sm:mt-0 bg-[#2C71F0] hover:bg-[#2C71F0]/90">
                <Eye className="w-4 h-4 mr-2" /> View Profile
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
              {[
                { title: "Completed Challenges", value: "05", icon: FileCheck },
                { title: "Open Challenges", value: "200", icon: ClipboardList },
                { title: "Ongoing Challenges", value: "200", icon: Clock },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="
        bg-white 
        rounded-xl 
        p-4 
        sm:p-5 
        flex 
        items-center 
        relative 
        overflow-hidden 
        shadow-sm 
        hover:shadow-md 
        transition-all 
        duration-300 
        border 
        border-gray-100
        group
      "
                >
                  <div
                    className="
          absolute 
          left-0 
          top-0 
          bottom-0 
          w-1.5 
          bg-[#2C71F0] 
          transition-all 
          duration-300 
          group-hover:w-2
        "
                  ></div>

                  <div className="flex items-center w-full">
                    <div className="flex-1 pl-4">
                      <h3 className="text-xs sm:text-sm font-medium text-gray-500 mb-1 truncate">
                        {stat.title}
                      </h3>
                      <p className="text-lg sm:text-xl font-bold text-gray-900">
                        {stat.value}
                      </p>
                    </div>

                    <div
                      className="
            w-10 
            h-10 
            sm:w-12 
            sm:h-12 
            flex 
            items-center 
            justify-center 
            rounded-lg 
            bg-[#EEF2FF] 
            text-[#2C71F0] 
            transition-all 
            duration-300 
            group-hover:bg-[#2C71F0] 
            group-hover:text-white
          "
                    >
                      <stat.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg sm:text-xl font-semibold">
                  Recent Challenges
                </h2>
                <Link href="/Talent/Challenges">
                  <Button
                    variant="link"
                    className="text-[#2C71F0] p-0 hover:no-underline"
                  >
                    See all <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
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
