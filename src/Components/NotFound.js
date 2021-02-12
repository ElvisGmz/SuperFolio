import React, { PureComponent } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const Fantasma = styled.div`
  * {
    box-sizing: border-box;
  }

  #gorro {
    position: absolute;
    max-width: 200px;
    left: -10px;
    top: -85px;
  }

  .spooky {
    position: relative;
    background-color: #fff;
    border-top-left-radius: 90px;
    border-top-right-radius: 90px;
    height: 220px;
    width: 180px;
    margin: auto;
    animation: flotar 2s infinite;
    -webkit-animation: flotar 2s infinite;
  }

  .spooky::before,
  .spooky::after {
    position: absolute;
    display: inline-block;
    content: "";
    background-color: #fff;
    width: 40px;
    height: 40px;
    top: 130px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    animation: flotar 0.2s infinite;
    -webkit-animation: flotar 0.2s infinite;
  }

  .spooky::before {
    left: -20px;
  }

  .spooky::after {
    right: -20px;
  }

  .eyes {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: auto;
    width: 100px;
    height: 110px;
  }

  .eyes * {
    background-color: #252c49;
    height: 35px;
    width: 35px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
  }

  .smoth {
    background-color: #252c49;
    width: 70px;
    height: 40px;
    margin: auto;
    margin-top: 15px;
    border-bottom-left-radius: 35px;
    border-bottom-right-radius: 35px;
  }

  .smoth::after {
    content: "";
    background-color: #fff;
    height: 10px;
    width: 10px;
    position: absolute;
    margin-top: -1px;
    margin-left: 15px;
  }

  .feets {
    display: flex;
    position: absolute;
    bottom: -20px;
  }

  .feets * {
    background-color: #fff;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
  }

  .sombra {
    margin-top: 60px;
    background-color: #252c49bf;
    width: 200px;
    height: 40px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    animation: sombra 2s infinite;
    -webkit-animation: sombra 2s infinite;
  }

  @keyframes flotar {
    0%,
    100% {
      transform: translateY(-10px);
      -webkit-transform: translateY(-10px);
      -moz-transform: translateY(-10px);
      -ms-transform: translateY(-10px);
      -o-transform: translateY(-10px);
    }

    50% {
      transform: translateY(10px);
      -webkit-transform: translateY(10px);
      -moz-transform: translateY(10px);
      -ms-transform: translateY(10px);
      -o-transform: translateY(10px);
    }
  }

  @keyframes sombra {
    0%,
    100% {
      transform: scale(0.8);
      -webkit-transform: scale(0.8);
      -moz-transform: scale(0.8);
      -ms-transform: scale(0.8);
      -o-transform: scale(0.8);
    }

    50% {
      transform: scale(1);
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
    }
  }
`;

export default class Home extends PureComponent {
  render() {
    return (
      <NotFound>
        <Fantasma>
          <div class="spooky">
            <img
              id="gorro"
              src="https://cdn.pixabay.com/photo/2020/05/20/02/51/heart-5193242_960_720.png"
              alt=""
            />
            <div className="eyes">
              <div></div>
              <div></div>
            </div>
            <div className="smoth"></div>
            <div className="feets">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="sombra"></div>
        </Fantasma>

        <SubHeader>¡Ay... 👻 Me asustaste!</SubHeader>
        <Parrafo>¿Tambien te has perdido? Regresemos juntos</Parrafo>
        <Link
          style={{ textDecoration: "none" }}
          classNameName="btnNotFound"
          to="/"
        >
          <Button>¡Vamos 😊!</Button>
        </Link>
      </NotFound>
    );
  }
}
