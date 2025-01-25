"use client";

import { Send } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface WhatsAppModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function WhatsAppModal({ isOpen, onOpenChange }: WhatsAppModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[420px] w-full max-w-[95%] rounded-2xl">
        <DialogHeader className="flex flex-col items-center space-y-4">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
            <Send
              className="w-12 h-12 text-[#2B71F0] transform"
              strokeWidth={1.5}
            />
          </div>
          <DialogTitle className="text-2xl font-bold text-center">
            Join our WhatsApp community
          </DialogTitle>
          <DialogDescription className="text-center text-base text-gray-600">
            Get notified on the latest projects and hackathons
          </DialogDescription>
        </DialogHeader>

        <div className="flex justify-center mt-6">
          <Button
            onClick={() =>
              window.open("https://whatsapp.com/group-link", "_blank")
            }
            className="bg-[#2C71F0] text-white px-10 py-7 text-base hover:bg-[#2C71F0]/90 rounded-xl"
          >
            Join
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
