// Single source of truth for personal info. Edit values marked TODO.
export const profile = {
  name: "Mumin Tariq",
  wordmark: "mumin.tariq",
  role: "Full-Stack Development · Backend Engineering · AI",
  headline: "Building Full-Stack Products at the Intersection of Software Engineering and AI.",
  intro:
    "I build full-stack applications with reliable backends, secure authentication, and user-focused interfaces. I'm also exploring LLM-powered applications and agentic AI systems.",
  education: { degree: "B.Tech, Computer Science Engineering", graduation: "2027" },
  github: "https://github.com/Mu-m-in",
  linkedin: "https://www.linkedin.com/in/mumintariq",

  email: "mumin014@proton.me",
  emailConfigured: true,

  resumePath: "/resume/Mumin_Tariq_Resume.pdf",
  resumeAvailable: false,
  // TODO: deployed portfolio URL (for metadata and Open Graph)
  siteUrl: "https://mumin-portfolio.vercel.app",
};

export const resumeHref = profile.resumeAvailable ? profile.resumePath : profile.linkedin;
export const emailHref = profile.emailConfigured ? `mailto:${profile.email}` : null;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
