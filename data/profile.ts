export interface Profile {
  name: string;
  firstName: string;
  lastName: string;
  labels: string[];
  summary: string;
  email: string;
  linkedin: string;
  linkedinUrl: string;
  location: string;
  coordinates: string;
  photo: string;
}

export const profile: Profile = {
  name: 'Shivaan Satish',
  firstName: 'Shivaan',
  lastName: 'Satish',
  labels: ['Full Stack Engineer', 'Data Systems Developer', 'Automation Builder'],
  summary: 'Industrial engineer turned full-stack engineer, building AI-powered SaaS platforms, automation workflows, and scalable data systems for operational decision-making.',
  email: 'shivaansat@gmail.com',
  linkedin: 'LinkedIn',
  linkedinUrl: 'https://linkedin.com/in/shivaan-satish-6b8653221',
  location: 'Groningen, Netherlands',
  coordinates: '53.2194° N · 6.5665° E',
  photo: '/assets/profile.png',
};
