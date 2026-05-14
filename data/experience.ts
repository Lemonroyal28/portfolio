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
    description: 'Building AI-powered SaaS platforms with multi-tenant architecture, focusing on scalable data systems, automation workflows, and operational intelligence tools.',
    bulletPoints: [
      'Developed full-stack SaaS features using Next.js, React, TypeScript, Supabase (PostgreSQL, RLS), and Vercel',
      'Built multi-tenant architectures with RBAC, authentication flows, and secure API endpoints',
      'Designed ETL pipelines and automated workflows using Azure Synapse, Microsoft Fabric, and Power Automate',
      'Created AI-powered dashboards and analytics tools with Power BI for real-time operational intelligence',
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
