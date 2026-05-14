import { profile } from '@/data/profile';

export default function CTA() {
  return (
    <section id="contact" className="cta-section">
      <div className="container">
        <h2 className="cta-title">Get in Touch</h2>
        <p className="cta-subtitle">
          Open to opportunities in full-stack development, data engineering, and automation.
        </p>
        <div className="cta-buttons">
          <a className="cta-button primary" href={`mailto:${profile.email}`}>
            Send Email
          </a>
          <a
            className="cta-button secondary"
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
}
