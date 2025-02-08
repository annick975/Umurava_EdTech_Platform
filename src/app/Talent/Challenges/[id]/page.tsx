"use client";

import { useState, useEffect } from "react";
import type { FC } from "react";
import { useParams } from "next/navigation";
import { Sidebar, WhatsAppModalProvider } from "@/components/Sidebar_Talent";
import Link from "next/link";
import Image from "next/image";
import umurava from "@/../../public/umurava.png";
import { Mail, Monitor, Calendar, DollarSign, ChevronLeft } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
  useGetChallengeByIdQuery,
} from "@/lib/api/challengesApi";

const ChallengeDetailsPage: FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { id } = useParams();
  const {
    data: challengeData,
    isLoading,
    isError,
  } = useGetChallengeByIdQuery(id as string);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  useEffect(() => {
      if (challengeData) {
        console.log("Challenge Data:", challengeData);
      }
    }, [challengeData]);
  
   if (isLoading) {
     return (
       <div className="flex justify-center items-center h-64">
         <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#2B71F0]"></div>
       </div>
     );
   }
 if (isError || !challengeData) {
   return (
     <div className="text-center text-red-500">Error loading challenges</div>
   );
 }
  
    const challenge = challengeData.challenge || challengeData;

  return (
    <WhatsAppModalProvider>
      <div className="flex min-h-screen bg-[#F8F9FB]">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <div className="flex-1 w-full md:ml-80">
          <Header onMenuClick={toggleSidebar} />

          <main className="p-4 sm:p-6 lg:p-8">
            {/* Breadcrumb */}
            <nav className="flex flex-wrap items-center justify-between w-full mb-4 sm:mb-6">
              <div className="flex items-center gap-2 text-sm">
                <Link
                  href="/Talent/Challenges"
                  className="flex items-center text-gray-600 hover:text-[#2C71F0] transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Go Back
                </Link>
                <span className="text-gray-400">/</span>
                <Link href="/Talent/Challenges" className="text-gray-500">
                  Challenges & Hackathons
                </Link>
                <span className="text-gray-400">/</span>
                <span className="text-[#2C71F0]">{challenge.title}</span>
              </div>
            </nav>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Left Column - Project Details */}
              <div className="flex-1">
                <div className="bg-[#2C71F0] rounded-xl mb-6 aspect-video flex items-center justify-center">
                  <Image
                    src={umurava || "/pp.jpeg"}
                    alt="Umurava"
                    className="h-8 w-auto"
                    width={85}
                    height={32}
                  />
                </div>

                {/* Project Content */}
                <div className="prose prose-sm sm:prose lg:prose-lg prose-gray max-w-none">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">
                    {challenge.title}
                  </h2>
                  <p className="text-gray-600 mb-6">{challenge.description}</p>

                  <section className="mb-6">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3">
                      Project Brief:
                    </h3>
                    <div
                      className="text-gray-600"
                      dangerouslySetInnerHTML={{ __html: challenge.brief }}
                    />
                  </section>

                  <section className="mb-6">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3">
                      Tasks:
                    </h3>
                    <div
                      className="text-gray-600"
                      dangerouslySetInnerHTML={{ __html: challenge.tasks }}
                    />
                  </section>
                </div>
              </div>

              {/* Right Column - Key Instructions */}
              <div className="w-full lg:w-80 shrink-0">
                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm lg:sticky lg:top-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">
                    Key Instructions:
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">
                    You are free to schedule the clarification call with the
                    team via this
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        icon: Mail,
                        title: challenge.contactEmail,
                        subtitle: "Contact Email",
                      },
                      {
                        icon: Monitor,
                        title: challenge.skillsNeeded?.join(", "),
                        subtitle: "Challenge Category",
                      },
                      {
                        icon: Calendar,
                        title: challenge.duration,
                        subtitle: "Duration",
                      },
                      {
                        icon: DollarSign,
                        title: challenge.moneyPrize,
                        subtitle: "Money Prize",
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                          <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#2C71F0]" />
                        </div>
                        <div>
                          <div className="font-medium text-sm sm:text-base">
                            {item.title}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-500">
                            {item.subtitle}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full mt-6 bg-[#2C71F0] text-sm sm:text-base">
                    Submit your work
                  </Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </WhatsAppModalProvider>
  );
};

export default ChallengeDetailsPage;
