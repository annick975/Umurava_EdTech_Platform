"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { WhatsAppModal } from "@/components/Community";
import {
  HomeIcon,
  Users,
  Settings,
  HelpCircle,
  Share2,
  LogOut,
  ClipboardList,
} from "lucide-react";

interface SidebarProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

const WhatsAppModalContext = React.createContext({
  openWhatsAppModal: () => {},
  isWhatsAppModalOpen: false,
});

export function WhatsAppModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = React.useState(false);

  const openWhatsAppModal = React.useCallback(() => {
    setIsWhatsAppModalOpen(true);
  }, []);

  return (
    <WhatsAppModalContext.Provider
      value={{ openWhatsAppModal, isWhatsAppModalOpen }}
    >
      {children}
      <WhatsAppModal
        isOpen={isWhatsAppModalOpen}
        onOpenChange={setIsWhatsAppModalOpen}
      />
    </WhatsAppModalContext.Provider>
  );
}

export function useWhatsAppModal() {
  return React.useContext(WhatsAppModalContext);
}

export function Sidebar({ className, isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const { openWhatsAppModal } = useWhatsAppModal();

  const handleCommunityClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openWhatsAppModal();
    onClose();
  };

  const handleNavigation = () => {
    onClose();
  };

  const getLinkClassName = (path: string) => {
    const isActive = pathname === path;
    return cn(
      "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
      isActive ? "bg-white text-[#2C71F0]" : "text-white/90 hover:bg-white/10"
    );
  };

  const SidebarContent = () => (
    <div className="flex h-full flex-col">
      <div className="mb-12">
        <Link href="/" onClick={handleNavigation}>
          <Image
            src="/umuravawork_logo.jpeg"
            alt="Umurava"
            className="h-8 w-auto"
            width={50}
            height={50}
          />
        </Link>
      </div>

      <nav className="space-y-1">
        <Link
          href="/Talent/Dashboard"
          className={getLinkClassName("/Talent/Dashboard")}
          onClick={handleNavigation}
        >
          <HomeIcon className="h-5 w-5" />
          <span>Dashboard</span>
        </Link>
        <Link
          href="/Talent/Challenges"
          className={getLinkClassName("/Talent/Challenges")}
          onClick={handleNavigation}
        >
          <ClipboardList className="h-6 w-6" />
          <span>Challenges & Hackathons</span>
        </Link>
        <button
          onClick={handleCommunityClick}
          className="w-full flex items-center gap-3 px-4 py-3 text-white/90 hover:bg-white/10 rounded-lg text-left"
        >
          <Users className="h-5 w-5" />
          <span>Community</span>
        </button>
      </nav>

      <div className="mt-auto space-y-1">
        <Link
          href="/settings"
          className={getLinkClassName("/settings")}
          onClick={handleNavigation}
        >
          <Settings className="h-5 w-5" />
          <span>Settings</span>
        </Link>
        <Link
          href="/help"
          className={getLinkClassName("/help")}
          onClick={handleNavigation}
        >
          <HelpCircle className="h-5 w-5" />
          <span>Help Center</span>
        </Link>
        <Link
          href="/refer"
          className={getLinkClassName("/refer")}
          onClick={handleNavigation}
        >
          <Share2 className="h-5 w-5" />
          <span>Refer family & friends</span>
        </Link>

        <div className="mt-6 border-t border-white/10 pt-6">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Image
                src="/pp.jpeg"
                alt="Profile"
                className="h-8 w-8 rounded-full"
                width={32}
                height={32}
              />
              <div className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#4339CA] bg-green-500" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">Hilaire Sh</p>
              <p className="text-xs text-white/70 truncate">hilaire@uidesign</p>
            </div>
            <button className="rounded-lg p-1.5 hover:bg-white/10">
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent
          side="left"
          className="w-80 border-r-0 bg-[#2C71F0] p-6 text-white"
        >
          <SidebarContent />
        </SheetContent>
      </Sheet>

      <div
        className={cn(
          "fixed hidden h-full w-80 bg-[#2C71F0] p-6 text-white md:block",
          className
        )}
      >
        <SidebarContent />
      </div>
    </>
  );
}
