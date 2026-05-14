import { experience } from '@/data/experience';
import TimelineEntry from './TimelineEntry';

export default function ExperienceSection() {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experience.map((exp, index) => (
            <TimelineEntry
              key={index}
              date={exp.date}
              isNow={index === 0}
              role={exp.role}
              company={exp.company}
              companyUrl={exp.companyUrl}
              logo={exp.logo}
              description={exp.description}
              bulletPoints={exp.bulletPoints}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
