"use client";

import Link from "next/link";
import { Header } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import StorySection from "./aboutSections/story";
import Reason from "./aboutSections/reason";
import MarketPlace from "./aboutSections/marketplace";

export default function AboutUsPage() {


  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-white mt-24">
        <StorySection />
        <Reason />
        <MarketPlace />
      </main>

      <Footer />
    </div>
  );
}
