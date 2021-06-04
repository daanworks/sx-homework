import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const Display = () => {

  const dispatch = useDispatch();

  const tries = useSelector(state => state.displayReducer.tries);
  const best = useSelector(state => state.displayReducer.best);

  const restart = () => {
    return dispatch({type: 'RESTART'});
  }

  return(
    <Container>
      <CurrentTries>Current tries: {tries}</CurrentTries>
      <Best>Best: {best}</Best>
      <Restart onClick={restart}>RESTART</Restart>
    </Container>
  )
}

export default Display;

const Container = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
`

const CurrentTries = styled.p`
  
`

const Best = styled.p`
  
`

const Restart = styled.div`
  border: 2px solid black;
  border-radius: 4px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.85;
  text-transform: uppercase;
  cursor: pointer;
  padding: 2px 8px;
  font-weight: 600;
`
