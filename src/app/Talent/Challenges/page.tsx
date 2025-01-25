"use client";

import { useState } from "react";
import type { FC } from "react";
import { Sidebar, WhatsAppModalProvider } from "@/components/Sidebar";
import ChallengeCard from "@/components/ChallengeCard";
import Header from "@/components/Header";
import { FileText, CheckCircle, Clock, ClipboardList } from "lucide-react";
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
            <div className="mb-6 sm:mb-8">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-1">
                Challenges
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                Join a challenge or a hackathon to gain valuable work experience
              </p>
            </div>

            {/* Challenge Filters - Scrollable container for small screens */}
            <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0 mb-6 sm:mb-8">
              <div className="inline-flex sm:flex-wrap gap-2 sm:gap-3 min-w-max sm:min-w-0">
                {[
                  {
                    icon: FileText,
                    text: "All Challenge",
                    count: 6,
                    active: true,
                  },
                  {
                    icon: CheckCircle,
                    text: "Completed Challenge",
                    count: 3,
                    active: false,
                  },
                  {
                    icon: ClipboardList,
                    text: "Open Challenge",
                    count: 5,
                    active: false,
                  },
                  {
                    icon: Clock,
                    text: "Ongoing Challenge",
                    count: 1,
                    active: false,
                  },
                ].map((filter, index) => (
                  <Button
                    key={index}
                    variant={filter.active ? "default" : "outline"}
                    className={`
                      flex items-center 
                      rounded-full 
                      h-8 sm:h-9 lg:h-10 
                      text-xs sm:text-sm lg:text-base 
                      whitespace-nowrap 
                      px-3 sm:px-4
                      ${
                        filter.active
                          ? "bg-[#2C71F0] hover:bg-[#2C71F0]/90"
                          : "bg-white hover:bg-gray-50 text-gray-700"
                      }
                    `}
                  >
                    <filter.icon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 mr-1.5 sm:mr-2" />
                    {filter.text}
                    <span
                      className={`
                        ml-1.5 sm:ml-2 
                        text-xs 
                        px-1.5 sm:px-2 
                        py-0.5 
                        rounded-full 
                        ${filter.active ? "bg-white/20" : "bg-gray-100"}
                      `}
                    >
                      {filter.count}
                    </span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Challenges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {challenges.map((challenge, index) => (
                <ChallengeCard key={index} {...challenge} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-6 sm:mt-8 lg:mt-10">
              <Button
                variant="ghost"
                className="text-gray-500 hover:bg-gray-100 rounded-lg text-sm sm:text-base lg:text-lg px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 lg:py-3"
              >
                Previous
              </Button>
              <Button className="bg-[#2C71F0] hover:bg-[#2C71F0]/90 rounded-lg text-sm sm:text-base lg:text-lg px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 lg:py-3">
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
