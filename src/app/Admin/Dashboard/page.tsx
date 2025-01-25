import { FC } from "react";
import Sidebar from "@/Components/Sidebar";
import StatsCard from "@/Components/StatsCard";
import ChallengeCard from "@/Components/ChallengeCard";
import { Search, Bell, ChevronRight } from "lucide-react";

const DashboardPage: FC = () => {
  const challenges = [
    {
      title: "Design a Dashboard for SokoFund, Fintech Product",
      skills: ["UI/UX Design", "User Research", "User Research"],
      seniority: "(Junior, Intermediate, Senior)",
      timeline: "15 Days",
    },
    {
      title: "Design a Dashboard for SokoFund",
      skills: ["UI/UX Design", "User Research", "User Research"],
      seniority: "(Junior, Intermediate, Senior)",
      timeline: "15 Days",
    },
    {
      title: "Design a Dashboard for SokoFund",
      skills: ["UI/UX Design", "User Research", "User Research"],
      seniority: "(Junior, Intermediate, Senior)",
      timeline: "15 Days",
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#F8F9FB]">
      <Sidebar />

      <main className="flex-1 ml-60 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-2xl font-semibold mb-1">
              Welcome back Hilaire,
            </h1>
            <p className="text-gray-600">
              Build Work Experience through Skills Challenges
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search here..."
                className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 w-64 focus:outline-none focus:ring-1 focus:ring-[#4339CA]"
              />
            </div>

            {/* Notification */}
            <button className="relative p-2">
              <Bell className="w-5 h-5 text-gray-600" />
            </button>

            {/* Profile Picture with Active Status */}
            <div className="relative">
              <div className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden">
                <img
                  src="/api/placeholder/36/36"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
          </div>
        </div>

        {/* Top Stats Row */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <StatsCard
            title="Total Challenge"
            value="29,405"
            percentage="15%"
            dateRange="This Week"
          />
          <StatsCard
            title="Total Participants"
            value="29,405"
            percentage="15%"
            dateRange="This Week"
          />
        </div>

        {/* Bottom Stats Row */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          <StatsCard
            title="Completed Challenges"
            value="5,837"
            percentage="15%"
          />
          <StatsCard title="Open Challenges" value="5,837" percentage="15%" />
          <StatsCard
            title="Ongoing Challenges"
            value="5,837"
            percentage="15%"
          />
        </div>

        {/* Recent Challenges Section */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Recent Challenges</h2>
            <button className="text-[#4339CA] flex items-center hover:underline">
              See all
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <ChallengeCard key={index} {...challenge} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
