import React from "react";
import styled from "styled-components";

const Display = () => {
  return(
    <Container>
      <p>Current tries: 1</p>
      <p>Best: 9</p>
      <p>Button</p>
    </Container>
  )
}

export default Display;

const Container = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid black;
  width: 66%;
  display: flex;
  justify-content: space-between;
`
