import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ProjectsPage.css';
import '../../App.css'
import projectData from '../../data/projectdata.js';
import NavigationBar from '../../components/NavigationBar';
import ProjectModal from './ProjectModal.js';
import ProjectCard from './ProjectCard.js';
import ExperimentCard from './ExperimentCard.js';
import expData from '../../data/expdata.js';

function ProjectsPage() {

  const [selectedProject, setSelectedProject] = React.useState(null);

  return (
    <div className="projects-page">
      <NavigationBar />
        {selectedProject && (
          <ProjectModal selectedProject={selectedProject} setSelectedProject={setSelectedProject}/>
        )}
      <div className="scrollable-wrapper">
        <div className="projects-content patterned-box">
          <Container className="projects-container">
            <h1 className="page-title">Experiments</h1>
            <p className="section-descriptor">These are small-scale projects built for mathematics and artificial intelligence research. Some of these are visualizers for mathematical concepts. Others are AI agent experiments. Some are both.</p>
            <Row className="g-4">
              {expData.map((project) => (
                <Col key={project.id} xs={6} sm={2} md={2} lg={2}>
                  <ExperimentCard project={project} setSelectedProject={setSelectedProject} isActive={project.isActive}/>
                </Col>
              ))}
            </Row>
            <h1 className="page-title">Projects</h1>
            <p className="section-descriptor">And these are user-facing projects (games, tools, apps).</p>
            <Row className="g-4">
              {projectData.map((project) => (
                <Col key={project.id} xs={12} sm={6} md={4}>
                  <ProjectCard project={project} setSelectedProject={setSelectedProject} />
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;