import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Moment from "react-moment";

export default function BlogItem(props) {
  const { push } = useHistory();

  const sendID = useCallback(
    (id) => {
      push("/Entrada/" + id);
    },
    [push]
  );

  return (
    <Card onClick={() => sendID(props.idBlog)}>
      <Banner src={props.bannerUrl} alt="Banner" />
      <Content>
        <Title>{props.title}</Title>
        <Details>
          {props.author} | <Moment format="DD / MM / YYYY">{props.date}</Moment>
        </Details>
        <Description>{props.content}</Description>
      </Content>
    </Card>
  );
}

const Card = styled.div`
  background-color: #21212c;
  border-radius: 10px;
  min-width: 260px;
  max-width: 347px;
  flex: 31%;
  margin: 10px;
  font-size: 14px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.02);
  }
`;

const Banner = styled.img`
  width: 100%;
  height: 170px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 10px 15px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 400;
  padding-top: 5px;
`;

const Details = styled.p`
  font-size: 12px;
  color: cyan;
  border-bottom: 1px solid #404040;
  padding-top: 3px;
  padding-bottom: 12px;
`;

const Description = styled.p`
  font-size: 12px;
  line-height: 18px;
`;
