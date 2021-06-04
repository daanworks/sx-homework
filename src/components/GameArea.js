import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Card from "./Card";
import {images} from "../data/cards";

const GameArea = () => {

  const [cardImages, setCardImages] = useState([]);

  const duplicateImages = () => {
    setCardImages(images.concat(images));
  }

  useEffect(() => {
    duplicateImages();
  }, []);

  return(
    <Container>
      {
        cardImages
          .sort(() => Math.random() - 0.5)
          .map((element) => (
            <Card name={element.name} pic={element.pic} isFlipped={element.isFlipped} />
          ))
      }
    </Container>
  )
}

export default GameArea;

const Container = styled.div`
  width: 66%;
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  column-gap: 10px;
  align-items: center;
  justify-content: space-between;
`
