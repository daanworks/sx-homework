import React, {useState} from "react";
import styled from "styled-components";

const Card = ({ card }) => {

  const [isFlipped, setIsFlipped] = useState(false);

  const flip = () => {
    setIsFlipped(!isFlipped);
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
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Picture = styled.img`
  height: 80%;
`
