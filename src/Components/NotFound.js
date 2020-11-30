import React, { PureComponent } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import notFoundImg from "../assets/404.svg";

const NotFound = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 76px);
`;

const Icon = styled.img`
  width: 100%;
  max-width: 80vw;
  min-height: 200px;
  margin-top: 20px;
  max-height: calc(100vh - 350px);
`;

const SubHeader = styled.h2`
  text-align: center;
  margin-bottom: 0;
  margin-left: 15px;
  margin-right: 15px;
`;

const Parrafo = styled.p`
  text-align: center;
  font-size: 14px;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 25px;
`;

const Button = styled.span`
  text-decoration: none;
  font-size: 14px;
  padding: 0.7rem 1rem;
  color: #fff;
  background-color: rgb(29, 122, 214);
  border: 0;
  border-radius: 25px;
  -webkit-border-radius: 25px;
  -moz-border-radius: 25px;
  -ms-border-radius: 25px;
  -o-border-radius: 25px;
  cursor: pointer;

  &:hover {
    background-color: dodgerblue;
  }
`;

export default class Home extends PureComponent {
  render() {
    return (
      <NotFound>
        <Icon src={notFoundImg} alt="Icon 404" />
        <SubHeader>Ops! Eso no salio bien</SubHeader>
        <Parrafo>
          Intentalo de nuevo o puedes regresar a la pagina de inicio
        </Parrafo>
        <Link style={{ textDecoration: "none" }} className="btnNotFound" to="/">
          <Button>Volver a Inicio</Button>
        </Link>
      </NotFound>
    );
  }
}
