"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
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
import {
  useGetChallengeByIdQuery,
  useDeleteChallengeMutation,
} from "@/lib/api/challengesApi";

const ChallengeDetailsPage = () => {
  const router = useRouter();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteChallenge, { isLoading: isDeleting }] =
    useDeleteChallengeMutation();

const handleEdit = () => {
  router.push(`/Admin/UpdateChallenge/${id}`);
};

  const handleDelete = async () => {
    try {
      await deleteChallenge(id as string).unwrap();
      router.push("/Admin/Challenges");
    } catch (error) {
      console.error("Failed to delete challenge:", error);
    }
  };
  const DeleteConfirmDialog = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
        <h3 className="text-lg font-semibold mb-4">Confirm Delete</h3>
        <p className="text-gray-600 mb-6">
          Are you sure you want to delete this challenge? This action cannot be
          undone.
        </p>
        <div className="flex gap-4">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => setShowDeleteConfirm(false)}
            disabled={isDeleting}
          >
            Cancel
          </Button>
          <Button
            variant="destructive"
            className="flex-1 bg-[#E5533C] hover:bg-red-600"
            onClick={handleDelete}
            disabled={isDeleting}
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </Button>
        </div>
      </div>
    </div>
  );
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
                  href="/Admin/Challenges"
                  className="flex items-center text-gray-600 hover:text-[#2C71F0] transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Go Back
                </Link>
                <span className="text-gray-400">/</span>
                <Link href="/Admin/Challenges" className="text-gray-500">
                  Challenges & Hackathons
                </Link>
                <span className="text-gray-400">/</span>
                <span className="text-[#2C71F0]">{challenge.title}</span>
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
                        title: challenge.contactEmail,
                        subtitle: "Contact Email",
                      },
                      {
                        icon: Monitor,
                        title: challenge.skills?.join(", "),
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
                      onClick={() => setShowDeleteConfirm(true)}
                      disabled={isDeleting}
                    >
                      {isDeleting ? "Deleting..." : "Delete"}
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 bg-[#2B71F0] text-[#FFFFFF] hover:bg-[#2C71F0]/5 h-12"
                      onClick={handleEdit}
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
      {showDeleteConfirm && <DeleteConfirmDialog />}
    </WhatsAppModalProvider>
  );
};

export default ChallengeDetailsPage;
