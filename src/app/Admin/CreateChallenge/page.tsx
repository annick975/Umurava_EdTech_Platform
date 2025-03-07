"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, CheckCircle } from "lucide-react";
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
import { useCreateChallengeMutation } from "@/lib/api/challengesApi";
import { useRouter } from "next/navigation";

interface ApiError {
  status?: number;
  message?: string;
}

// Properly define FormErrors interface to match your form fields
interface FormErrors {
  title?: string;
  deadline?: string;
  duration?: string;
  moneyPrize?: string;
  contactEmail?: string;
  description?: string;
  brief?: string;
  tasks?: string;
  skillsNeeded?: string;
  otherSkill?: string;
  seniority?: string;
  [key: string]: string | undefined; // Index signature to allow any string key
}

export default function CreateChallengePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    deadline: "",
    duration: "",
    moneyPrize: "",
    contactEmail: "",
    description: "",
    brief: "",
    tasks: "",
    skillsNeeded: [] as string[],
    otherSkill: "",
    seniority: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [createChallenge, { isLoading }] = useCreateChallengeMutation();
  const router = useRouter();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Function to validate a single field
  const validateField = (name: string, value: any): string | null => {
    switch (name) {
      case "title":
        return !value?.trim() ? "Title is required" : null;
      case "deadline":
        if (!value) return "Deadline is required";

        // Check if deadline is future date
        const selectedDate = new Date(value);
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Reset time to start of day for fair comparison

        return selectedDate <= today ? "Deadline must be a future date" : null;

      case "duration":
        return !value?.trim() ? "Duration is required" : null;
      case "moneyPrize":
        return !value?.trim() ? "Prize is required" : null;
      case "contactEmail":
        if (!value?.trim()) return "Email is required";
        return !/^\S+@\S+\.\S+$/.test(value)
          ? "Please enter a valid email address"
          : null;
      case "description":
        if (!value?.trim()) return "Description is required";
        if (value.length < 10)
          return "Description must be at least 10 characters";
        if (value.length > 250)
          return "Description must be 250 characters or less";
        return null;
      case "brief":
        if (!value?.trim()) return "Brief is required";
        if (value.length < 10) return "Brief must be at least 10 characters";
        if (value.length > 50) return "Brief must be 50 characters or less";
        return null;
      case "tasks":
        if (!value?.trim()) return "Tasks are required";
        if (value.length < 10) return "Tasks must be at least 10 characters";
        if (value.length > 500) return "Tasks must be 500 characters or less";
        return null;
      case "skillsNeeded":
        return !value || value.length === 0
          ? "At least one skill is required"
          : null;
      case "otherSkill":
        return formData.skillsNeeded.includes("Other") && !value?.trim()
          ? "Please specify the other skill"
          : null;
      case "seniority":
        return !value ? "Seniority level is required" : null;
      default:
        return null;
    }
  };

  // Clear individual error when input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate field and clear error if valid
    const error = validateField(name, value);
    setFormErrors((prev) => ({
      ...prev,
      [name]: error || undefined,
    }));

    // Special case for otherSkill
    if (name === "otherSkill" && formData.skillsNeeded.includes("Other")) {
      const otherError = validateField("otherSkill", value);
      setFormErrors((prev) => ({
        ...prev,
        otherSkill: otherError || undefined,
      }));
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate select field and clear error if valid
    const error = validateField(name, value);
    setFormErrors((prev) => ({
      ...prev,
      [name]: error || undefined,
    }));
  };

  const handleSkillsChange = (skill: string) => {
    const updatedSkills = formData.skillsNeeded.includes(skill)
      ? formData.skillsNeeded.filter((s) => s !== skill)
      : [...formData.skillsNeeded, skill];

    setFormData((prev) => ({
      ...prev,
      skillsNeeded: updatedSkills,
    }));

    // Validate skills and clear error if valid
    const error = validateField("skillsNeeded", updatedSkills);
    setFormErrors((prev) => ({
      ...prev,
      skillsNeeded: error || undefined,
    }));

    // Handle "Other" skill special case
    if (skill === "Other") {
      if (!updatedSkills.includes("Other")) {
        // If "Other" was deselected, clear the otherSkill error
        setFormErrors((prev) => ({
          ...prev,
          otherSkill: undefined,
        }));
      } else if (!formData.otherSkill.trim()) {
        // If "Other" was selected but no value specified, show error
        setFormErrors((prev) => ({
          ...prev,
          otherSkill: "Please specify the other skill",
        }));
      }
    }
  };

  const validateFormData = (data: typeof formData): FormErrors => {
    const errors: FormErrors = {};

    // Check each field
    Object.entries(data).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) errors[key] = error;
    });

    return errors;
  };

  const [apiErrorMessage, setApiErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields at once
    const validationErrors = validateFormData(formData);
    setFormErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setApiErrorMessage("Please fix all errors before submitting");
      return;
    }

    setApiErrorMessage(null);

    try {
      console.log("Submitting challenge data:", formData);
      const result = await createChallenge(formData).unwrap();
      console.log("Challenge created successfully:", result);

      // Show success message
      setShowSuccessMessage(true);

      // Redirect after short delay to allow user to see success message
      setTimeout(() => {
        router.push("/Admin/Challenges");
      }, 2000);
    } catch (error: unknown) {
      const err = error as ApiError;
      console.error("Challenge creation failed:", {
        error: err,
        status: err.status,
        message: err.message,
      });

      let errorMessage = "Unknown error occurred when creating the challenge";
      if (err.status === 400) {
        errorMessage = "Invalid challenge data. Please check all fields.";
      } else if (err.status === 401) {
        errorMessage = "You are not authorized to create challenges.";
      } else if (err.status === 500) {
        errorMessage = "Server error. Please try again later.";
      }

      setApiErrorMessage(errorMessage);
      setShowSuccessMessage(false);
    }
  };

  // Function to get tomorrow's date for the min attribute
  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0]; // Format as YYYY-MM-DD
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
                {showSuccessMessage && (
                  <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Challenge created successfully! Redirecting...
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">Challenge/Hackathon Title</Label>
                    <Input
                      id="title"
                      name="title"
                      placeholder="Enter Title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className={`h-12 ${
                        formErrors.title ? "border-red-500" : ""
                      }`}
                    />
                    {formErrors.title && (
                      <p className="text-sm text-red-500 mt-1">
                        {formErrors.title}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="deadline">Deadline</Label>
                      <Input
                        id="deadline"
                        type="date"
                        name="deadline"
                        value={formData.deadline}
                        min={getTomorrowDate()} // Set minimum date to tomorrow
                        onChange={handleInputChange}
                        className={`h-12 ${
                          formErrors.deadline ? "border-red-500" : ""
                        }`}
                      />
                      {formErrors.deadline && (
                        <p className="text-sm text-red-500 mt-1">
                          {formErrors.deadline}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="duration">Duration</Label>
                      <Input
                        id="duration"
                        name="duration"
                        placeholder="Duration"
                        value={formData.duration}
                        onChange={handleInputChange}
                        className={`h-12 ${
                          formErrors.duration ? "border-red-500" : ""
                        }`}
                      />
                      {formErrors.duration && (
                        <p className="text-sm text-red-500 mt-1">
                          {formErrors.duration}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="prize">Money Prize</Label>
                      <Input
                        id="moneyPrize"
                        name="moneyPrize"
                        placeholder="Prize"
                        value={formData.moneyPrize}
                        onChange={handleInputChange}
                        className={`h-12 ${
                          formErrors.moneyPrize ? "border-red-500" : ""
                        }`}
                      />
                      {formErrors.moneyPrize && (
                        <p className="text-sm text-red-500 mt-1">
                          {formErrors.moneyPrize}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Contact Email</Label>
                      <Input
                        id="contactEmail"
                        type="email"
                        name="contactEmail"
                        placeholder="Email"
                        value={formData.contactEmail}
                        onChange={handleInputChange}
                        className={`h-12 ${
                          formErrors.contactEmail ? "border-red-500" : ""
                        }`}
                      />
                      {formErrors.contactEmail && (
                        <p className="text-sm text-red-500 mt-1">
                          {formErrors.contactEmail}
                        </p>
                      )}
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
                            formData.skillsNeeded.includes(skill)
                              ? "default"
                              : "outline"
                          }
                          onClick={() => handleSkillsChange(skill)}
                          className={`justify-start ${
                            formErrors.skillsNeeded &&
                            !formData.skillsNeeded.length
                              ? "border-red-500"
                              : ""
                          }`}
                        >
                          {skill}
                        </Button>
                      ))}
                    </div>
                    {formErrors.skillsNeeded && (
                      <p className="text-sm text-red-500 mt-1">
                        {formErrors.skillsNeeded}
                      </p>
                    )}

                    {formData.skillsNeeded.includes("Other") && (
                      <div className="mt-2">
                        <Input
                          name="otherSkill"
                          placeholder="Specify other skill"
                          value={formData.otherSkill}
                          onChange={handleInputChange}
                          className={
                            formErrors.otherSkill ? "border-red-500" : ""
                          }
                        />
                        {formErrors.otherSkill && (
                          <p className="text-sm text-red-500 mt-1">
                            {formErrors.otherSkill}
                          </p>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="seniorityLevel">Seniority Level</Label>
                    <Select
                      value={formData.seniority}
                      onValueChange={(value) =>
                        handleSelectChange("seniority", value)
                      }
                    >
                      <SelectTrigger
                        className={`h-12 ${
                          formErrors.seniority ? "border-red-500" : ""
                        }`}
                      >
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
                    {formErrors.seniority && (
                      <p className="text-sm text-red-500 mt-1">
                        {formErrors.seniority}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Project Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      placeholder="Enter text here... (minimum 10 characters)"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={4}
                      maxLength={250}
                      className={`min-h-[120px] ${
                        formErrors.description ? "border-red-500" : ""
                      }`}
                    />
                    <div className="flex justify-between">
                      <p className="text-xs text-gray-500">
                        Min 10, max 250 characters
                      </p>
                      <p className="text-xs text-gray-500">
                        {formData.description.length}/250
                      </p>
                    </div>
                    {formErrors.description && (
                      <p className="text-sm text-red-500 mt-1">
                        {formErrors.description}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="brief">Project Brief</Label>
                    <Textarea
                      id="brief"
                      name="brief"
                      placeholder="Enter text here... (minimum 10 characters)"
                      value={formData.brief}
                      onChange={handleInputChange}
                      rows={3}
                      maxLength={50}
                      className={`min-h-[120px] ${
                        formErrors.brief ? "border-red-500" : ""
                      }`}
                    />
                    <div className="flex justify-between">
                      <p className="text-xs text-gray-500">
                        Min 10, max 50 characters
                      </p>
                      <p className="text-xs text-gray-500">
                        {formData.brief.length}/50
                      </p>
                    </div>
                    {formErrors.brief && (
                      <p className="text-sm text-red-500 mt-1">
                        {formErrors.brief}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tasks">Project Description & Tasks</Label>
                    <Textarea
                      id="tasks"
                      name="tasks"
                      placeholder="Enter text here... (minimum 10 characters)"
                      value={formData.tasks}
                      onChange={handleInputChange}
                      rows={6}
                      maxLength={500}
                      className={`min-h-[120px] ${
                        formErrors.tasks ? "border-red-500" : ""
                      }`}
                    />
                    <div className="flex justify-between">
                      <p className="text-xs text-gray-500">
                        Min 10, max 500 characters
                      </p>
                      <p className="text-xs text-gray-500">
                        {formData.tasks.length}/500
                      </p>
                    </div>
                    {formErrors.tasks && (
                      <p className="text-sm text-red-500 mt-1">
                        {formErrors.tasks}
                      </p>
                    )}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1 h-12 border-[#2B71F0] text-[#2B71F0] hover:bg-[#2563EB]/5"
                      onClick={() => router.push("/Admin/Challenges")}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1 h-12 bg-[#2B71F0] hover:bg-[#2563EB]/90"
                      disabled={isLoading || showSuccessMessage}
                    >
                      {isLoading ? "Creating..." : "Create Challenge"}
                    </Button>
                  </div>

                  {apiErrorMessage && (
                    <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg">
                      {apiErrorMessage}
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </WhatsAppModalProvider>
  );
}
