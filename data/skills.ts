export interface SkillGroup {
  label: string;
  skills: string[];
  highlight?: boolean;
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    skills: [
      'Python',
      'SQL',
      'TypeScript',
      'JavaScript',
      'R',
      'MATLAB',
    ],
    highlight: true,
  },
  {
    label: 'Frontend',
    skills: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'shadcn/ui',
    ],
    highlight: true,
  },
  {
    label: 'Backend & Data',
    skills: [
      'Node.js',
      'Supabase',
      'PostgreSQL',
      'ETL',
      'API Design',
      'Authentication',
    ],
    highlight: true,
  },
  {
    label: 'Cloud & Automation',
    skills: [
      'Azure Synapse',
      'Microsoft Fabric',
      'Power Automate',
      'Power Apps',
      'Vercel',
    ],
  },
  {
    label: 'Analytics & Visualization',
    skills: [
      'Power BI',
      'Jupyter',
      'Data Modelling',
      'Digital Twin Modelling',
    ],
  },
  {
    label: 'Methods',
    skills: [
      'Agile/Scrum',
      'Lean Manufacturing',
      'Systems Thinking',
      'Process Optimisation',
      'Project Management',
      'Stakeholder Analysis',
    ],
  },
];
