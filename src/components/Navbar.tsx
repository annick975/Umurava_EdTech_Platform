"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/Landing_Pages/Challenges", label: "Challenge & Hackathons" },
    {
      href: "/Landing_Pages/For_Learning_Institutions",
      label: "For Learning Institutions",
    },
    { href: "/Landing_Pages/About", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 w-full bg-white">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 py-5">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/Umurava logo.png"
            alt="Umurava Logo"
            width={120}
            height={32}
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                isActive(link.href)
                  ? "text-[#2B71F0] font-medium"
                  : "text-[#2B3338] hover:text-[#2B71F0]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Join Button (Desktop) */}
        <Button className="hidden lg:flex bg-[#041738] hover:bg-[#000C2D]/90 text-sm font-semibold py-5">
          Join the Program
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-[#2B3338] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg z-10 lg:hidden">
            <div className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-6 py-3 ${
                    isActive(link.href)
                      ? "text-[#2B71F0] font-semibold bg-gray-50"
                      : "text-[#2B3338] hover:text-[#2B71F0] hover:bg-gray-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-6 pt-4">
                <Button className="w-full lg:flex py-5 bg-[#041738] hover:bg-[#000C2D]/90">
                  Join the Program
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
