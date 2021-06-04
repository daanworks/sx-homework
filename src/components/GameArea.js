import React from "react";
import styled from "styled-components";
import Card from "./Card";

const GameArea = () => {
  return(
    <Container>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  )
}

export default GameArea;

const Container = styled.div`
  width: 66%;
  border: 1px solid black;
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  column-gap: 10px;
  align-items: center;
  justify-content: center;
`
