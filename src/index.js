import React, { Suspense } from "react";
import { createGlobalStyle } from "styled-components";
import { lazy } from "@loadable/component";
import ReactDOM from "react-dom";
import Loader from "./Components/Loader";

const App = lazy(() => import("./App"));

const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Rubik&display=swap");

  *{
    box-sizing: border-box;
    z-index: 100;
  }

  *::after, *::before{
    box-sizing: border-box;
  }

  html {
    width: 100vw;
    position: relative;
  }
  
  body {
  margin: 0px;
  font-family: "Montserrat", sans-serif;
  background-color: #1b1e1e;
  color: #fff;
  }
  
  #root {
  margin-top: 0;
  }

  ::-webkit-scrollbar{
    display: none;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <GlobalStyles />
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
