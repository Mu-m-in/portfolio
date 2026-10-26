export const skillGroups: { title: string; note?: string; items: string[] }[] =
  [
    { title: "Languages", items: ["JavaScript", "Python", "Java", "C++", "C"] },
    { title: "Frontend", items: ["React", "HTML", "CSS", "Tailwind CSS"] },
    {
      title: "Backend",
      items: ["Node.js", "Express.js", "REST APIs", "JWT and cookie sessions"],
    },
    {
      title: "Databases",
      items: ["MongoDB", "Mongoose", "SQL and DBMS fundamentals"],
    },
    {
      title: "AI engineering - current",
      note: "Actively studying and building toward these.",
      items: [
        "Generative AI",
        "Large language models",
        "Retrieval-augmented generation",
        "Agentic AI",
      ],
    },
    {
      title: "Tools",
      items: ["Git", "GitHub", "npm", "Environment-based configuration"],
    },
  ];

export const approach = [
  {
    title: "End to end ownership",
    body: "I connect the interface, API, and database into a complete workflow rather than treating each layer as a separate exercise.",
  },
  {
    title: "Understandable APIs",
    body: "I design routes and predictable responses so the frontend and backend work together consistently.",
  },
  {
    title: "Authentication and data isolation",
    body: "I use authenticated requests and server-side ownership checks to keep user-specific records separate from demonstration data.",
  },
  {
    title: "Reliable external integrations",
    body: "I account for API rate limits, cached responses, and unavailable data instead of assuming external services will always respond.",
  },
  {
    title: "Learn by building",
    body: "I use real projects to strengthen my software engineering fundamentals and explore how AI can support useful applications.",
  },
];
