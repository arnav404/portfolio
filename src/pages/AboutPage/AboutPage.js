import React from 'react';
import './AboutPage.css';
import '../../App.css'
import ReactMarkdown from 'react-markdown';
import NavigationBar from '../../components/NavigationBar';
import { Container } from 'react-bootstrap';
function AboutPage() {

  const aboutText = `_"Nature, it seems, is the popular name for milliards and milliards and milliards of particles playing their infinite game of billiards and billiards and billiards."_ - Piet Hein.\n\n This website is both a travel log of my journey to the frontier of AI and complexity science research and a way to show off cool things I've worked on over the years.\n\n **Currently reading:** Cormac McCarthy Novels, _Birth of a Theorem_ by Cédric Villani, _Gödel, Escher, Bach_ by Douglas Hofstadter.\n\n **Currently watching:** _A Knight of the Seven Kingdoms_ 🥚, _Deadwood_.`;

  return (
    <div className="about-page">
      <NavigationBar />
      <div className="about-content patterned-box">
          <Container className="about-container">
          < h1 className="page-title">Who Am I?</h1>
          <h3>
            <ReactMarkdown children={aboutText} />
          </h3>
          </Container>
        </div>
    </div>
  );
}

export default AboutPage;