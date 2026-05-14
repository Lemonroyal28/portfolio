import type { Metadata } from 'next';
import { Space_Grotesk, Space_Mono } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Shivaan Satish — CV',
  description: 'Industrial engineer turned full-stack data engineer. I build data systems, automate workflows, and solve operational problems — from maritime compliance to AI-powered dashboards.',
  keywords: ['Shivaan Satish', 'Full Stack Engineer', 'Data Engineer', 'Next.js', 'React', 'TypeScript', 'SaaS', 'AI', 'Automation'],
  authors: [{ name: 'Shivaan Satish' }],
  openGraph: {
    title: 'Shivaan Satish — CV',
    description: 'Junior Full Stack Engineer at CUMLAUDE.AI',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${spaceMono.variable}`}>
      <body>
        {children}
        <script defer src="/_vercel/insights/script.js"></script>
      </body>
    </html>
  );
}
