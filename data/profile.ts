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
  labels: ['Engineer', 'Developer', 'Problem Solver'],
  summary: 'Industrial engineer turned full-stack data engineer. I build data systems, automate workflows, and solve operational problems — from maritime compliance to AI-powered dashboards.',
  email: 'shivaansat@gmail.com',
  linkedin: 'LinkedIn',
  linkedinUrl: 'https://linkedin.com/in/shivaan-satish-6b8653221',
  location: 'Groningen, NL',
  coordinates: '53.2194° N · 6.5665° E',
  photo: '/assets/profile.png',
};
