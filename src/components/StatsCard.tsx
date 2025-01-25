import { FC } from "react";
import { ChevronDown } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  percentage?: string;
  dateRange?: string;
  showDateSelector?: boolean;
}

const StatsCard: FC<StatsCardProps> = ({
  title,
  value,
  percentage,
  dateRange = "Last 30 days",
  showDateSelector = true,
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#4339CA]/10 rounded-lg flex items-center justify-center">
            <svg
              className="w-5 h-5 text-[#4339CA]"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="M20 6H4V8H20V6Z" fill="currentColor" />
              <path d="M20 10H4V12H20V10Z" fill="currentColor" />
              <path d="M20 14H4V16H20V14Z" fill="currentColor" />
            </svg>
          </div>
          <span className="text-gray-600 text-sm">{title}</span>
        </div>
        {showDateSelector && (
          <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
            {dateRange}
            <ChevronDown className="w-4 h-4 ml-1" />
          </button>
        )}
      </div>
      <div className="flex items-end gap-3">
        <span className="text-2xl font-semibold">{value}</span>
        {percentage && (
          <span className="text-green-500 text-sm mb-1">↑ {percentage}</span>
        )}
      </div>
    </div>
  );
};

export default StatsCard;
