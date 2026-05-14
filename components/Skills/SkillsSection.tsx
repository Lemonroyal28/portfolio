import { skillGroups } from '@/data/skills';

export default function SkillsSection() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        {skillGroups.map((group, index) => (
          <div key={index} className={`skill-group ${group.highlight ? 'highlight' : ''}`}>
            <h3 className="skill-group-label">{group.label}</h3>
            <div className="skill-tags">
              {group.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
