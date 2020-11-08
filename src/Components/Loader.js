import React, { PureComponent } from "react";
import loaderSVG from "../assets/loaderTriForce.svg";

export default class Loader extends PureComponent {
  render() {
    return (
      <div className="loading">
        <img src={loaderSVG} alt="" />
      </div>
    );
  }
}
