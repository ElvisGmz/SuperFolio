import React, { PureComponent } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import build from '../assets/build.svg'

export default class Construct extends PureComponent {
  render() {
    return (
      <NotFound>
        <Icon src={build} />
        <SubHeader>¡Hey... 🚧 Con cuidado!</SubHeader>
        <Parrafo>Aun estamos construyendo este sitio 👷🏻‍♂️ Ve a un lugar seguro</Parrafo>
        <Link
          style={{ textDecoration: "none" }}
          classNameName="btnNotFound"
          to="/"
        >
          <Button>¡Llevame 🎉!</Button>
        </Link>
      </NotFound>
    );
  }
}

const NotFound = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 76px);
  box-sizing: border-box;
`;

const Icon = styled.img`
  width: 100%;
  max-width: 700px;
  max-height: calc(100vh - 300px);
`

const SubHeader = styled.h2`
  text-align: center;
  margin-bottom: 0;
  margin-left: 15px;
  margin-right: 15px;
`;

const Parrafo = styled.p`
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1px;
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
