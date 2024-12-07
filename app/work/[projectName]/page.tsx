import React from "react";
import Footer from "@/app/_components/FooterSection";
import ProjectTechnologiesMini from "@/app/_components/Card/ProjectTechnologiesMini";
import { Navbar } from "@/app/_components/ui/Navbar";
import ShinyButton from "@/app/_components/ui/ShinyButton";
import Carousel from "@/app/_components/ui/Carousel";
import { portfolioProjects } from "@/app/_lib/constants";
import { BriefcaseBusiness, Code, Globe, House, UserRound } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

export function generateMetadata({
  params,
}: {
  params: { projectName: string };
}) {
  const projectId = params.projectName;
  const project = portfolioProjects.find((project) => project.id === projectId);

  if (!project) return { title: "Not Found" };

  return {
    title: `Project ${project.heading}`,
  };
}

const navItems = [
  { name: "Home", link: "/", icon: <House /> },
  { name: "Work", link: "/#work", icon: <BriefcaseBusiness /> },
  { name: "About", link: "/#about", icon: <UserRound /> },
];

const ProjectOverview = ({ params }: { params: { projectName: string } }) => {
  const projectId = params.projectName;
  const project = portfolioProjects.find((project) => project.id === projectId);

  if (!project) return notFound();

  const {
    heading,
    subheading,
    description,
    images,
    techStack,
    liveDemoUrl,
    sourceCodeUrl,
  } = project;

  const isLiveDemoUnavailable = liveDemoUrl === "not-found";
  const isSourceCodeUnavailable = sourceCodeUrl === "not-found";

  return (
    <main className="flex flex-col px-5 sm:px-10 relative">
      <div className="max-w-7xl mx-auto w-full">
        <Navbar navItems={navItems} />

        <div className="pt-36">
          <h1 className="text-[40px] md:text-6xl pb-4 lg:text-7xl text-center max-w-5xl leading-normal tracking-wide uppercase mx-auto">
            <span className="font-black">{heading}</span>
            <br />
            {subheading}
          </h1>

          {/* Image Carousel */}
          <Carousel images={project.images} />

          <div className="mt-8 mb-32 flex flex-col md:flex-row gap-10 md:gap-5 justify-between">
            <div className="flex-1">
              <h2 className="text-3xl min-[430px]:text-4xl md:text-5xl dark:text-stone-200 mb-5">
                Project Overview
              </h2>

              <ProjectTechnologiesMini techStack={techStack} />

              <div className="flex items-center gap-4 mt-10">
                <div className="relative">
                  <ShinyButton
                    className={
                      isLiveDemoUnavailable
                        ? "cursor-not-allowed opacity-50"
                        : ""
                    }
                    icon={<Globe />}
                    iconPosition="left"
                  >
                    {isLiveDemoUnavailable ? (
                      <span>Live demo unavailable</span>
                    ) : (
                      <Link
                        href={liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Demo
                      </Link>
                    )}
                  </ShinyButton>
                </div>

                <div className="relative">
                  <ShinyButton
                    className={
                      isSourceCodeUnavailable
                        ? "cursor-not-allowed opacity-50"
                        : ""
                    }
                    icon={<Code />}
                    iconPosition="left"
                  >
                    {isSourceCodeUnavailable ? (
                      <span>Source code unavailable</span>
                    ) : (
                      <Link
                        href={sourceCodeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Source Code
                      </Link>
                    )}
                  </ShinyButton>
                </div>
              </div>
            </div>

            <p className="flex-1">{description}</p>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
};

export default ProjectOverview;
