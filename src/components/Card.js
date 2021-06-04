import React, {useState} from "react";
import styled from "styled-components";

const Card = (props) => {

  const name = props.name;
  const pic = props.pic;

  const [isFlipped, setIsFlipped] = useState(props.isFlipped);

  const flip = () => {
    setIsFlipped(!isFlipped);
  }

  return(
    <Container onClick={() => {flip()}}>
      {
        !isFlipped && (
          <Picture src={pic} />
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
