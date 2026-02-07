import './App.css';
import HomePage from './pages/HomePage/HomePage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import AboutPage from './pages/AboutPage/AboutPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

function ResumeRedirect() {
  useEffect(() => {
    window.location.href = process.env.PUBLIC_URL + '/resume.pdf';
  }, []);
  
  return <div>Redirecting to document...</div>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resume" element={
          <ResumeRedirect />
        }/>
      </Routes>
    </Router>
  );
}

export default App;
