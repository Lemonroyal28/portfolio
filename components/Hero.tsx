import Image from 'next/image';
import { profile } from '@/data/profile';

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
            <div className="hero-links">
              <a className="hero-link" href={`mailto:${profile.email}`}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m2 4 10 8 10-8" />
                </svg>
                {profile.email}
              </a>
              <a
                className="hero-link"
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                {profile.linkedin}
              </a>
            </div>
            <p className="hero-location">
              {profile.coordinates} — {profile.location}
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
