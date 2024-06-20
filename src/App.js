import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Four from './Components/error'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Projects from './ProjectsPage'
import Home from './Home'
import {useState} from 'react'

function App() {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <Router>
    <Routes>
      <Route exact path = "/" element={<Home/>}/>
      <Route exact path = "/projects" element={<Projects/>}/>
      <Route path="/projects/*" element={<Projects/>}></Route>
      <Route path="*" element={<Four/>}></Route>
    </Routes>
    </Router>
  );
}

export default App;