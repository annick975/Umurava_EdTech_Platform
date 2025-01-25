"use client";

import type { FC } from "react";
import Image from "next/image";
import { Search, Bell, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <div className="sticky top-0 z-20 flex items-center justify-between bg-white border-b w-full px-4 lg:px-6 py-4">
      <div className="flex items-center gap-4 w-full max-w-md lg:max-w-lg">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={onMenuClick}
        >
          <Menu className="h-6 w-6" />
        </Button>
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search here..."
            className="pl-10 h-10 sm:h-11 bg-gray-50 border-gray-200 w-full"
          />
        </div>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-gray-600" />
        </Button>
        <div className="relative">
          <Image
            src="/pp.jpeg"
            alt="Profile"
            className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full"
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
