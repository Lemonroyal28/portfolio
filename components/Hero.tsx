import Image from 'next/image';
import { profile } from '@/data/profile';

const stackBadges = ['Next.js', 'TypeScript', 'Supabase', 'Azure', 'Power BI', 'Automation'];

export default function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-label">{profile.labels.join(' · ')}</p>
            <h1 className="hero-name">
              {profile.firstName}
              <br />
              <span className="accent">{profile.lastName}</span>
            </h1>
            <p className="hero-summary">{profile.summary}</p>

            <div className="hero-cta-buttons">
              <a className="cta-button primary" href={`mailto:${profile.email}`}>
                Contact Me
              </a>
              <a
                className="cta-button secondary"
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View LinkedIn
              </a>
              <a
                href="/Shivaan-Satish-CV.pdf"
                download="Shivaan-Satish-CV.pdf"
                className="cta-button secondary"
                aria-label="Download CV as PDF"
              >
                Download CV
              </a>
            </div>

            <div className="hero-stack-badges">
              {stackBadges.map((tech, index) => (
                <span key={index} className="stack-badge">
                  {tech}
                </span>
              ))}
            </div>

            <p className="hero-location">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{display: 'inline', marginRight: '6px', verticalAlign: 'middle'}}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              {profile.location}
            </p>
          </div>
          <Image
            className="hero-photo"
            src={profile.photo}
            alt={profile.name}
            width={260}
            height={260}
            priority
          />
        </div>
      </div>
    </section>
  );
}
