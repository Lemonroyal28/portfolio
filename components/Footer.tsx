import { profile } from '@/data/profile';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-name">{profile.name}</div>
        <div className="footer-row">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer">
            {profile.linkedin}
          </a>
        </div>
        <div className="footer-copy">{profile.location}</div>
      </div>
    </footer>
  );
}
