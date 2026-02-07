import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './ProjectsPage.css';
import '../../App.css'
import ReactMarkdown from 'react-markdown';
import { ExternalLink, Code, Figma } from 'lucide-react';

function ProjectModal({ selectedProject, setSelectedProject }) {

    const [isClosing, setIsClosing] = React.useState(false);
    
      const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setSelectedProject(null);
          setIsClosing(false);
        }, 300); // Match your animation duration
      };

    return (<div 
        className={`fullscreen-project patterned-box ${isClosing ? 'closing' : ''}`} 
        onClick={handleClose}
    >
        <button className="close-btn" onClick={handleClose}>×</button>
        <Container className="fullscreen-content" onClick={(e) => e.stopPropagation()}>
            <Row>
                <Col md={6}>
                    <img className="modal-image" src={selectedProject.image} alt={selectedProject.title} />
                </Col>
                <Col md={6}>
                    <img className="modal-image" src={selectedProject.show} alt={selectedProject.title} />
                </Col>
            </Row>
            <h1 className="project-title-text">{selectedProject.title}</h1>
            <h3>{selectedProject.description}</h3>
            <Row className="mt-3">
                <Col className="d-flex gap-3">
                    <a
                        className="showcase-button"
                        href={selectedProject.demoLink} 
                        target="_blank"
                        disabled={!selectedProject.demoLink}
                    >
                        <ExternalLink size={16} className="me-2" />
                        Demo
                    </a>
                    <a 
                        className="showcase-button"
                        href={selectedProject.codeLink} 
                        target="_blank"
                        disabled={!selectedProject.codeLink}
                    >
                        <Code size={16} className="me-2" />
                        Code
                    </a>
                </Col>
            </Row>
            <ReactMarkdown children={selectedProject.text} />;
        </Container>
    </div>
    );
}

export default ProjectModal;