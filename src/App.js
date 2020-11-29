import React, {Suspense} from "react";
import {lazy} from '@loadable/component';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Loader from './Components/Loader'
import bg from './assets/background.svg'
const NavBar = lazy(()=> import ("./Components/NavBar"));
const Home = lazy(()=> import("./Components/Home"));
const NotFound = lazy(()=> import("./Components/NotFound"));
const WatchBlog = lazy(()=> import( "./Components/WatchBlog"));
const ListBlogs = lazy(()=> import("./Components/ListBlogs"));

function App() {

  return (
    <Router>
        <Suspense fallback={<Loader />}>
      <NavBar />

      <div className="main_Container">
        <img src={bg} id="bg" alt="" />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Blog" component={ListBlogs} />
            <Route path="/Entrada/:id" component={WatchBlog} />
            <Route path="*" component={NotFound} />
          </Switch>
      </div>
        </Suspense>
    </Router>
)}

export default App;
