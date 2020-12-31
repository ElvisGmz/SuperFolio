import React from "react";
import styled from "styled-components";

export default function Charlas() {
  return (
    <>
      <Title>Charlitas en Comunidades 📢</Title>
      <Subtitle>
        Para recordar, repasar, o ponerte al dia que importa diviertete!
      </Subtitle>
      <VideoFrame>
        <Frame
          src="https://www.youtube.com/embed/b4G8PHNdPnw"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></Frame>
      </VideoFrame>
      <VideoFrame>
        <Frame
          src="https://www.youtube.com/embed/ZT-E8B5SQXI"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></Frame>
      </VideoFrame>
      <VideoFrame>
        <Frame
          src="https://www.youtube.com/embed/YclobFH1rLc"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></Frame>
      </VideoFrame>
    </>
  );
}

const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  margin-top: 2.5rem;
  margin-bottom: 10px;
`;

const Subtitle = styled.h3`
  font-size: 22px;
  text-align: center;
  font-weight: 100;
  margin-top: 0;
  margin-bottom: 3rem;
`;

const VideoFrame = styled.div`
  position: relative;
  padding-bottom: 56.25% /* 16:9 */;
  padding-top: 25;
  height: 0;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 2rem;
`;

const Frame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`;
