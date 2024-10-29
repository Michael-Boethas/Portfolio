import { useState } from 'react';
import Image from 'next/image';

export default function ProjectCard({ projectData }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleContent = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <figure className="project-card hover--zoom card shadow rounded-0">
      <Image
        className="project-card__image"
        src={projectData.thumbnail_url}
        alt={`Screenshot of ${projectData.name}`}
        width={400}
        height={300}
        onClick={toggleContent}
        priority
      />
      <figcaption className="card-body">
        <h3 className="card-title fs-4" onClick={toggleContent}>
          {projectData.name}
        </h3>

        <div className={`card-text collapse ${isCollapsed ? '' : 'show'}`}>
          <p>{projectData.description}</p>

          <div className="d-flex flex-column gap-2 py-3">
            <a
              href={projectData.project_url}
              className="btn btn-light-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Site
            </a>
            <a
              href={projectData.codebase_url}
              className="btn btn-light-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
          </div>
        </div>
      </figcaption>
    </figure>
  );
}
