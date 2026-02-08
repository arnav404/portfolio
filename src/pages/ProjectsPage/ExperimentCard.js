import React from 'react';
import './ProjectsPage.css';

function ExperimentCard({ project, setSelectedProject}) {
  const [isHovered, setIsHovered] = React.useState(false);

  if(!project.isActive) {
    return (
    <div className="experiment-card-inactive" >
          <img className="project-image"
            src={project.image} 
            alt={project.title} 
          />
        <div className="project-content">
          <p>{project.description}</p>
        </div>
      </div>
    );
  }
  else {
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
          <p>{project.text[0].content}</p>
        </div>
      </div>
    );
  }
}

export default ExperimentCard;