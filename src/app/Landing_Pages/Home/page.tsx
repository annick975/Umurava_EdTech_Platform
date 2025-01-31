"use client";
import { Header } from "@/components/Navbar";
import HeroSection from "./homeSections/heroSection";
import Stats from "./homeSections/stats";
import WorkExperienceSection from "./homeSections/workExperience";
import Skills from "./homeSections/skills";
import Carousel from "./homeSections/imageCarousel";
import ChallengesPage from "./homeSections/challenges";
import { Benefits } from "./homeSections/benefits";
import Testimonials from "./homeSections/testimonials";
import { Footer } from "@/components/Footer";
import GetStarted from "./homeSections/getStarted";
import UnlockSkill from "./homeSections/unlockSkill";

export default function Home() {


  return (
    <>
      <Header />
      <HeroSection />
      <WorkExperienceSection />
      <Stats />
      <Skills />
      <Carousel/>
      <ChallengesPage />
      <Benefits />
      <Testimonials />
      <GetStarted />
      <UnlockSkill />
      <Footer />
    </>
  );
}
