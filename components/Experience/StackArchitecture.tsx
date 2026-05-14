import { stackArchitecture } from '@/data/stackArchitecture';

export default function StackArchitecture() {
  return (
    <div className="stack-section">
      <h3 className="stack-section-title">Technology Stack & Architecture</h3>

      {/* Technology Categories */}
      {stackArchitecture.categories.map((category, index) => (
        <div key={index} className="stack-category">
          <div className="stack-category-name">{category.category}</div>
          <div className="timeline-tags">
            {category.technologies.map((tech, techIndex) => (
              <span key={techIndex} className="tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}

      {/* Architecture Overview */}
      <div className="architecture-section">
        <h4 className="stack-section-title">Architecture Overview</h4>

        <ul className="architecture-flow">
          {stackArchitecture.architectureOverview.flow.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>

        <div className="stack-category-name" style={{ marginTop: '20px' }}>
          Key Principles
        </div>
        <ul className="architecture-principles">
          {stackArchitecture.architectureOverview.principles.map((principle, index) => (
            <li key={index}>{principle}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
