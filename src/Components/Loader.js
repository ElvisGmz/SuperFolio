import React, { PureComponent } from "react";
import styled from "styled-components";
import loaderSVG from "../assets/loaderTriForce.svg";

const LoaderDiv = styled.div`
  position: absolute;
  width: 100wv;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #212429;
  z-index: 1000000;
`;

export default class Loader extends PureComponent {
  render() {
    return (
      <LoaderDiv>
        <img src={loaderSVG} alt="" />
      </LoaderDiv>
    );
  }
}
