export interface Language {
  name: string;
  proficiency: string;
  percentage: number;
}

export const languages: Language[] = [
  {
    name: 'English',
    proficiency: 'Native speaker',
    percentage: 95,
  },
  {
    name: 'Tamil',
    proficiency: 'Native speaker',
    percentage: 95,
  },
  {
    name: 'Dutch',
    proficiency: 'Conversational',
    percentage: 40,
  },
];
