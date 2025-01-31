"use client";

import { useState } from "react";
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

export default function CreateChallengePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    deadline: "",
    duration: "",
    prize: "",
    email: "",
    description: "",
    brief: "",
    tasks: "",
    skills: [] as string[],
    otherSkill: "",
    seniorityLevel: "",
  });

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
      const updatedSkills = prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill];
      return { ...prev, skills: updatedSkills };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const skillOptions = [
    "UX/UI Design",
    "Web Development",
    "Mobile Development",
    "Data Science",
    "Machine Learning",
    "Other",
  ];
  const seniorityLevels = ["Junior", "Intermediate", "Senior", "Lead"];

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
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-8 text-sm">
              <Link
                href="/Admin/Challenges"
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
              <span className="text-[#2B71F0]">Create New Challenge</span>
            </div>

            {/* Form Card */}
            <Card className="max-w-3xl mx-auto p-6">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-semibold">
                  Create New Challenge
                </CardTitle>
                <CardDescription>
                  Fill out these details to build your broadcast
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">Challenge/Hackathon Title</Label>
                    <Input
                      id="title"
                      name="title"
                      placeholder="Enter Title"
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
                        placeholder="Date"
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
                        placeholder="Duration"
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
                        placeholder="Prize"
                        value={formData.prize}
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
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Skills Needed</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {skillOptions.map((skill) => (
                        <Button
                          key={skill}
                          type="button"
                          variant={
                            formData.skills.includes(skill)
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
                    {formData.skills.includes("Other") && (
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
                    <Label htmlFor="seniorityLevel">Seniority Level</Label>
                    <Select
                      name="seniorityLevel"
                      value={formData.seniorityLevel}
                      onValueChange={(value) =>
                        handleSelectChange("seniorityLevel", value)
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
                      placeholder="Enter text here..."
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={4}
                      maxLength={250}
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
                      placeholder="Enter text here..."
                      value={formData.brief}
                      onChange={handleInputChange}
                      rows={3}
                      maxLength={50}
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
                      placeholder="Enter text here..."
                      value={formData.tasks}
                      onChange={handleInputChange}
                      rows={6}
                      maxLength={500}
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
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1 h-12 bg-[#2B71F0] hover:bg-[#2563EB]/90"
                    >
                      Create Challenge
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
