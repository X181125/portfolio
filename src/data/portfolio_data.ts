type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  details: readonly string[];
  tech: readonly string[];
  githubUrl?: string;
};

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  startDate: string;
  endDate?: string;
  points: readonly string[];
};

const projects: readonly Project[] = [
  {
    id: "graph-transformer",
    title: "Graph Transformer for Vulnerability Detection",
    category: "Applied deep learning",
    description:
      "A PyTorch research project that classifies vulnerabilities in C/C++ code using structural and program-flow information.",
    details: [
      "Represented C/C++ code as abstract syntax, control-flow, and data-flow graphs.",
      "Built a dual-view Graph Transformer with edge-aware attention in PyTorch.",
      "Used TensorBoard to compare training runs and track model performance.",
    ],
    tech: ["Python", "PyTorch", "Graph Neural Networks", "TensorBoard"],
    githubUrl: "https://github.com/X181125/Auto_Bug_Detection",
  },
  {
    id: "real-time-auction",
    title: "Real-Time Auction Website",
    category: "Full-stack web application",
    description:
      "A live bidding platform with synchronized countdowns, bid history, and wallet transactions.",
    details: [
      "Used Django Channels and WebSockets to deliver live bid updates.",
      "Built role-based management, wallet transactions, and VietQR payments.",
    ],
    tech: ["Django", "WebSocket", "PostgreSQL", "Redis"],
    githubUrl: "https://github.com/Hung-23520564/auction_web",
  },
  {
    id: "internet-cafe-manager",
    title: "Internet Café Manager",
    category: "Desktop application",
    description:
      "A Windows app with separate dashboards for internet café staff and customers.",
    details: [
      "Used Firebase for application data and Cloudinary for media storage.",
      "Built reusable Windows Forms interface components with Krypton Toolkit.",
    ],
    tech: ["C#", ".NET 8", "Windows Forms", "Firebase"],
    githubUrl: "https://github.com/Hung-23520564/Internet_Cafe_Manager_App",
  },
  {
    id: "agent-research",
    title: "AutoPentest Agent",
    category: "LLM systems research",
    description:
      "An isolated research prototype for evaluating and documenting multi-agent security assessments.",
    details: [
      "Focused on scope controls, structured findings, and reports that a human can review.",
      "Tracked evidence and task outcomes to support repeatable evaluation.",
    ],
    tech: ["Python", "LangGraph", "LangChain"],
  },
];

const experience: readonly ExperienceItem[] = [
  {
    role: "AI Automation Engineer",
    company: "Lien Chau Weaving Production Joint Stock Company",
    period: "Oct 2026 – Present",
    startDate: "2026-10",
    points: [
      "Analyze internal workflows and identify bottlenecks and repetitive tasks.",
      "Build AI-agent tools that automate routine office work and support day-to-day operations.",
      "Translate business requirements into automation workflows and refine them to reduce manual work.",
    ],
  },
  {
    role: "Cybersecurity Research Intern",
    company: "Certified Network Security Center (CNSC), UIT",
    period: "Mar – Jun 2026",
    startDate: "2026-03",
    endDate: "2026-06",
    points: [
      "Built a multi-agent RAG research prototype in an isolated environment.",
      "Integrated Model Context Protocol (MCP) for context retrieval and used structured outputs and failure handling in multi-step tasks.",
      "Added structured logs and artifact tracking so researchers could audit each run.",
    ],
  },
];

export const PORTFOLIO_DATA = {
  hero: {
    name: "Nguyen Dinh Hung",
    firstName: "Nguyen",
    lastName: "Dinh Hung",
    tagline: "AI Automation Engineer",
    description:
      "I build AI agents and automation workflows for business operations. My information security background shapes how I design, test, and monitor LLM systems.",
    location: "Ho Chi Minh City, Vietnam",
    email: "dinhhungnguyen.work@gmail.com",
    github: "https://github.com/X181125",
    linkedin: "https://www.linkedin.com/in/hungnguyendinh2005/",
  },
  education: {
    school: "University of Information Technology, VNU-HCM",
    degree: "B.S. in Information Security",
    expected: "Expected Feb 2027",
    expectedDate: "2027-02",
    gpa: "7.73/10",
  },
  achievements: [
    {
      title: "Viettel AI Race",
      description: "Participated in competitive AI modeling challenges across two tracks.",
      results: [
        { label: "Track 3", value: "60 points" },
        { label: "Track 2", value: "31 points" },
      ],
    },
  ],
  skills: [
    { label: "AI and LLM engineering", items: ["Multi-agent systems", "RAG", "Prompt engineering", "MCP", "Graph neural networks"] },
    { label: "Frameworks and tooling", items: ["PyTorch", "LangGraph", "LangChain", "FastAPI", "TensorBoard", "Pytest"] },
    { label: "Programming and platforms", items: ["Python", "C/C++", "JavaScript", "SQL", "Git", "Linux"] },
    { label: "Security engineering", items: ["Vulnerability assessment", "Secure coding", "Scope control", "Structured logging"] },
  ],
  languages: [
    { name: "Vietnamese", proficiency: "Native" },
    { name: "English", proficiency: "TOEIC L&R 595, S&W 260" },
  ],
  projects,
  experience,
} as const;
