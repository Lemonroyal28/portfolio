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
    date: '2024 — Present',
    role: 'Junior Full Stack Engineer',
    company: 'CUMLAUDE.AI',
    companyUrl: 'https://cumlaude.ai',
    logo: '/assets/cumlaude.jpeg',
    description: 'Building full-stack SaaS platforms with AI integration, focusing on multi-tenant architecture, robust backend logic, and secure user authentication. I design and implement data pipelines, ETL workflows, and dynamic dashboards using modern frameworks and cloud infrastructure.',
    bulletPoints: [
      'Developed full-stack SaaS features using Next.js, React, TypeScript, Supabase (PostgreSQL, Row-Level Security), and Vercel',
      'Built multi-tenant architectures with role-based access control (RBAC), authentication flows, and secure API endpoints',
      'Designed and implemented ETL pipelines and automated workflows using Azure Synapse, Microsoft Fabric, and Power Automate',
      'Created AI-powered data dashboards and analytics tools with Power BI, integrating real-time data sources',
      'Collaborated with cross-functional teams to deliver client-facing platforms and internal automation tools',
      'Applied systems thinking and agile methodologies to solve complex operational and technical challenges',
    ],
  },
  {
    date: '2022 — 2023',
    role: 'Process Engineer Intern',
    company: 'Royal Wagenborg',
    companyUrl: 'https://www.wagenborg.com',
    logo: '/assets/wagenborg.png',
    description: 'Worked on digitalising maritime compliance processes and improving operational efficiency in ship management.',
    bulletPoints: [
      'Introduced protocols for tracking, handling, and disposal of hazardous materials throughout their life cycle on board ships',
      'Collaborated with leading companies to explore digitalised tracking solutions',
      'Created a framework for in-house software development to manage hazardous materials compliance',
      'Supported process improvement initiatives across ship operations',
    ],
  },
  {
    date: '2021',
    role: 'Operations Intern',
    company: 'S&B Machine Works',
    logo: '/assets/profile.png',
    description: 'Worked on machine shop operations and process documentation.',
    bulletPoints: [
      'Documented operational procedures and workflows',
      'Supported day-to-day production activities',
    ],
  },
];
