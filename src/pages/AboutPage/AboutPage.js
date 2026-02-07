import React from 'react';
import './AboutPage.css';
import '../../App.css'
import NavigationBar from '../../components/NavigationBar';
import { Container } from 'react-bootstrap';
function AboutPage() {

  return (
    <div className="about-page">
      <NavigationBar />
      <div className="about-content patterned-box">
          <Container className="about-container">
          < h1 className="page-title">whoami</h1>
          <h3>What's the point?</h3>
          </Container>
        </div>
    </div>
  );
}

export default AboutPage;