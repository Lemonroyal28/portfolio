interface ProjectCardProps {
  label: string;
  title: string;
  description: string;
  tags: string[];
}

export default function ProjectCard({ label, title, description, tags }: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className="project-label">{label}</div>
      <h3 className="project-title">{title}</h3>
      <p className="project-desc">{description}</p>
      <div className="project-tags">
        {tags.map((tag, index) => (
          <span key={index} className="project-tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
