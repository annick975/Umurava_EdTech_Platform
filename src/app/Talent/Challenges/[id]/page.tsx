"use client";

import { useState } from "react";
import type { FC } from "react";
import { Sidebar, WhatsAppModalProvider } from "@/components/Sidebar";
import Link from "next/link";
import Image from "next/image";
import umurava from "@/../../public/umurava.png";
import { Mail, Monitor, Calendar, DollarSign, ChevronLeft } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const ChallengeDetailsPage: FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

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
            <nav className="flex flex-wrap items-center gap-2 mb-4 sm:mb-6 text-sm">
              <Link
                href="/Talent/Challenges"
                className="flex items-center text-gray-600 hover:text-[#2C71F0] transition-colors"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Go Back
              </Link>
              <Separator
                orientation="vertical"
                className="h-4 mx-2 hidden sm:block"
              />
              <span className="text-gray-400 hidden sm:inline">
                Challenges & Hackathons
              </span>
              <Separator
                orientation="vertical"
                className="h-4 mx-2 hidden sm:block"
              />
              <span className="text-gray-600 text-xs sm:text-sm">
                Design a Dashboard for SokoFund
              </span>
            </nav>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Left Column - Project Details */}
              <div className="flex-1">
                <div className="bg-[#2C71F0] rounded-xl mb-6 aspect-video flex items-center justify-center">
                  <Image
                    src={umurava || "/placeholder.svg"}
                    alt="Umurava"
                    className="h-8 w-auto"
                    width={85}
                    height={85}
                  />
                </div>

                <div className="prose prose-sm sm:prose lg:prose-lg prose-gray max-w-none">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">
                    Project Brief: Payroll and HR Management System
                  </h2>
                  <p className="text-gray-600 mb-6">
                    A Fintech company that is developing a Digital Financial
                    Platform designed for businesses and their workforce in
                    Africa is partnering with Umurava to run a Skills Challenge
                    for Product Design. The Fintech Company offers Payroll
                    Management System to Employers and Embedded Financial
                    services and products to Employees and Gig Workers across
                    Africa.
                  </p>

                  <section className="mb-6">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3">
                      Tasks:
                    </h3>
                    <h4 className="text-base sm:text-lg lg:text-xl font-semibold mb-2">
                      Product Requirements
                    </h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>UX research to understand Project Requirements</li>
                      <li>Understanding User Needs</li>
                      <li>Understanding Business Goals</li>
                      <li>Determine interaction between users</li>
                      <li>Requirements Catalog</li>
                    </ul>
                  </section>

                  <section className="mb-6">
                    <h4 className="text-base sm:text-lg lg:text-xl font-semibold mb-2">
                      Product Design:
                    </h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>User Interface Design for each step</li>
                      <li>
                        Creating wireframes to outline the basic structure and
                        layout of the web and mobile app
                      </li>
                      <li>
                        Designing visually appealing and user-friendly
                        interfaces for the web and mobile apps focusing on
                        usability and user experience.
                      </li>
                      <li>
                        Ensuring the web application works seamlessly across
                        web, mobile and tablet devices.
                      </li>
                      <li>
                        Provide a feedback session for in-development guidance.
                      </li>
                    </ul>
                  </section>

                  <section className="mb-6">
                    <h4 className="text-base sm:text-lg lg:text-xl font-semibold mb-2">
                      Deliverables:
                    </h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>Requirements Catalog and User Interaction Diagram</li>
                      <li>User Interface Mockups</li>
                      <li>Payroll and HR System Design Completed</li>
                    </ul>
                  </section>

                  <section className="mb-6">
                    <h4 className="text-base sm:text-lg lg:text-xl font-semibold mb-2">
                      Submission:
                    </h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>
                        The product Designer will provide all documents and
                        deliverables to the client before the review meetings.
                      </li>
                    </ul>
                  </section>

                  <section className="mb-6">
                    <h4 className="text-base sm:text-lg lg:text-xl font-semibold mb-2">
                      NOTE:
                    </h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>
                        Find Product Requirements Summary and Features
                        Description for SawaPay{" "}
                        <Link
                          href="#"
                          className="text-[#2C71F0] hover:underline"
                        >
                          HERE
                        </Link>
                      </li>
                    </ul>
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
                        title: "talent@umurava.africa",
                        subtitle: "Contact Email",
                      },
                      {
                        icon: Monitor,
                        title: "Web design",
                        subtitle: "Challenge Category",
                      },
                      {
                        icon: Calendar,
                        title: "7 Days",
                        subtitle: "Duration",
                      },
                      {
                        icon: DollarSign,
                        title: "$150 - $400",
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
