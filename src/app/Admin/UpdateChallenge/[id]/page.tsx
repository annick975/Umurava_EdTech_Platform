"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Sidebar, WhatsAppModalProvider } from "@/components/Sidebar_Admin";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  useUpdateChallengeMutation,
  useGetChallengeByIdQuery,
} from "@/lib/api/challengesApi";
import type { Challenge } from "@/lib/api/challengesApi";

export default function UpdateChallengePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { id } = useParams();
  const router = useRouter();
  const { data: challengeData, isLoading: isLoadingChallenge } =
    useGetChallengeByIdQuery(id as string);
  const [updateChallenge, { isLoading: isUpdating }] =
    useUpdateChallengeMutation();

  const [formData, setFormData] = useState<Partial<Challenge>>({
    title: "",
    deadline: "",
    duration: "",
    moneyPrize: "",
    contactEmail: "",
    description: "",
    brief: "",
    tasks: "",
    skillsNeeded: [],
    otherSkill: "",
    seniority: "",
  });

  useEffect(() => {
    if (challengeData?.challenge) {
      // Access the nested challenge object from the response
      const challenge = challengeData.challenge;
      setFormData({
        title: challenge.title || "",
        deadline: challenge.deadline?.split("T")[0] || "", // Format date for input
        duration: challenge.duration || "",
        moneyPrize: challenge.moneyPrize || "",
        contactEmail: challenge.contactEmail || "",
        description: challenge.description || "",
        brief: challenge.brief || "",
        tasks: challenge.tasks || "",
        skillsNeeded: challenge.skillsNeeded || [],
        seniority: Array.isArray(challenge.seniority)
          ? challenge.seniority[0]
          : challenge.seniority || "",
        otherSkill: "",
      });
    }
  }, [challengeData]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSkillsChange = (skill: string) => {
    setFormData((prev) => {
      const updatedSkills = prev.skillsNeeded?.includes(skill)
        ? prev.skillsNeeded.filter((s) => s !== skill)
        : [...(prev.skillsNeeded || []), skill];
      return { ...prev, skillsNeeded: updatedSkills };
    });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    await updateChallenge({
      id: id as string,
      challenge: {
        ...formData,
        deadline: `${formData.deadline}T00:00:00.000Z`, // Add time component to the date
      },
    }).unwrap();
    router.push(`/Admin/Challenges/${id}`);
  } catch (error) {
    console.error("Failed to update challenge:", error);
  }
};

  const skillOptions = [
    "UX/UI Design",
    "DSA",
    "Mobile Design",
    "Data Science",
    "Machine Learning",
    "Other",
  ];
  const seniorityLevels = ["Junior", "Mid", "Senior"];

  if (isLoadingChallenge) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg text-gray-600">Loading challenge data...</p>
      </div>
    );
  }

  return (
    <WhatsAppModalProvider>
      <div className="flex min-h-screen bg-[#F8F9FB]">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        <div className="flex-1 md:ml-80">
          <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />

          <main className="p-4 sm:p-6 lg:p-8">
            <div className="flex items-center gap-2 mb-8 text-sm">
              <Link
                href={`/Admin/Challenges/${id}`}
                className="flex items-center text-gray-500 hover:text-gray-700"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </Link>
              <span className="text-gray-400">/</span>
              <Link
                href="/Admin/Challenges"
                className="text-gray-500 hover:text-gray-700"
              >
                Challenges & Hackathons
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-[#2B71F0]">Update Challenge</span>
            </div>

            <Card className="max-w-3xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-semibold">
                  Update Challenge
                </CardTitle>
                <CardDescription>
                  Update the details of your challenge
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">Challenge Title</Label>
                    <Input
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="h-12"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="deadline">Deadline</Label>
                      <Input
                        id="deadline"
                        type="date"
                        name="deadline"
                        value={formData.deadline}
                        onChange={handleInputChange}
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="duration">Duration</Label>
                      <Input
                        id="duration"
                        name="duration"
                        value={formData.duration}
                        onChange={handleInputChange}
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="prize">Money Prize</Label>
                      <Input
                        id="prize"
                        name="prize"
                        value={formData.moneyPrize}
                        onChange={handleInputChange}
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Contact Email</Label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.contactEmail}
                        onChange={handleInputChange}
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Skills Needed</Label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {skillOptions.map((skill) => (
                        <Button
                          key={skill}
                          type="button"
                          variant={
                            formData.skillsNeeded?.includes(skill)
                              ? "default"
                              : "outline"
                          }
                          onClick={() => handleSkillsChange(skill)}
                          className="justify-start"
                        >
                          {skill}
                        </Button>
                      ))}
                    </div>
                    {formData.skillsNeeded?.includes("Other") && (
                      <Input
                        name="otherSkill"
                        placeholder="Specify other skill"
                        value={formData.otherSkill}
                        onChange={handleInputChange}
                        className="mt-2"
                      />
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="seniority">Seniority Level</Label>
                    <Select
                      value={formData.seniority}
                      onValueChange={(value) =>
                        handleSelectChange("seniority", value)
                      }
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select seniority level" />
                      </SelectTrigger>
                      <SelectContent>
                        {seniorityLevels.map((level) => (
                          <SelectItem key={level} value={level}>
                            {level}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Project Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={4}
                      className="min-h-[120px]"
                    />
                    <p className="text-xs text-gray-500">
                      Keep this simple of 250 character
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="brief">Project Brief</Label>
                    <Textarea
                      id="brief"
                      name="brief"
                      value={formData.brief}
                      onChange={handleInputChange}
                      rows={3}
                      className="min-h-[120px]"
                    />
                    <p className="text-xs text-gray-500">
                      Keep this simple of 50 character
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tasks">Project Description & Tasks</Label>
                    <Textarea
                      id="tasks"
                      name="tasks"
                      value={formData.tasks}
                      onChange={handleInputChange}
                      rows={6}
                      className="min-h-[120px]"
                    />
                    <p className="text-xs text-gray-500">
                      Keep this simple of 500 character
                    </p>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1 h-12 border-[#2B71F0] text-[#2B71F0] hover:bg-[#2563EB]/5"
                      onClick={() => router.back()}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1 h-12 bg-[#2B71F0] hover:bg-[#2563EB]/90"
                      disabled={isUpdating}
                    >
                      {isUpdating ? "Updating..." : "Update Challenge"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </WhatsAppModalProvider>
  );
}
