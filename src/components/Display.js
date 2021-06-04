import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Display = () => {

  const tries = useSelector(state => state.displayReducer.tries);

  return(
    <Container>
      <p>Current tries: {tries}</p>
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
