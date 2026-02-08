import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './ProjectsPage.css';
import '../../App.css'
import TextChunk from './TextChunk';

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
    >
        <button className="close-btn" onClick={handleClose}>×</button>
        <div className="scrollable" >
            <Container className="fullscreen-content">
                <Row className="g-4">
                    <Col md={6}>
                        <img className="modal-image" src={selectedProject.show} alt={selectedProject.title} />
                    </Col>
                </Row>
                <h1 className="project-title-text">{selectedProject.title}</h1>
                {selectedProject.date && <p className="project-date">{selectedProject.date}</p>}
                {selectedProject.text.map((textChunk, index) => (
                    <TextChunk key={index} textChunk={textChunk} />
                ))}
            </Container>
            <div style={{'height':'5rem'}}></div>
        </div>
    </div>
    );
}

export default ProjectModal;