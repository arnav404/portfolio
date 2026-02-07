import React from 'react';
import './ProjectsPage.css';

function ExperimentCard({ project, setSelectedProject}) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} 
      className="experiment-card" 
      onClick={() => setSelectedProject(project)}
    >
        <img className="project-image"
          src={isHovered ? project.image : project.image} 
          alt={project.title} 
        />
      <div className="project-content">
        <p>{project.description}</p>
      </div>
    </div>
  );
}

export default ExperimentCard;