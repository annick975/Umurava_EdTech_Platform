"use client";

import { useState } from "react";
import type { FC } from "react";
import { Sidebar, WhatsAppModalProvider } from "@/components/Sidebar_Admin";
import Link from "next/link";
import Image from "next/image";
import umurava from "@/../../public/umurava.png";
import {
  Mail,
  Monitor,
  Calendar,
  DollarSign,
  ChevronLeft,
  Search,
  Filter,
} from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const ChallengeDetailsPage: FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const participants = [
    {
      name: "Hilaire Sh",
      role: "Product Designer",
      image: "/pp.jpeg",
      online: true,
    },
    {
      name: "Christian Manzi",
      role: "UI/UX Designer",
      image: "/pp.jpeg",
      online: true,
    },
    {
      name: "Jolly Mutesi",
      role: "Content Creator",
      image: "/pp.jpeg",
      online: true,
    },
    {
      name: "Dr. Samuel Smith",
      role: "Mental Health Professional",
      image: "/pp.jpeg",
      online: true,
    },
    {
      name: "Dr. Lily Chen",
      role: "Dermatologist",
      image: "/pp.jpeg",
      online: true,
    },
  ];

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
                  href="/challenges"
                  className="flex items-center text-gray-600 hover:text-[#2C71F0] transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Go Back
                </Link>
                <span className="text-gray-400">/</span>
                <Link href="/challenges" className="text-gray-500">
                  Challenges & Hackathons
                </Link>
                <span className="text-gray-400">/</span>
                <span className="text-[#2C71F0]">
                  Design a Dashboard for Sokofund
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    type="search"
                    placeholder="Search"
                    className="pl-9 w-[200px] h-9"
                  />
                </div>
                <Button variant="outline" size="sm" className="h-9">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
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
                  {/* ... Rest of the content remains the same ... */}
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

              {/* Right Column - Instructions and Participants */}
              <div className="w-full lg:w-80 shrink-0 space-y-6">
                {/* Key Instructions Card */}
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">
                    Key Instructions:
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">
                    You are free to schedule the clarification call with the
                    team via this
                  </p>

                  <div className="space-y-4 mb-6">
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
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-[#2C71F0]" />
                        </div>
                        <div>
                          <div className="font-medium">{item.title}</div>
                          <div className="text-sm text-gray-500">
                            {item.subtitle}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button
                      variant="destructive"
                      className="flex-1 bg-[#E5533C] hover:bg-red-600 h-12"
                    >
                      Delete
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1  bg-[#2B71F0] text-[#FFFFFF] hover:bg-[#2C71F0]/5 h-12"
                    >
                      Edit
                    </Button>
                  </div>
                </Card>

                {/* Participants Card */}
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium">Participants</h4>
                    <span className="text-xs bg-[#2B71F0] text-[#FFFFFF] px-2 py-1 rounded-full">
                      250
                    </span>
                  </div>

                  <div className="space-y-3 mb-4">
                    {participants.map((participant, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="relative">
                          <Image
                            src={participant.image || "/pp.jpeg"}
                            alt={participant.name}
                            width={32}
                            height={32}
                            className="rounded-full"
                          />
                          {participant.online && (
                            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white" />
                          )}
                        </div>
                        <div>
                          <div className="text-sm font-medium">
                            {participant.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {participant.role}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className="w-full bg-[#2B71F0] text-[#FFFFFF] hover:bg-[#2C71F0]/5 h-12"
                  >
                    View All
                  </Button>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </div>
    </WhatsAppModalProvider>
  );
};

export default ChallengeDetailsPage;
