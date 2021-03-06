import React, {useState} from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

const Card = ({card}) => {

  const dispatch = useDispatch();

  const [isFlipped, setIsFlipped] = useState(false);

  const flip = () => {
    setIsFlipped(!isFlipped);
    return dispatch({type: 'INCREASE'});
  }

  return(
    <Container onClick={flip}>
      {
        isFlipped && (
          <Picture src={card.pic} />
        )
      }
    </Container>
  )
}

export default Card;

const Container = styled.div`
  height: 150px;
  width: 150px;
  border: 1px solid lightgray;
  border-radius: 5px;
  box-shadow: 0px 4px 5px 1px rgba(0,0,0,0.25);
  display: flex;
  align-items: center;
  justify-content: center;
`

const Picture = styled.img`
  height: 80%;
`
