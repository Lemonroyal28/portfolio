export interface Experience {
  date: string;
  role: string;
  company: string;
  companyUrl?: string;
  logo: string;
  description: string;
  bulletPoints: string[];
  techStack?: string[];
}

export const experience: Experience[] = [
  {
    date: 'Jan 2026 — Present',
    role: 'Junior Full Stack Engineer',
    company: 'CUMLAUDE.AI',
    companyUrl: 'https://cumlaude.ai',
    logo: '/assets/cumlaude.jpeg',
    description: 'Develop secure AI-enabled SaaS platforms and automation systems using Next.js, TypeScript, Supabase, and modern cloud infrastructure. Work across full-stack development, authentication, API integrations, data pipelines, and scalable multi-tenant architectures.',
    bulletPoints: [
      'Develop secure multi-tenant SaaS platforms and AI-enabled automation workflows',
      'Build full-stack features using Next.js, React, TypeScript, and Supabase with PostgreSQL',
      'Integrate APIs, SDKs, and external services to extend platform functionality',
      'Support AI-driven systems including streaming chat, RAG workflows, and semantic search',
      'Contribute to secure backend architecture, validation, access control, and protected server actions',
    ],
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Vercel AI SDK'],
  },
  {
    date: '2022 — 2023',
    role: 'Junior Project Engineer',
    company: 'Royal Wagenborg',
    companyUrl: 'https://www.wagenborg.com',
    logo: '/assets/wagenborg.png',
    description: 'Led digitalization and compliance initiatives across maritime operations, focusing on environmental reporting, hazardous materials management, and software framework development.',
    bulletPoints: [
      'Executed MRV (Monitoring, Reporting, Verification) fuel reporting for vessels over 5,000 GT for the 2022 reporting year',
      'Created environmental consumption reports for submission to the International Maritime Organisation (IMO)',
      'Collaborated with leading companies to evaluate and implement digitalized tracking solutions for hazardous materials management',
      'Introduced protocols for tracking, handling, and disposal of hazardous materials on board ships throughout their life cycle',
      'Created a technical framework for in-house development of hazardous materials tracking software',
      'Established standardized processes for maritime compliance and operational efficiency improvements',
    ],
  },
  {
    date: '2021',
    role: 'Production Planning Consultant',
    company: 'S&B Machine Works',
    logo: '',
    description: 'Developed production planning processes and operational workflows for high-precision CNC machining operations, focusing on scheduling optimization and process improvements.',
    bulletPoints: [
      'Developed and optimized production schedules for high-precision CNC machining operations',
      'Ensured efficient resource allocation, minimal downtime, and on-time delivery across machining projects',
      'Implemented process improvements to enhance throughput and reduce lead times',
      'Maintained quality standards while optimizing production efficiency',
      'Created operational procedures and workflow documentation for production planning',
    ],
  },
];
