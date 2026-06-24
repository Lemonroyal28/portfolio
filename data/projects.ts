export interface Project {
  label: string;
  title: string;
  description: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    label: 'MSc Thesis',
    title: 'Digital Twin & ML Framework for Carbon Emission Reduction',
    description: 'Developed an integrated digital twin and machine learning framework targeting carbon emission reduction in industrial processes. Combined simulation modelling with predictive analytics to identify optimisation opportunities in real-world production environments.',
    tags: ['Python', 'Machine Learning', 'Digital Twin', 'Simulation', 'Industrial Processes'],
  },
  {
    label: 'Cumlaude.AI',
    title: 'AI-Powered SaaS Platforms & Automation Systems',
    description: 'Built full-stack SaaS platforms with AI-driven automation, integrating multiple data sources and intelligent workflows. Developed end-to-end solutions with real-time dashboards, automated pipelines, and AI-enhanced decision making for client applications.',
    tags: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Supabase', 'PostgreSQL', 'Vercel', 'ETL'],
  },
  {
    label: 'Royal Wagenborg',
    title: 'Hazardous Materials Tracking & Digital Framework',
    description: 'Introduced protocols for tracking, handling, and disposal of hazardous materials on board ships throughout their life cycle. Collaborated with leading companies on digitalised tracking solutions and created a framework for in-house tracking software development.',
    tags: ['Maritime Compliance', 'Process Design', 'Software Framework', 'Hazmat Protocols'],
  },
  {
    label: 'BSc Thesis',
    title: "Unlocking Hydrogen's Potential for Reliable Energy Storage",
    description: 'Researched and modelled hydrogen-based energy storage solutions, evaluating technical feasibility and economic viability as a pathway toward reliable renewable energy infrastructure.',
    tags: ['Energy Systems', 'Modelling', 'Hydrogen', 'Matlab'],
  },
];
