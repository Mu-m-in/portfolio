
export type ProjectStatus = "awaiting-deployment" | "live" | "in-progress";

export interface Project {
  id: string;
  name: string;
  category: string;
  summary: string;
  stack: string[];
  engineering: string[];
  repoUrl: string;
  demoUrl: string | null; // TODO: add live URL after deployment
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
    demoUrl: null,
    status: "awaiting-deployment",
  },
  {
    id: "explorica",
    name: "Explorica",
    category: "Full-stack web, property platform",
    summary:
      "Explorica is a web application for browsing property listings, exploring property details, and searching for relevant listings through a responsive interface backed by its own API and database.",
    
    stack: ["JavaScript", "Node.js", "Express", "MongoDB"],
    engineering: [
      "Property listing workflow, from browsing to individual listing details.",
      "Backend API and database layer behind the interface.",
      "Responsive layout for browsing on phones and desktops.",
    ],
    repoUrl: "https://github.com/Mu-m-in/explorica",
    demoUrl: "https://explorica.onrender.com",
    status: "live",
  },
];
