"use client";

import { useState } from "react";
import type { FC } from "react";
import { Sidebar, WhatsAppModalProvider } from "@/components/Sidebar_Talent";
import ChallengeCard from "@/components/ChallengeCard_Talent";
import Header from "@/components/Header";
import {
  FileText,
  CheckCircle,
  Clock,
  ClipboardList,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGetChallengesQuery } from "@/lib/api/challengesApi";

const ITEMS_PER_PAGE = 9;

const ChallengesPage: FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState("all");
  const {
    data: challengesData,
    isLoading,
    isError,
  } = useGetChallengesQuery({
    page: currentPage,
    limit: ITEMS_PER_PAGE,
  });

  const challenges = challengesData?.challenges;
  const totalChallenges = challengesData?.total || 0;
  const totalPages = Math.ceil(totalChallenges / ITEMS_PER_PAGE);

  const filterCounts = {
    all: challenges?.length || 0,
    completed: challenges?.filter((c) => c.status === "completed").length || 0,
    open: challenges?.filter((c) => c.status === "open").length || 0,
    ongoing: challenges?.filter((c) => c.status === "ongoing").length || 0,
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const filters = [
    {
      icon: FileText,
      text: "All Challenges",
      count: filterCounts.all,
      id: "all",
    },
    {
      icon: CheckCircle,
      text: "Completed Challenges",
      count: filterCounts.completed,
      id: "completed",
    },
    {
      icon: ClipboardList,
      text: "Open Challenges",
      count: filterCounts.open,
      id: "open",
    },
    {
      icon: Clock,
      text: "Ongoing Challenges",
      count: filterCounts.ongoing,
      id: "ongoing",
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
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8">
              <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0 mb-6 sm:mb-8">
                <div className="inline-flex items-center gap-3 min-w-max">
                  {filters.map((filter) => (
                    <Button
                      key={filter.id}
                      variant={
                        activeFilter === filter.id ? "default" : "outline"
                      }
                      className={`
                        flex items-center 
                        h-12
                        text-sm
                        font-medium
                        rounded-lg
                        px-4
                        ${
                          activeFilter === filter.id
                            ? "bg-[#D0E0FC] hover:bg-[#2563EB]/90 text-[#101928]"
                            : "bg-white hover:bg-gray-50 text-[#344054] border-gray-200"
                        }
                      `}
                      onClick={() => setActiveFilter(filter.id)}
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
                            activeFilter === filter.id
                              ? "bg-[#2B71F0] text-white"
                              : "bg-gray-100"
                          }
                        `}
                      >
                        {filter.count}
                      </span>
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Challenges Grid */}
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

            {/* Pagination */}
            <div className="flex justify-between items-center mt-6 sm:mt-8">
              <Button
                variant="ghost"
                className="text-gray-500 hover:bg-gray-100 rounded-lg text-sm"
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">
                  Page {currentPage} of {totalPages}
                </span>
              </div>
              <Button
                className="bg-[#2C71F0] hover:bg-[#2C71F0]/90 rounded-lg text-sm"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </main>
        </div>
      </div>
    </WhatsAppModalProvider>
  );
};

export default ChallengesPage;
