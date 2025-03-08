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
      <div className="bg-white rounded-lg p-4 w-72 mx-auto">
        <h3 className="text-sm font-semibold mb-2">Confirm Delete</h3>
        <p className="text-gray-600 text-xs mb-3">
          Are you sure you want to delete this challenge? This action cannot be
          undone.
        </p>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="flex-1 text-xs h-8"
            onClick={() => setShowDeleteConfirm(false)}
            disabled={isDeleting}
          >
            Cancel
          </Button>
          <Button
            variant="destructive"
            className="flex-1 bg-[#E5533C] hover:bg-red-600 text-xs h-8"
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

  // Add proper type for the processHtml function
  const processHtml = (html: string): string => {
    if (!html) return "";

    // Type the temporary div properly
    const tempDiv = document.createElement("div") as HTMLDivElement;
    tempDiv.innerHTML = html;

    // Type the NodeList properly
    const problematicElements = tempDiv.querySelectorAll<HTMLElement>(
      "pre, code, table, img, iframe, div"
    );

    // Apply style to each element with proper typing
    problematicElements.forEach((el: HTMLElement) => {
      el.style.maxWidth = "100%";
      el.style.wordBreak = "break-word";
      el.style.whiteSpace = "pre-wrap";
      el.style.overflowWrap = "break-word";

      // For tables
      if (el instanceof HTMLTableElement) {
        el.style.display = "block";
        el.style.overflow = "auto";
      }

      // For images
      if (el instanceof HTMLImageElement) {
        el.style.height = "auto";
      }
    });

    return tempDiv.innerHTML;
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#2B71F0]"></div>
      </div>
    );
  }

  if (isError || !challengeData) {
    return (
      <div className="text-center text-red-500">Error loading challenge</div>
    );
  }

  const challenge = challengeData.challenge;

  // Process HTML content
  const processedBrief = processHtml(challenge.brief);
  const processedTasks = processHtml(challenge.tasks);

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
      <style jsx global>{`
        /* Force all elements to respect container width */
        * {
          max-width: 100% !important;
          box-sizing: border-box !important;
        }

        /* Handle long words and URLs */
        p,
        div,
        span,
        a,
        li,
        td,
        th,
        pre,
        code {
          word-break: break-word !important;
          overflow-wrap: break-word !important;
          white-space: normal !important;
        }

        /* Make tables responsive */
        table {
          display: block !important;
          width: 100% !important;
          overflow-x: auto !important;
        }

        /* Make images responsive */
        img {
          height: auto !important;
          max-width: 100% !important;
        }

        /* Handle pre and code blocks */
        pre,
        code {
          white-space: pre-wrap !important;
          max-width: 100% !important;
        }

        /* Handle iframes */
        iframe {
          max-width: 100% !important;
        }

        /* Adjust font sizes */
        .prose {
          font-size: 0.875rem !important;
        }

        .prose h1 {
          font-size: 1.35rem !important;
        }
        .prose h2 {
          font-size: 1.25rem !important;
        }
        .prose h3 {
          font-size: 1.125rem !important;
        }
        .prose h4,
        .prose h5,
        .prose h6 {
          font-size: 1rem !important;
        }
        .prose p,
        .prose li {
          font-size: 0.875rem !important;
        }
      `}</style>
      <div className="flex min-h-screen bg-[#F8F9FB]">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <div className="flex-1 w-full md:ml-80">
          <Header onMenuClick={toggleSidebar} />

          <main className="p-2 sm:p-3 lg:p-4">
            {/* Breadcrumb */}
            <nav className="flex flex-wrap items-center justify-between w-full mb-2">
              <div className="flex items-center gap-2 text-xs">
                <Link
                  href="/Admin/Challenges"
                  className="flex items-center text-gray-600 hover:text-[#2C71F0] transition-colors"
                >
                  <ChevronLeft className="w-3 h-3 mr-1" />
                  Go Back
                </Link>
                <span className="text-gray-400">/</span>
                <Link href="/Admin/Challenges" className="text-gray-500">
                  Challenges & Hackathons
                </Link>
                <span className="text-gray-400">/</span>
                <span className="text-[#2C71F0] truncate max-w-[150px]">
                  {challenge.title}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400" />
                  <Input
                    type="search"
                    placeholder="Search"
                    className="pl-7 w-[140px] h-7 text-xs"
                  />
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-7 text-xs px-2"
                >
                  <Filter className="w-3 h-3 mr-1" />
                  Filter
                </Button>
              </div>
            </nav>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row gap-3">
              {/* Left Column - Project Details */}
              <div className="flex-1 overflow-hidden">
                <div className="bg-[#2C71F0] rounded-lg mb-3 aspect-video flex items-center justify-center">
                  <Image
                    src={umurava || "/pp.jpeg"}
                    alt="Umurava"
                    className="h-5 w-auto"
                    width={85}
                    height={32}
                  />
                </div>

                {/* Project Content */}
                <div className="prose max-w-none">
                  <h2 className="text-base font-semibold mb-2 truncate">
                    {challenge.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-2">
                    {challenge.description}
                  </p>

                  <section className="mb-3">
                    <h3 className="text-sm font-semibold mb-1">
                      Project Brief:
                    </h3>
                    <div
                      className="text-gray-600 text-sm max-h-[250px] overflow-y-auto"
                      style={{
                        maxWidth: "100%",
                        wordBreak: "break-word",
                        overflowWrap: "break-word",
                      }}
                      dangerouslySetInnerHTML={{ __html: processedBrief }}
                    />
                  </section>

                  <section className="mb-3">
                    <h3 className="text-sm font-semibold mb-1">Tasks:</h3>
                    <div
                      className="text-gray-600 text-sm max-h-[250px] overflow-y-auto"
                      style={{
                        maxWidth: "100%",
                        wordBreak: "break-word",
                        overflowWrap: "break-word",
                      }}
                      dangerouslySetInnerHTML={{ __html: processedTasks }}
                    />
                  </section>
                </div>
              </div>

              {/* Right Column - Instructions and Participants */}
              <div className="w-full lg:w-60 shrink-0 space-y-3">
                {/* Key Instructions Card */}
                <Card className="p-3">
                  <h3 className="text-sm font-semibold mb-2">
                    Key Instructions:
                  </h3>
                  <p className="text-gray-600 text-xs mb-3">
                    You are free to schedule the clarification call with the
                    team via this
                  </p>

                  <div className="space-y-2 mb-3">
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
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-blue-50 rounded-lg flex items-center justify-center">
                          <item.icon className="w-3 h-3 text-[#2C71F0]" />
                        </div>
                        <div className="overflow-hidden">
                          <div className="font-medium text-xs truncate">
                            {item.title}
                          </div>
                          <div className="text-xs text-gray-500">
                            {item.subtitle}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="destructive"
                      className="flex-1 bg-[#E5533C] hover:bg-red-600 h-8 text-xs"
                      onClick={() => setShowDeleteConfirm(true)}
                      disabled={isDeleting}
                    >
                      {isDeleting ? "Deleting..." : "Delete"}
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 bg-[#2B71F0] text-[#FFFFFF] hover:bg-[#2C71F0]/5 h-8 text-xs"
                      onClick={handleEdit}
                    >
                      Edit
                    </Button>
                  </div>
                </Card>

                {/* Participants Card */}
                <Card className="p-3">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-xs">Participants</h4>
                    <span className="text-xs bg-[#2B71F0] text-[#FFFFFF] px-2 py-0.5 rounded-full">
                      250
                    </span>
                  </div>

                  <div className="space-y-1.5 mb-2">
                    {participants.slice(0, 3).map((participant, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="relative">
                          <Image
                            src={participant.image || "/pp.jpeg"}
                            alt={participant.name}
                            width={20}
                            height={20}
                            className="rounded-full"
                          />
                          {participant.online && (
                            <div className="absolute bottom-0 right-0 w-1 h-1 bg-green-500 rounded-full border border-white" />
                          )}
                        </div>
                        <div>
                          <div className="text-xs font-medium">
                            {participant.name}
                          </div>
                          <div className="text-[10px] text-gray-500">
                            {participant.role}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className="w-full bg-[#2B71F0] text-[#FFFFFF] hover:bg-[#2C71F0]/5 h-8 text-xs"
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
