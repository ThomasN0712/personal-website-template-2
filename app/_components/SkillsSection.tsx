"use client";

import { techCardsItems } from "@/app/_lib/constants";
import TechCard from "./Card/TechCard";
import { motion } from "framer-motion";
import FlickeringGrid from "./ui/FlickeringGrid";

{
  /* To remove or add any of the section, modify this below /> */
}
const categories = [
  {
    id: 1,
    title: "Backend",
    description:
      "I’m building skills in solving complex problems, automating tasks, and designing scalable backend systems that enhance user experiences.",
  },
  {
    id: 2,
    title: "Frontend & Design",
    description:
      "I'm enthusiastic about learning to create clean, user-friendly designs that balance functionality and aesthetics for intuitive interfaces.",
  },
  {
    id: 3,
    title: "Cloud & DevOps",
    description:
      "I’m gaining hands-on experience with cloud deployments and DevOps tools, working towards optimizing workflows for efficient project management.",
  },
  {
    id: 4,
    title: "Other",
    description:
      "These are additional tools I’m using to streamline tasks and improve productivity in my daily projects.",
  },
];

const SkillsSection = () => {
  return (
    <div className="relative z-0" id="about">
      {/* FlickeringGrid Background */}
      <FlickeringGrid
        className="absolute inset-0 z-0 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        squareSize={4}
        gridGap={8}
        color="#0B9964"
        maxOpacity={0.2}
        flickerChance={0.1}
        height={1000}
        width={2000}
      />

      {/* Foreground Content */}
      <div className="relative z-10 py-16 sm:py-24">
        <div className="space-y-4 mb-10">
          <motion.h1
            initial={{ opacity: 0, x: -75 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200"
          >
            Technologies I Use
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -90 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-lg min-[430px]:text-xl max-w-lg md:max-w-3xl text-dark-200 dark:text-stone-200"
          >
            I'm building a solid foundation across a range of modern
            technologies to develop practical and reliable solutions. Here are
            the key tools and frameworks I'm currently working with.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 75 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="p-4 rounded-xl border border-transparent dark:border-transparent"
            >
              <h2 className="text-xl font-bold mb-2">{category.title}</h2>
              <p className="text-sm mb-4">{category.description}</p>
              <div className="flex flex-wrap gap-4">
                {techCardsItems
                  .filter((item) => item.id === category.id)
                  .map((item) => (
                    <TechCard key={item.name} cardInfo={item} />
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
