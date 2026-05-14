import { education } from '@/data/education';
import TimelineEntry from '@/components/Experience/TimelineEntry';

export default function EducationSection() {
  return (
    <section id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          {education.map((edu, index) => (
            <TimelineEntry
              key={index}
              date={edu.date}
              role={edu.degree}
              company={edu.institution}
              companyUrl={edu.institutionUrl}
              logo={edu.logo}
              bulletPoints={edu.bulletPoints}
              thesis={edu.thesis}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
