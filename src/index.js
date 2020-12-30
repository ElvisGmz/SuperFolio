import React, { Suspense } from "react";
import { createGlobalStyle } from "styled-components";
import { lazy } from "@loadable/component";
import ReactDOM from "react-dom";
import Loader from "./Components/Loader";

const App = lazy(() => import("./App"));

const GlobalStyles = createGlobalStyle`
  /* @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Rubik&display=swap"); */

  @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

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
  /* font-family: "Montserrat", sans-serif; */
  font-family: 'Raleway', sans-serif;
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
