import React, { Suspense } from "react";
import styled from "styled-components";
import { lazy } from "@loadable/component";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Loader from "./Components/Loader";
import bg from "./assets/background.svg";

const NavBar = lazy(() => import("./Components/NavBar"));
const Home = lazy(() => import("./Components/Home"));
const NotFound = lazy(() => import("./Components/NotFound"));
const WatchBlog = lazy(() => import("./Components/WatchBlog"));
const ListBlogs = lazy(() => import("./Components/ListBlogs"));

const Container = styled.div`
  max-width: 1140px;
  margin: auto;
  padding: 10px 10px;
  padding-top: 66px;
  transition: 0.2s all;
  -webkit-transition: 0.2s all;
  -moz-transition: 0.2s all;
  -ms-transition: 0.2s all;
  -o-transition: 0.2s all;
`;

const Background = styled.img`
  position: absolute;
  width: 100vw;
  left: 0;
  top: 0;
  right: 0;
  height: 100%;
  object-fit: cover;
  z-index: -10;
  min-height: 100vh;
`;

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <NavBar />

        <Container>
          <Background src={bg} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Blog" component={ListBlogs} />
            <Route path="/Entrada/:id" component={WatchBlog} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Container>
      </Suspense>
    </Router>
  );
}

export default App;
