export interface Experience {
  id: number;
  company: string;
  logo: string;
  position: string;
  dates: string;
  description: string[];
  tags?: string[];
}

export interface Education {
  id: number;
  institution: string;
  logo: string;
  degree: string;
  dates: string;
  description: string[];
  tags?: string[];
}

export interface TechCardItem {
  id: number; // 1: Backend, 2: Frontend & Design, 3: Cloud & DevOps, 4: Other
  name: string;
  imageUrl: string;
  darkModeInvert: boolean;
}

export interface PortfolioProject {
  id: string;
  heading: string;
  subheading: string;
  description: string;
  images: string[];
  techStack: string[];
  liveDemoUrl: string;
  sourceCodeUrl: string;
}

export interface ResearchPaper {
  id: string;
  title: string;
  description?: string;
  authors: string;
  publicationDate: string;
  conference: string;
  imageUrl: string;
  link: string;
}

export interface Testimonial {
  id: number;
  name: string;
  profession: string;
  description: string;
  image: string;
}

export const experienceData: Experience[] = [
  {
    id: 1,
    company: "Company Name 1",
    logo: "/imgs/logos/csulb-logo.svg",
    position: "Position Title 1",
    dates: "Start Date 1 - End Date 1",
    description: [
      "Description bullet point 1 for Company 1",
      "Description bullet point 2 for Company 1",
      "Description bullet point 3 for Company 1",
    ],
  },
  {
    id: 2,
    company: "Company Name 2",
    logo: "/imgs/logos/csulb-logo.svg",
    position: "Position Title 2",
    dates: "Start Date 2 - End Date 2",
    description: [
      "Description bullet point 1 for Company 2",
      "Description bullet point 2 for Company 2",
      "Description bullet point 3 for Company 2",
    ],
  },
  {
    id: 3,
    company: "Company Name 3",
    logo: "/imgs/logos/csulb-logo.svg",
    position: "Position Title 3",
    dates: "Start Date 3 - End Date 3",
    description: [
      "Description bullet point 1 for Company 3",
      "Description bullet point 2 for Company 3",
      "Description bullet point 3 for Company 3",
    ],
  },
];

export const educationData: Education[] = [
  {
    id: 1,
    institution: "Institution Name 1",
    logo: "/imgs/logos/csulb-logo.svg",
    degree: "Degree Title 1",
    dates: "Start Date 1 - End Date 1",
    description: [
      "Description bullet point 1 for Institution 1",
      "Description bullet point 2 for Institution 1",
      "Description bullet point 3 for Institution 1",
    ],
    tags: ["Tag 1", "Tag 2"],
  },
  {
    id: 2,
    institution: "Institution Name 2",
    logo: "/imgs/logos/csulb-logo.svg",
    degree: "Degree Title 2",
    dates: "Start Date 2 - End Date 2",
    description: [
      "Description bullet point 1 for Institution 2",
      "Description bullet point 2 for Institution 2",
    ],
    tags: ["Tag 1"],
  },
];

export const techCardsItems: TechCardItem[] = [
  // Dictionary of IDs:
  // id 1: Backend
  // id 2: Frontend & Design
  // id 3: Cloud & DevOps
  // id 4: Other
  // https://www.vectorlogo.zone/

  // Backend
  {
    id: 1,
    name: "Python",
    imageUrl: "/imgs/logos/python.svg",
    darkModeInvert: false,
  },
  {
    id: 1,
    name: "C++",
    imageUrl: "/imgs/logos/cpp.svg",
    darkModeInvert: false,
  },
  {
    id: 1,
    name: "Java",
    imageUrl: "/imgs/logos/java.svg",
    darkModeInvert: false,
  },
  {
    id: 1,
    name: "PostgreSQL",
    imageUrl: "/imgs/logos/postgresql.svg",
    darkModeInvert: false,
  },
  {
    id: 1,
    name: "MongoDB",
    imageUrl: "/imgs/logos/mongodb.svg",
    darkModeInvert: false,
  },

  // Frontend & Design
  {
    id: 2,
    name: "React",
    imageUrl: "/imgs/logos/react.svg",
    darkModeInvert: false,
  },
  {
    id: 2,
    name: "TypeScript",
    imageUrl: "/imgs/logos/typescript.svg",
    darkModeInvert: false,
  },
  {
    id: 2,
    name: "Next.js",
    imageUrl: "/imgs/logos/nextjs.svg",
    darkModeInvert: true, // Invert in dark mode
  },
  {
    id: 2,
    name: "JavaScript",
    imageUrl: "/imgs/logos/javascript.svg",
    darkModeInvert: false,
  },
  {
    id: 2,
    name: "HTML",
    imageUrl: "/imgs/logos/html.svg",
    darkModeInvert: false,
  },
  {
    id: 2,
    name: "CSS",
    imageUrl: "/imgs/logos/css.svg",
    darkModeInvert: false,
  },
  {
    id: 2,
    name: "Tailwind",
    imageUrl: "/imgs/logos/tailwind.svg",
    darkModeInvert: false,
  },
  {
    id: 2,
    name: "Figma",
    imageUrl: "/imgs/logos/figma-logo.svg",
    darkModeInvert: false,
  },
  {
    id: 2,
    name: "Ionic",
    imageUrl: "/imgs/logos/ionic.svg",
    darkModeInvert: false,
  },

  // Cloud & DevOps
  {
    id: 3,
    name: "Docker",
    imageUrl: "/imgs/logos/docker.svg",
    darkModeInvert: false,
  },
  {
    id: 3,
    name: "Google Cloud",
    imageUrl: "/imgs/logos/googlecloud.svg",
    darkModeInvert: false,
  },
  {
    id: 3,
    name: "Vercel",
    imageUrl: "/imgs/logos/vercel.svg",
    darkModeInvert: true, // Invert in dark mode
  },
  {
    id: 3,
    name: "Supabase",
    imageUrl: "/imgs/logos/supabase.svg",
    darkModeInvert: false,
  },
  {
    id: 3,
    name: "Render",
    imageUrl: "/imgs/logos/render.svg",
    darkModeInvert: true,
  },

  // Other
  {
    id: 4,
    name: "Jira",
    imageUrl: "/imgs/logos/jira.svg",
    darkModeInvert: false,
  },
  {
    id: 4,
    name: "Linux",
    imageUrl: "/imgs/logos/linux.svg",
    darkModeInvert: false,
  },
  {
    id: 4,
    name: "ChatGPT",
    imageUrl: "/imgs/logos/chatgpt.svg",
    darkModeInvert: true, // Invert in dark mode
  },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "project_id_1",
    heading: "Project Heading 1",
    subheading: "Project Subheading 1",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    images: [
      "/imgs/projects/portfolio-wraith.png",
      "/imgs/projects/portfolio-wraith-2.png",
      "/imgs/projects/portfolio-wraith-3.png",
      "/imgs/projects/portfolio-wraith-4.png",
    ],
    techStack: ["Tech 1", "Tech 2", "Tech 3", "Tech 4", "Tech 5"],
    liveDemoUrl: "Live Demo URL 1",
    sourceCodeUrl: "not-found", // Set to "not-found" if source code is not available
  },
  {
    id: "project_id_2",
    heading: "Project Heading 2",
    subheading: "Project Subheading 2",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    images: ["/imgs/projects/portfolio-personal-website.png"],
    techStack: ["Tech 1", "Tech 2", "Tech 3"],
    liveDemoUrl: "not-found", // Set to "not-found" if live demo is not available
    sourceCodeUrl: "Source Code URL 2",
  },
];

export const researchPapers: ResearchPaper[] = [
  {
    id: "paper_id_1",
    title: "Paper Title 1",
    authors: "Author(s) 1",
    publicationDate: "Publication Date 1",
    conference: "Conference Name 1",
    imageUrl: "/imgs/projects/chatgpt-gemini-research-paper.png",
    link: "Link to Paper 1",
  },
  {
    id: "paper_id_2",
    title: "Paper Title 2",
    authors: "Author(s) 2",
    publicationDate: "Publication Date 2",
    conference: "Conference Name 2",
    imageUrl: "/imgs/projects/ai-companion-research-paper.png",
    link: "Link to Paper 2",
  },
];

export const testimonialItems = [
  {
    id: "testimonial_id_1",
    name: "Name 1",
    proffesion: "Profession 1",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/imgs/avatars/default-avatar.jpg",
  },
  {
    id: "testimonial_id_2",
    name: "Name 2",
    proffesion: "Profession 2",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/imgs/avatars/default-avatar.jpg",
  },
];
