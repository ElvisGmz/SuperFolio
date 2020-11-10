import React, { PureComponent } from "react";
import photo from "../assets/profile.webp";

export default class Home extends PureComponent {
  render() {
    return (
      <div className="hero">
        <div className="column">
          <div className="imgProfile">
            <img src={photo} alt="" />
          </div>
        </div>
        <div className="column">
          <h1>¿Quien Soy? 🖐🏻💻</h1>
          <h2>Front-End Developer</h2>
          <p>
            Soy de El Salvador, Inicie mi aprendizaje como desarrollador en
            2014. Tengo un especial interes en Desarrolo Web dominando
            mayormente Front-End, pero tambien puedo desempeñarme en Back-end.
            Actualmente he creado varios proyectos como hobbie y tambien como
            interes en aportar soluciones a problemas de la vida moderna,
            adquiriendo conocimientos en el camino.
          </p>
        </div>
      </div>
    );
  }
}
