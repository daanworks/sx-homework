import React from "react";
import styled from "styled-components";
import Display from "./Display";
import GameArea from "./GameArea";

const Main = () => {

  return(
    <Container>
      <Display />
      <GameArea />
    </Container>
  )
}

export default Main;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
