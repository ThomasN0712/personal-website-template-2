import { ChevronRight, Download, Linkedin, Mail } from "lucide-react";
import "@/app/_styles/globals.css";
import ShinyButton from "./ui/ShinyButton";
import Link from "next/link";
import { TextGenerateEffect } from "./ui/TextGenerate";
import Particles from "./ui/Particles";

const HeroSection = () => {
  return (
    <>
      <div className="h-screen w-full dark:bg-dark-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.06] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          color={"#ffffff"}
          refresh
        />
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-dark-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div
        className="pb-20 pt-36 sm:p-0 sm:min-h-screen flex flex-col items-center justify-center relative"
        id="#home"
      >
        <div className="flex flex-col justify-center items-center relative z-10 text-center">
          <p className="uppercase font-bold text-sm tracking-widest">
            Based In California, USA
          </p>
          <TextGenerateEffect
            words="Hi this is John 👋"
            className="text-[40px] md:text-6xl lg:text-7xl font-bold text-center max-w-5xl leading-snug tracking-wide waving-hand"
          />
          {/* No waving hand version */}

          {/* <TextGenerateEffect
            words="Hi this is John"
            className="text-[40px] md:text-6xl lg:text-7xl font-bold text-center max-w-5xl"
          /> */}
          <p className="pt-5 pb-10 text-lg sm:text-base md:text-lg text-dark-200 dark:text-stone-200">
            This is John and I like to eat cake.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <ShinyButton icon={<ChevronRight />}>
              <Link href="#work">See My Work</Link>
            </ShinyButton>
            <a
              href="/resume/resume.pdf"
              download
              className="flex items-center gap-2.5 group"
            >
              <Download className="text-primary" />
              <span className="group-hover:text-primary duration-200 font-semibold">
                Download Resume
              </span>
            </a>
          </div>
          {/* Social Links */}
          <div className="flex items-center gap-6 mt-8">
            {/*LinkedIn*/}
            <a
              href="https://www.linkedin.com/" // Replace this with you linkedin profile
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-200 dark:text-stone-200 duration-200 transform hover:scale-150 hover:rotate-6"
            >
              <Linkedin size={24} />
            </a>
            {/*GitHub*/}
            <a
              href="https://github.com/" // Replace this with you github profile
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-150 hover:-rotate-6 transition-all duration-300"
            >
              <img
                src="imgs/logos/github-dark-logo.svg"
                alt="GitHub"
                className="w-6 h-6 dark:hidden"
              />
              <img
                src="imgs/logos/github-logo.svg"
                alt="GitHub Dark Mode"
                className="w-6 h-6 hidden dark:block"
              />
            </a>
            {/* X (formerly Twitter) */}
            <a
              href="https://twitter.com/" // Replace this with your X profile
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-150 hover:-rotate-6 duration-200"
            >
              <img
                src="imgs/logos/x-logo.svg"
                alt="X (formerly Twitter)"
                className="w-6 h-6 filter dark:invert"
              />
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/" // Replace this with your Facebook profile
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-150 hover:-rotate-6 duration-200"
            >
              <img
                src="imgs/logos/facebook-logo.svg"
                alt="Facebook"
                className="w-6 h-6 filter dark:invert"
              />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/" // Replace this with your Instagram profile
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-150 hover:-rotate-6 duration-200"
            >
              <img
                src="imgs/logos/instagram-logo.svg"
                alt="Instagram"
                className="w-6 h-6 filter dark:invert"
              />
            </a>

            {/*Email*/}
            <a
              href="mailto:example@gmail.com" // Replace this with you email
              className="text-dark-200 dark:text-stone-200 duration-200 transform hover:scale-150 hover:rotate-6"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
