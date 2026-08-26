export const PORTFOLIO_DATA = {
  hero: {
    name: "Nguyen Dinh Hung",
    tagline: "Software Engineer & AI Builder",
    description: "Fourth-year Information Security student blending Cybersecurity expertise with robust AI/LLM integrations. Specializing in Multi-Agent systems, RAG workflows, and Deep Learning models.",
    email: "dinhhungnguyen.work@gmail.com",
    github: "github.com/X181125",
    linkedin: "https://www.linkedin.com/in/hungnguyendinh2005"
  },
  about: {
    journey: "I leverage a strong cybersecurity background to design AI applications with robust guardrails, systematic problem-solving, and structured observability. I translate complex domain requirements into scalable solutions using LangGraph, PyTorch, and OpenAI APIs."
  },
  skills: {
    ai_llm: ["Multi-Agent Systems", "RAG", "Prompt Engineering", "Graph Neural Networks (GNN)", "Deep Learning Pipeline Design"],
    cybersecurity: ["Security Assessment Workflows", "Vulnerability Assessment", "Secure Coding", "Target Scope Control"],
    frameworks: ["PyTorch", "LangGraph", "LangChain", "FastAPI", "TensorBoard", "Pytest"],
    tools_languages: ["Python", "C/C++", "JavaScript", "SQL", "Git", "GitHub", "MCP", "Linux"]
  },
  projects: [
    {
      title: "AutoPentest Agent",
      type: "AI & System Design",
      tech: ["Python", "LangGraph", "OpenAI APIs", "FastAPI", "MCP/RAG"],
      description: "An autonomous CLI-based agentic system utilizing LangGraph to orchestrate role-separated LLM agents (Planner, Executor, Reviewer) for security assessments. Implemented operational guardrails and schema-integration for a stable evaluation pipeline.",
      githubUrl: "#"
    },
    {
      title: "Graph Transformer for Vulnerability Detection",
      type: "Deep Learning Research",
      tech: ["PyTorch", "GNN", "Graph Transformer", "TensorBoard"],
      description: "Developed an end-to-end Deep Learning pipeline to classify C/C++ vulnerabilities using AST and data-flow graphs. Engineered a dual-view Graph Transformer architecture from scratch in PyTorch.",
      githubUrl: "#"
    },
    {
      title: "Real-Time Auction Website",
      type: "Full-Stack Development",
      tech: ["Django 5", "Django Channels", "PostgreSQL", "Redis", "WebSocket", "AWS"],
      description: "A real-time auction platform built with Django and WebSockets, combining live bidding, countdown timers, bid history, wallet and VietQR transactions, role-based management, and responsive interfaces.",
      githubUrl: "https://github.com/Hung-23520564/auction_web"
    },
    {
      title: "Internet Café Manager",
      type: "Desktop Application",
      tech: ["C#", ".NET 8", "Windows Forms", "Firebase", "Cloudinary", "Krypton Toolkit"],
      description: "A Windows desktop management application with separate admin and user flows, dashboard-oriented UI, Firebase data access, Cloudinary media storage, and a reusable Krypton Toolkit interface layer.",
      githubUrl: "https://github.com/Hung-23520564/Internet_Cafe_Manager_App"
    }
  ],
  experience: [
    {
      role: "Cybersecurity Research Intern",
      company: "Certified Network Security Center (CNSC), UIT",
      duration: "Mar. 2026 - Jun. 2026",
      points: [
        "Designed a Hierarchical Multi-Agent RAG workflow in an isolated environment.",
        "Integrated Model Context Protocol (MCP) to improve context retrieval and reduce hallucinations.",
        "Established an observable AI pipeline by tracking generated artifacts and structuring logs."
      ]
    }
  ]
} as const;
