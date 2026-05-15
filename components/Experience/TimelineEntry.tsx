import Image from 'next/image';

interface TimelineEntryProps {
  date: string;
  isNow?: boolean;
  role: string;
  company: string;
  companyUrl?: string;
  location?: string;
  logo?: string;
  description?: string;
  bulletPoints?: string[];
  tags?: string[];
  thesis?: string;
  techStack?: string[];
}

export default function TimelineEntry({
  date,
  isNow = false,
  role,
  company,
  companyUrl,
  location,
  logo,
  description,
  bulletPoints,
  tags,
  thesis,
  techStack,
}: TimelineEntryProps) {
  return (
    <div className={`timeline-entry ${isNow ? 'now' : ''}`}>
      <div className="timeline-date">
        {date}
        {isNow && <span className="badge-now">NOW</span>}
      </div>
      <div className="timeline-role">{role}</div>
      <div className="timeline-company">
        {logo && logo.trim() !== '' ? (
          <Image
            className="company-logo"
            src={logo}
            alt={company}
            width={26}
            height={26}
          />
        ) : (
          <div className="company-logo-placeholder">
            {company.substring(0, 2).toUpperCase()}
          </div>
        )}
        {companyUrl ? (
          <a href={companyUrl} target="_blank" rel="noopener noreferrer">
            {company}
          </a>
        ) : (
          <span>{company}</span>
        )}
        {location && <span> — {location}</span>}
      </div>
      {description && (
        <div className="timeline-desc">
          <p>{description}</p>
        </div>
      )}
      {bulletPoints && bulletPoints.length > 0 && (
        <div className="timeline-desc">
          <ul>
            {bulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      )}
      {techStack && techStack.length > 0 && (
        <div className="timeline-tech-stack">
          {techStack.map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      )}
      {tags && tags.length > 0 && (
        <div className="timeline-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      )}
      {thesis && (
        <div className="timeline-thesis">
          <span>Thesis</span>
          <br />
          {thesis}
        </div>
      )}
    </div>
  );
}
