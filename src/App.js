import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import ExperiencePage from "./pages/experiencePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/experiencePage" component={ExperiencePage} exact />
      </Switch>
    </Router>
  );
}

export default App;
