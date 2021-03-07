import React, { PureComponent } from "react";
import styled from "styled-components";

const LoaderDiv = styled.div`
  position: absolute;
  width: 100wv;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #21212c;
  z-index: 1000000;

  body {
    background-color: #21212c;
    min-height: 100vh;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    font-family: system-ui;
    font-size: 18px;
    color: white;
  }

  .container {
    height: 150px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
  }

  .triangle {
    width: 0px;
    height: 0px;
    box-sizing: border-box;
    border: transparent solid 35px;
    border-bottom: cyan 60px solid;
    border-top: transparent 0px solid;
    animation: girar 0.8s infinite linear;
    transform-origin: center 65%;
  }

  .row {
    display: flex;
    justify-content: center;
  }

  .row .triangle {
    border-bottom: crimson 60px solid;
  }

  .row .triangle:last-child {
    border-bottom: yellow 60px solid;
  }

  @keyframes girar {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default class Loader extends PureComponent {
  render() {
    return (
      <LoaderDiv>
        <div className="container">
          <div className="triangle"></div>
          <div className="row">
            <div className="triangle"></div>
            <div className="triangle"></div>
          </div>
        </div>
      </LoaderDiv>
    );
  }
}
