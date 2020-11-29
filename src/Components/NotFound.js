import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import notFoundImg from "../assets/404.svg";

export default class Home extends PureComponent {
  render() {
    return (
      <div className="notFoundContainer">
        <img src={notFoundImg} alt="" />
        <h2>Ops! Eso no salio bien</h2>
        <p>Intentalo de nuevo o puedes regresar a la pagina de inicio</p>
        <Link className="btnNotFound" to="/">
          Volver a Inicio
        </Link>
      </div>
    );
  }
}
