"use client";

import { useState } from "react";
import type { FC } from "react";
import Link from "next/link";
import { Sidebar, WhatsAppModalProvider } from "@/components/Sidebar_Admin";
import ChallengeCard from "@/components/ChallengeCard_Admin";
import Header from "@/components/Header";
import {
  FileText,
  CheckCircle,
  Clock,
  ClipboardList,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ChallengesPage: FC = () => {
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

        <div className="flex-1 md:ml-80 w-full">
          <Header onMenuClick={toggleSidebar} />

          <main className="p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8">
              <div>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-1">
                  Challenges
                </h1>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                  Join a challenge or a hackathon to gain valuable work
                  experience
                </p>
              </div>
            </div>

            {/* Challenge Filters - Scrollable container for small screens */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8">
              <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0 mb-6 sm:mb-8">
                <div className="inline-flex items-center gap-3 min-w-max">
                  {[
                    {
                      icon: FileText,
                      text: "All Challenge",
                      count: "0",
                      active: true,
                    },
                    {
                      icon: CheckCircle,
                      text: "Completed Challenge",
                      count: "0",
                      active: false,
                    },
                    {
                      icon: ClipboardList,
                      text: "Open Challenge",
                      count: "0",
                      active: false,
                    },
                    {
                      icon: Clock,
                      text: "Ongoing Challenge",
                      count: "0",
                      active: false,
                    },
                  ].map((filter, index) => (
                    <Button
                      key={index}
                      variant={filter.active ? "default" : "outline"}
                      className={`
                        flex items-center 
                        h-12
                        text-sm
                        font-medium
                        rounded-lg
                        px-4
                        ${
                          filter.active
                            ? "bg-[#D0E0FC] hover:bg-[#2563EB]/90 text-[#101928]"
                            : "bg-white hover:bg-gray-50 text-[#344054] border-gray-200"
                        }
                      `}
                    >
                      <filter.icon className="w-4 h-4 mr-2 text-[#98A2B3]" />
                      {filter.text}
                      <span
                        className={`
                          ml-2
                          text-xs 
                          px-2
                          py-0.5 
                          rounded-full
                          ${
                            filter.active
                              ? "bg-[#2B71F0] text-white"
                              : "bg-gray-100"
                          }
                        `}
                      >
                        {filter.count}
                      </span>
                    </Button>
                  ))}
                  <Link href="CreateChallenge">
                    <Button className="flex items-center h-14 bg-[#2563EB] hover:bg-[#2563EB]/90 rounded-lg ml-auto">
                      <Plus className="w-4 h-4 mr-2" />
                      Create New Challenge
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Challenges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {challenges.map((challenge, index) => (
                <ChallengeCard key={index} {...challenge} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-6 sm:mt-8">
              <Button
                variant="ghost"
                className="text-gray-500 hover:bg-gray-100 rounded-lg text-sm"
              >
                Previous
              </Button>
              <Button className="bg-[#2C71F0] hover:bg-[#2C71F0]/90 rounded-lg text-sm">
                Next
              </Button>
            </div>
          </main>
        </div>
      </div>
    </WhatsAppModalProvider>
  );
};

export default ChallengesPage;
