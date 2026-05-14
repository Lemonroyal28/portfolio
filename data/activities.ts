export interface Activity {
  name: string;
  nameUrl?: string;
  logo: string;
  logoOnDark?: boolean;
  years: string;
  description?: string;
  bulletPoints: string[];
}

export const activities: Activity[] = [
  {
    name: 'V.V. Mamio',
    nameUrl: 'https://vvmamiogroningen.nl',
    logo: '/assets/mamio.png',
    years: '2020 — Present',
    bulletPoints: [
      'Player from 2020 to present',
      'Secretary of the club (2023–2024)',
      'Social Media Manager (2022–Present)',
      'Team coach and manager (2023–Present)',
    ],
  },
  {
    name: 'FOOTY',
    nameUrl: 'https://www.footy.nl/en/groningen-deparrel/',
    logo: '/assets/footy.webp',
    logoOnDark: true,
    years: '2022 — 2025',
    description: 'Recreational small-sided football league in Groningen',
    bulletPoints: [
      'Referee and coordinator — enforcing rules within established standards, ensuring player safety, promoting fair play, communicating with players and coaches, and reporting incidents and match outcomes',
    ],
  },
  {
    name: 'BALLIE',
    nameUrl: 'https://ballie.nl',
    logo: '/assets/ballie.png',
    years: '2025 — Present',
    description: '7v7 football competition platform with 1000+ weekly participants across NL',
    bulletPoints: [
      'Referee and coordinator — enforcing rules within established standards, ensuring player safety, promoting fair play, communicating with players and coaches, and reporting incidents and match outcomes',
      'Acquisitions liaison',
    ],
  },
];
