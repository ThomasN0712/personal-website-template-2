"use client";

import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ProjectTechnologiesMini from "./ProjectTechnologiesMini";

import { motion } from "framer-motion";

interface ProjectProps {
  id: string;
  heading: string;
  subheading: string;
  description: string;
  images: string[];
  techStack: string[];
  liveDemoUrl: string;
  sourceCodeUrl: string;
}

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  const { id, heading, images, techStack } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="bg-[#F3F4F3] dark:bg-dark-200 rounded-lg p-4 sm:p-8 space-y-8 relative flex flex-col hover:shadow-md hover:dark:shadow-primary hover:shadow-slate-600"
    >
      <Link href={`/work/${id}`} className="rounded-lg overflow-hidden block">
        <div className="relative w-full h-96">
          <Image
            src={images[0]}
            alt={heading}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Link>
      <div className="flex-1">
        <h3 className="text-2xl sm:text-3xl font-semibold">{heading}</h3>
        <div className="mt-4 flex flex-row justify-between gap-5">
          <div className="min-h-[125px] max-h-[125px] overflow-y-auto">
            <ProjectTechnologiesMini techStack={techStack} />
          </div>
          <Link
            href={`/work/${id}`}
            className="p-3 bg-primary hover:bg-primary/80 transition-colors duration-200 rounded-lg mt-auto self-end"
          >
            <MoveUpRight className="size-8 text-[#F3F4F3] dark:text-dark-200" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
