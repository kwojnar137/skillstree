import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import "./sass/app.scss";
import axios from "axios";

axios.defaults.port = 9000;

const App = () => {
  return (
    <Router basename="/">
      <Routes />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
