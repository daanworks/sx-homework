import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Card from "./Card";
import {images} from "../data/cards";

const GameArea = () => {

  const [cards, setCards] = useState([]);
  const [openCards, setOpenCards] = useState([]);
  const [moves, setMoves] = useState(0);

  const duplicateImages = () => {
    setCards(images.concat(images));
  }

  useEffect(() => {
    duplicateImages();
  }, []);

  return(
    <Container>
      {
        cards
          .sort(() => Math.random() - 0.5)
          .map((card, index) => (
            <Card
              key={index}
              card={card}
            />
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
  justify-content: center;
`
