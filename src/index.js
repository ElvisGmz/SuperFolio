import React, { Suspense } from "react";
import { createGlobalStyle } from "styled-components";
import { lazy } from "@loadable/component";
import ReactDOM from "react-dom";
import Loader from "./Components/Loader";
import RubikFont from "./fonts/Rubik-VariableFont_wght.ttf"

const App = lazy(() => import("./App"));
  
  const GlobalStyles = createGlobalStyle`
  
  @font-face {
    font-family: "Rubik";
    src: url(${RubikFont});
    font-weight: 100 600;
  }
  
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
      scrollbar-width: none;
    }
    
    body {
    margin: 0px;
    /* font-family: "Montserrat", sans-serif; */
    /* font-family: 'Raleway', sans-serif; */
    font-family: 'Rubik', sans-serif;
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
  // <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <GlobalStyles />
      <App />
    </Suspense>
  // </React.StrictMode>,
  ,
  document.getElementById("root")
);
