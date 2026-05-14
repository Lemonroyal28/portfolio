import Image from 'next/image';

interface ActivityCardProps {
  name: string;
  nameUrl?: string;
  logo: string;
  logoOnDark?: boolean;
  years: string;
  description?: string;
  bulletPoints: string[];
}

export default function ActivityCard({
  name,
  nameUrl,
  logo,
  logoOnDark,
  years,
  description,
  bulletPoints,
}: ActivityCardProps) {
  return (
    <div className="activity-card">
      <div className="activity-header">
        <Image
          className={`activity-logo ${logoOnDark ? 'logo-on-dark' : ''}`}
          src={logo}
          alt={name}
          width={60}
          height={60}
        />
        <div className="activity-info">
          <h3 className="activity-name">
            {nameUrl ? (
              <a href={nameUrl} target="_blank" rel="noopener noreferrer">
                {name}
              </a>
            ) : (
              name
            )}
          </h3>
          <div className="activity-years">{years}</div>
          {description && <div className="activity-desc-short">{description}</div>}
        </div>
      </div>
      <ul className="activity-bullets">
        {bulletPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
