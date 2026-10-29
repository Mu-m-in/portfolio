
export type ProjectStatus = "awaiting-deployment" | "live" | "in-progress";

export interface Project {
  id: string;
  name: string;
  category: string;
  summary: string;
  stack: string[];
  engineering: string[];
  repoUrl: string;
  demoUrl: string | null;
  status: ProjectStatus;
  previewImage?: string;
}

export const statusLabels: Record<ProjectStatus, string> = {
  "awaiting-deployment": "Complete, deployment pending",
  live: "Live",
  "in-progress": "In progress",
};

export const projects: Project[] = [
  {
    id: "equityflow",
    name: "EquityFlow",
    category: "Full-stack fintech, trading simulator",
    summary:
      "EquityFlow lets users simulate stock trading with virtual funds while keeping their portfolios and trading activity separate by account.",
    
    stack: ["React", "Node.js", "Express", "MongoDB", "Mongoose", "JWT", "Alpha Vantage API"],
    engineering: [
      "Implemented cookie-based JWT authentication using an HttpOnly session cookie.",
      "Separated user-owned holdings, positions, and orders from demonstration data.",
      "Integrated market-data retrieval with caching and handling for external API rate limits.",
    ],
    repoUrl: "https://github.com/Mu-m-in/EquityFlow",
    demoUrl: "https://equity-floww.vercel.app",
    status: "live",
  },
  {
    id: "explorica",
    name: "Explorica",
    category: "Full-stack web, property platform",
    summary:
      "Explorica is a full-stack property rental platform that lets users discover properties, explore detailed listings, and submit booking requests.",
    
    stack: ["JavaScript", "Node.js", "Express", "MongoDB"],
    engineering: [
      "Built a property rental platform with listing and booking request features.",
      "Implemented authentication, property management, and reviews using MongoDB.",
      "Integrated Cloudinary for image uploads and built a responsive UI with EJS and Bootstrap.",
    ],
    repoUrl: "https://github.com/Mu-m-in/explorica",
    demoUrl: "https://explorica.onrender.com",
    status: "live",
  },
];
