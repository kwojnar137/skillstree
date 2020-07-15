import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './Routes'
import './sass/app.scss'


const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

