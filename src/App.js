import React, { useState, useEffect } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Blog from "./Components/Blog";
import NotFound from "./Components/NotFound";
import Loader from "./Components/Loader";

import bg from './assets/background.svg'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Router>
      <NavBar />
      
      <img src={bg} id="bg" alt=""/>
      <div className="main_Container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Blog" component={Blog} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
