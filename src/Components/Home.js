import React from "react";
import styled from "styled-components";
import photo from "../assets/profile.webp";
import useDescription from "../hooks/useDescription";
import useTitle from "../hooks/useTitle";

const Row = styled.div`
  position: relative;
  min-height: calc(100vh - 76px);
  max-height: 960px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;
const Column = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: calc(50% - 10px);
  min-width: 300px;
  justify-content: center;
  align-items: flex-start;

  &:last-child {
    align-items: flex-start;
    margin-left: 20px;
  }

  @media (max-width: 600px) {
    &:last-child {
      margin-left: 0px;
    }

    margin-top: 0px;
  }
`;

const HeadHero = styled.h1`
  font-size: 40px;
  padding: 0;
  margin: 0;
  margin-top: 20px;

  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

const SubHero = styled.h2`
  font-size: 12px;
  background-color: #2b2b38;
  color: dodgerblue;
  padding: 0.3rem 0.7rem;
  margin-bottom: 0;
  border-top: 2px solid dodgerblue;
  z-index: 1000;
`;

const Profile = styled.div`
  width: 75vw;
  height: auto;
  margin: auto;
  max-width: 300px;
  max-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  padding: 0;
`;

const ProfileIMG = styled.img`
  width: 100%;
  height: 100%;
  margin: 0;
  object-fit: cover;
`;

const MeDescription = styled.p`
  font-size: 18px;
  margin-top: 0;
  color: #fff;
  background-color: #21212c;
  font-size: 14px;
  font-weight: 100;
  padding: 0.8rem 1rem;
`;

const Code = styled.code`
  line-height: 20px;
  color: #fff;
`;

function Home() {
  //EJEMPLO DE COMO USAR LOS HOOKS DE SEO
  useTitle({ title: "Inicio" });
  useDescription({
    description: "Bienvenido a mi web, puedes leer blog, y otras cositas",
  });

  return (
    <>
      <Row>
        <Column>
          <Profile>
            <ProfileIMG src={photo} alt="Profile" />
          </Profile>
        </Column>
        <Column>
          <HeadHero>Hello World! 🖐🏻💻</HeadHero>
          <SubHero>Front-End Developer</SubHero>
          <MeDescription>
            <Code>
              Mi nombre es Elvis vivo en El Salvador, inicié mi aprendizaje como
              desarrollador en 2014. Tengo un especial interés en Desarrolo Web
              dominando mayormente Front-End, pero también puedo desempeñarme en
              Back-end. Actualmente he creado varios proyectos como hobbie y
              también como interés en aportar soluciones a problemas de la vida
              cotidiana-moderna, adquiriendo conocimientos en el camino.
            </Code>
          </MeDescription>
        </Column>
      </Row>
    </>
  );
}

export default Home;
