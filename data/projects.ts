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
    title: 'AI-Powered Data Dashboards & Automated Pipelines',
    description: 'Designed and built end-to-end data pipelines and dynamic visual dashboards for clients, integrating multiple data sources with AI-driven analytics. Automated reporting workflows that reduced manual processing and improved data-driven decision making.',
    tags: ['SQL', 'Azure Synapse', 'Power BI', 'Power Automate', 'ETL'],
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
