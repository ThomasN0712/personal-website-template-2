import {
  BriefcaseBusiness,
  Contact as ContactIco,
  House,
  UserRound,
} from "lucide-react";
import { Navbar } from "@/app/_components/ui/Navbar";
import HeroSection from "@/app/_components/HeroSection";
import SkillsSection from "@/app/_components/SkillsSection";
import BackgroundSection from "@/app/_components/BackgroundSection";
import ProjectsSection from "@/app/_components/ProjectsSection";
import TestimonialsSection from "@/app/_components/TestimonialsSection";
import FooterSection from "@/app/_components/FooterSection";

const navItems = [
  { name: "Home", link: "#home", icon: <House /> },
  { name: "About", link: "#about", icon: <UserRound /> },
  { name: "Work", link: "#work", icon: <BriefcaseBusiness /> },
];

const Homepage = () => {
  return (
    <main className="flex flex-col px-5 sm:px-10 relative">
      <div className="max-w-7xl mx-auto w-full">
        <Navbar navItems={navItems} />
        <HeroSection />
        <BackgroundSection />
        <SkillsSection />
        <ProjectsSection />
        <TestimonialsSection />
        <FooterSection />
      </div>
    </main>
  );
};

export default Homepage;
