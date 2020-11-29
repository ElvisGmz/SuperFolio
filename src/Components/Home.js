import React from "react";
import photo from "../assets/profile.webp";
import useDescription from "../hooks/useDescription";
import useTitle from "../hooks/useTitle";

function Home() {
  //EJEMPLO DE COMO USAR LOS HOOKS DE SEO
  useTitle({ title: "Inicio" });
  useDescription({description: "Bienvenido a mi web, puedes leer blog, y otras cositas"})
  
  return (
    <div className="hero">
      <div className="column">
        <div className="imgProfile">
          <img src={photo} alt="" />
        </div>
      </div>
      <div className="column">
        <h1>Hello World! 🖐🏻💻</h1>
        <h2>Front-End Developer</h2>
        <p>
          <code>
            Mi nombre es Elvis vivo en El Salvador, inicié mi aprendizaje como
            desarrollador en 2014. Tengo un especial interés en Desarrolo Web
            dominando mayormente Front-End, pero también puedo desempeñarme en
            Back-end. Actualmente he creado varios proyectos como hobbie y
            también como interés en aportar soluciones a problemas de la vida
            cotidiana-moderna, adquiriendo conocimientos en el camino.
          </code>
        </p>
      </div>
    </div>
  );
}

export default Home;
