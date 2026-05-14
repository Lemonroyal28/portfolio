export interface Education {
  date: string;
  degree: string;
  institution: string;
  institutionUrl?: string;
  logo: string;
  bulletPoints?: string[];
  thesis?: string;
}

export const education: Education[] = [
  {
    date: '2024 — Feb 2026',
    degree: 'MSc Technology & Operations Management',
    institution: 'University of Groningen',
    logo: '/assets/rug.png',
    bulletPoints: ['Focus area: Smart Industry Operations and Development'],
    thesis: 'An Integrated Digital Twin and Machine Learning Framework for Carbon Emission Reduction in Industrial Processes',
  },
  {
    date: '2019 — 2024',
    degree: 'BSc Industrial Engineering & Management',
    institution: 'University of Groningen',
    logo: '/assets/rug.png',
    bulletPoints: [
      'Specialisation in Production Technology and Logistics',
      'Minor in Entrepreneurship and Digital Transformation',
    ],
    thesis: "Unlocking Hydrogen's Potential for Reliable Energy Storage",
  },
];
