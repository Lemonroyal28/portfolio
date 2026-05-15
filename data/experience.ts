export interface Experience {
  date: string;
  role: string;
  company: string;
  companyUrl?: string;
  logo: string;
  description: string;
  bulletPoints: string[];
}

export const experience: Experience[] = [
  {
    date: 'Jan 2026 — Present',
    role: 'Junior Full Stack Engineer',
    company: 'CUMLAUDE.AI',
    companyUrl: 'https://cumlaude.ai',
    logo: '/assets/cumlaude.jpeg',
    description: 'At CUMLAUDE.AI, I work on the development and improvement of secure, data-driven SaaS platforms for companies that need automation, AI-enabled workflows, and scalable digital solutions. My role combines full-stack development, backend logic, authentication, database interaction, API integrations, and platform security. I contribute to building systems that transform raw data and business requirements into automated, visual, and actionable software solutions. This includes working with modern web technologies, improving the existing application stack, integrating external services through APIs and SDKs, and supporting secure multi-tenant platform architecture. My work focuses on creating maintainable, type-safe, and production-ready software using technologies such as Next.js, React, TypeScript, Supabase, PostgreSQL, Vercel AI SDK, Anthropic Claude, Cohere, Inngest, Upstash Redis, Zod, TanStack Query, Zustand, and Tailwind CSS.',
    bulletPoints: [
      'Develop and improve SaaS platforms for companies requiring automation, AI-enabled workflows, and secure digital solutions',
      'Contribute to frontend and backend development using Next.js, React, TypeScript, Supabase, and modern full-stack tools',
      'Work on authentication, authorization, database access, and secure multi-tenant application patterns',
      'Integrate APIs, SDKs, and external software services to extend platform functionality and improve client solutions',
      'Support AI-enabled features such as streaming chat, retrieval-augmented generation, tool calling, semantic search, and automated workflows',
      'Help transform raw data into structured, visual, and actionable insights for users and client organizations',
      'Contribute to backend logic, protected server actions, API routes, webhooks, and background workflows',
      'Support security-focused development through validation, access control, audit logging, rate limiting, and safe handling of application data',
      'Work with reusable components, structured data layers, type-safe schemas, and maintainable application architecture',
      'Continuously improve the platform stack by evaluating available software tools and incorporating suitable technologies into delivered solutions',
    ],
  },
  {
    date: '2022 — 2023',
    role: 'Junior Project Engineer',
    company: 'Royal Wagenborg',
    companyUrl: 'https://www.wagenborg.com',
    logo: '/assets/wagenborg.png',
    description: 'Led digitalisation initiatives for maritime compliance processes and operational efficiency improvements in ship management.',
    bulletPoints: [
      'Introduced protocols for tracking, handling, and disposal of hazardous materials throughout their life cycle on board ships',
      'Collaborated with industry leaders to evaluate and implement digitalised tracking solutions',
      'Created a framework for in-house software development to manage hazardous materials compliance',
    ],
  },
  {
    date: '2021',
    role: 'Production Planning Consultant',
    company: 'S&B Machine Works',
    logo: '',
    description: 'Developed production planning processes, operational workflows, and process documentation for machine shop operations.',
    bulletPoints: [
      'Designed operational procedures and workflow documentation for production planning',
      'Optimized production scheduling and resource allocation',
    ],
  },
];
