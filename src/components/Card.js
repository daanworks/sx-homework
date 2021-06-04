import React from "react";
import styled from "styled-components";

const Card = (props) => {

  const name = props.name;
  const isFlipped = props.isFlipped;
  const pic = props.pic;

  return(
    <Container>
      <Picture src={pic} />
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
