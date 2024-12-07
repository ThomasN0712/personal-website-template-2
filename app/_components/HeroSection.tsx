import { ChevronRight, Download, Linkedin, Mail, MapPin } from "lucide-react";
import "@/app/_styles/globals.css";
import ShinyButton from "./ui/ShinyButton";
import Link from "next/link";
import { TextGenerateEffect } from "./ui/TextGenerate";
import Particles from "./ui/Particles";

const HeroSection = () => {
  return (
    <>
      {/* Radial gradient for the container to give a faded look */}
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />

      <div
        className="mb-16 mt-24 sm:p-0 flex flex-col items-start justify-start relative"
        id="#home"
      >
        <div className="flex flex-col justify-start items-start relative z-10 text-center">
          <div className="text-4xl pb-4 md:text-5xl lg:text-6xl font-bold text-center max-w-5xl ">
            hi, it's John here 👋
          </div>
          <p className="pb-1 text-lg sm:text-base md:text-xl text-dark-200 dark:text-slate-400">
            I'm a Software Engineer
          </p>
          <p className="pb-3 text-lg sm:text-base md:text-xl text-dark-200 dark:text-slate-400">
            I like to develop full-stack, drink instant coffee and get coding
            advice from my cat.
          </p>
          <p className="pb-10 uppercase font-bold text-md tracking-widest">
            <MapPin size={24} className="inline-block mr-1 mb-1" />
            California, USA
          </p>
          <div className="flex flex-row items-center gap-4">
            <ShinyButton>
              <Link href="/resume/resume.pdf" className="flex flex-row gap-2">
                <Download className="text-primary" />
                Resume
              </Link>
            </ShinyButton>
            <div className="flex flex-row gap-4">
              {/* Social Links */}
              <div className="flex items-center gap-3">
                {/*LinkedIn*/}
                <a
                  href="https://www.linkedin.com/" // Replace this with you linkedin profile
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-200 dark:text-stone-200 duration-200 transform hover:scale-150 hover:rotate-6 opacity-70"
                >
                  <Linkedin size={24} />
                </a>
                {/*GitHub*/}
                <a
                  href="https://github.com/" // Replace this with you github profile
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-150 hover:-rotate-6 transition-all duration-300 opacity-70"
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
                {/* <a
                  href="https://twitter.com/" // Replace this with your X profile
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-150 hover:-rotate-6 duration-200 opacity-70"
                >
                  <img
                    src="imgs/logos/x-logo.svg"
                    alt="X (formerly Twitter)"
                    className="w-6 h-6 filter dark:invert"
                  />
                </a> */}

                {/* Facebook */}
                {/* <a
                  href="https://facebook.com/" // Replace this with your Facebook profile
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-150 hover:-rotate-6 duration-200 opacity-70"
                >
                  <img
                    src="imgs/logos/facebook-logo.svg"
                    alt="Facebook"
                    className="w-6 h-6 filter dark:invert"
                  />
                </a> */}

                {/* Instagram */}
                {/* <a
                  href="https://instagram.com/" // Replace this with your Instagram profile
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-150 hover:-rotate-6 duration-200 opacity-70"
                >
                  <img
                    src="imgs/logos/instagram-logo.svg"
                    alt="Instagram"
                    className="w-6 h-6 filter dark:invert"
                  />
                </a> */}

                {/*Email*/}
                <a
                  href="mailto:example@gmail.com" // Replace this with you email
                  className="text-dark-200 dark:text-stone-200 duration-200 transform hover:scale-150 hover:rotate-6 opacity-70"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
