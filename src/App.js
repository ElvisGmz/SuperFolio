import React, { useState, useEffect } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";
import Loader from "./Components/Loader";
import bg from "./assets/background.svg";
import WatchBlog from "./Components/WatchBlog";
import ListBlogs from "./Components/ListBlogs";

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

      <div className="main_Container">
        <img src={bg} id="bg" alt="" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Blog" component={ListBlogs} />
          <Route path="/Read/:id" component={WatchBlog} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
