export interface StackCategory {
  category: string;
  technologies: string[];
}

export interface StackArchitecture {
  categories: StackCategory[];
  architectureOverview: {
    flow: string[];
    principles: string[];
  };
}

export const stackArchitecture: StackArchitecture = {
  categories: [
    {
      category: 'Core Framework',
      technologies: ['Next.js 15', 'React 19', 'TypeScript'],
    },
    {
      category: 'Frontend',
      technologies: ['Server Components', 'Client Components', 'CSS Modules', 'Responsive Design'],
    },
    {
      category: 'State Management',
      technologies: ['React Context', 'Server State', 'URL State'],
    },
    {
      category: 'Backend & API Layer',
      technologies: ['Next.js API Routes', 'Server Actions', 'RESTful APIs', 'Supabase Client SDK'],
    },
    {
      category: 'Database & Storage',
      technologies: ['Supabase (PostgreSQL)', 'Row-Level Security (RLS)', 'Real-time subscriptions', 'Azure Synapse', 'Microsoft Fabric'],
    },
    {
      category: 'AI Infrastructure',
      technologies: ['Power BI', 'AI-powered analytics', 'Azure ML integration', 'Automated insights'],
    },
    {
      category: 'Automation & Workflows',
      technologies: ['Power Automate', 'ETL Pipelines', 'Scheduled jobs', 'Event-driven automation'],
    },
    {
      category: 'Security & Authentication',
      technologies: ['Supabase Auth', 'RBAC', 'JWT', 'OAuth providers', 'Multi-tenant isolation'],
    },
    {
      category: 'Infrastructure',
      technologies: ['Vercel', 'Edge Functions', 'CDN', 'Serverless', 'Git (version control)'],
    },
    {
      category: 'Development Tools',
      technologies: ['VS Code', 'ESLint', 'Prettier', 'Git', 'npm/pnpm', 'Jupyter Notebooks'],
    },
  ],
  architectureOverview: {
    flow: [
      'User requests hit Vercel Edge Network',
      'Next.js Server Components render on the server',
      'Client Components hydrate in the browser',
      'API routes handle backend logic and database queries',
      'Supabase manages data persistence, auth, and real-time features',
      'Power Automate triggers automated workflows and ETL jobs',
      'Power BI dashboards visualize data insights',
    ],
    principles: [
      'Server-first architecture for performance and SEO',
      'Type-safe development with TypeScript across the stack',
      'Multi-tenant isolation with Row-Level Security',
      'Role-based access control for secure user management',
      'Automated workflows reduce manual processing',
      'Real-time data synchronization where needed',
      'Scalable serverless infrastructure',
    ],
  },
};
