import type React from "react";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TypeIcon as type, type LucideIcon } from "lucide-react";

interface StatsCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  percentage: string;
  period: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  icon: Icon,
  title,
  value,
  percentage,
  period,
}) => {
  return (
    <Card className="p-4 pb-12 border-[#E4E7EC]">
      <div className="flex justify-end mb-4 text-[#98A2B3]">
        <Select defaultValue={period.toLowerCase().replace(" ", "-")}>
          <SelectTrigger className="w-[140px] h-9 text-xs border-0 bg-gray-50">
            <SelectValue placeholder={period} />
          </SelectTrigger>
          <SelectContent className="text-[#98A2B3]">
            <SelectItem value="this-week">This Week</SelectItem>
            <SelectItem value="last-week">Last 30 days</SelectItem>
            <SelectItem value="this-month">Last Year</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-[#D0E0FC] rounded-full flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 text-[#2B71F0]" />
        </div>
        <div className="space-y-1">
          <p className="text-sm text-[#667185]">{title}</p>
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-semibold text-[#101928]">
              {value}
            </span>
            <span className="text-sm text-[#2B71F0] bg-[#E7F6EC] rounded-md">
              ↑ {percentage}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default StatsCard;
