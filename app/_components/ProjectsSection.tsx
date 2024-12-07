import Link from "next/link";
import { portfolioProjects, researchPapers } from "@/app/_lib/constants";
import ProjectCard from "./Card/ProjectCard";
import ResearchCard from "./Card/ResearchCard";
import ShinyButton from "./ui/ShinyButton";
import { ChevronRight } from "lucide-react";

const ProjectsSection = () => {
  return (
    <div className="py-16" id="work">
      <div className="flex gap-4 flex-col sm:flex-row sm:items-center justify-between">
        <h2 className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200">
          My portfolio
        </h2>

        <ShinyButton icon={<ChevronRight />}>
          <Link href="https://github.com/" target="_blank">
            {/* Replace this with your GitHub profile */}
            All Projects
          </Link>
        </ShinyButton>
      </div>

      {/* Projects Section */}
      <div className="mt-12">
        <h3 className="text-2xl md:text-3xl font-semibold dark:text-stone-200">
          Projects
        </h3>
        <h4 className="mt-2 text-lg md:text-xl dark:text-stone-200">
          These are a few highlighted projects of mine, some of which I
          collaborated on with others. To see all my projects, you can check my
          GitHub page.
        </h4>
        <div className="grid lg:grid-cols-2 gap-4 mt-4">
          {portfolioProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Research Papers Section */}
      <div className="mt-12">
        <h3 className="text-2xl md:text-3xl font-semibold dark:text-stone-200">
          Research Papers
        </h3>
        <h4 className="mt-2 text-lg md:text-xl dark:text-stone-200">
          These are some of my research publications that were published in
          IEEE-related conferences.
        </h4>
        <div className="grid lg:grid-cols-2 gap-4 mt-4">
          {researchPapers.map((paper) => (
            <ResearchCard key={paper.id} paper={paper} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
