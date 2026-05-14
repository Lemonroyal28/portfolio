export interface SkillGroup {
  label: string;
  skills: string[];
  highlight?: boolean;
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Technical',
    skills: [
      'Python',
      'SQL',
      'TypeScript',
      'JavaScript',
      'Matlab',
      'R-Programming',
      'Next.js',
      'React',
      'Node.js',
      'Jupyter',
      'Azure Synapse',
      'Microsoft Fabric',
      'Power Automate',
      'Power Apps',
      'Vercel',
      'Supabase',
      'PostgreSQL',
      'ETL',
      'Power BI',
      'Git',
      'CAD',
      'Vensim',
      'Microsoft Office',
    ],
    highlight: true,
  },
  {
    label: 'Methodologies & Frameworks',
    skills: [
      'Agile / Scrum',
      'Lean Manufacturing',
      'ETL Design',
      'Data Modelling',
      'Systems Thinking',
      'Process Optimisation',
      'Digital Twin Modelling',
      'Multi-tenant SaaS Architecture',
      'API Design & Integration',
      'Project Management',
      'Stakeholder Analysis',
      'Consulting',
      'Security Best Practices (RBAC, RLS)',
      'Type-Safe Development',
    ],
  },
];
