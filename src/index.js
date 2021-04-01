import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Four from './Components/error'
import reportWebVitals from './reportWebVitals';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Projects from './ProjectsPage'

const routing = (
  <Router>
    <Switch>
      <Route exact path = "/" component={App}/>
      <Route exact path = "/projects" component={Projects}/>
      <Route component={Four}></Route>
    </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
