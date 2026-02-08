import './App.css';
import HomePage from './pages/HomePage/HomePage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import AboutPage from './pages/AboutPage/AboutPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function ResumeRedirect() {
  useEffect(() => {
    // Try different path formats
    const pdfUrl = process.env.PUBLIC_URL ? 
      process.env.PUBLIC_URL + '/resume.pdf' : 
      '/resume.pdf';
    
    console.log('Opening PDF at:', pdfUrl); // Debug log
    
    const newWindow = window.open(pdfUrl, '_blank');
    
    if (!newWindow) {
      console.error('Popup blocked or failed to open');
    }
    
    // Redirect back
    setTimeout(() => {
      window.location.replace('/');
    }, 100);
  }, []);
  
  return <div>Opening document...</div>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resume" replace element={
          <ResumeRedirect />
        }/>
      </Routes>
    </Router>
  );
}

export default App;
