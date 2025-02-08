import Link from "next/link";
import Image from "next/image";
import type { FC } from "react";
import logo from "@/../../public/umurava.png";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Challenge } from "@/lib/api/challengesApi";

interface SkillBadgeProps {
  label: string;
}

const SkillBadge: FC<SkillBadgeProps> = ({ label }) => (
  <Badge
    variant="secondary"
    className="text-[#2C71F0] hover:bg-blue-50 border border-[#2C71F0] rounded-lg py-1 text-xs sm:text-sm"
  >
    {label}
  </Badge>
);

const ChallengeCard: FC<Challenge> = ({
  id,
  title,
  skillsNeeded,
  seniority,
  duration,
  status,
}) => {
  return (
    <div className="bg-white rounded-xl p-3 sm:p-4 border border-[#E4E7EC]">
      <div className="relative mb-4">
        <div className="w-full aspect-video bg-[#2C71F0] rounded-xl flex items-center justify-center">
          <Image
            src={logo || "/placeholder.svg"}
            alt="Umurava"
            className="h-6 sm:h-8 w-auto"
            width={50}
            height={50}
          />
        </div>
   
        <Badge className="absolute top-2 right-2 bg-[#0F973D] hover:bg-green-600 text-xs sm:text-sm px-3 sm:px-5 py-1 rounded-full font-medium">
          {" "}
          Open{" "}
        </Badge>
      </div>

      <h3 className="text-base sm:text-lg font-medium mb-4 line-clamp-2">
        {title}
      </h3>

      <div className="mb-4">
        <p className="text-xs sm:text-sm font-medium text-black mb-2">
          Skills Needed:
        </p>
        <div className="flex flex-wrap gap-2 sm:gap-4">
          {skillsNeeded?.map((skill, index) => (
            <SkillBadge key={index} label={skill} />
          ))}
        </div>
      </div>

      <div className="mb-2">
        <p className="text-xs sm:text-sm">
          <span className="text-black font-medium">Seniority Level: </span>
          <span className="text-gray-600">{seniority?.[0]}</span>
        </p>
      </div>

      <div className="mb-4 py-2">
        <p className="text-xs sm:text-sm">
          <span className="text-black font-medium">Timeline: </span>
          <span className="text-gray-600">{duration}</span>
        </p>
      </div>
      <div className="border-b border-[#E4E7EC] mb-4 -mx-4"></div>
      <div>
        <Link href={`/Admin/Challenges/${id}`}>
          <Button className="w-full sm:w-auto bg-[#2C71F0] hover:bg-[#2C71F0]/90 text-white px-4 sm:px-8">
            View Challenge
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ChallengeCard;
