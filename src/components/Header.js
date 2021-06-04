import React from "react";
import styled from "styled-components";
import { useHistory } from 'react-router-dom';

const Header = () => {

  const history = useHistory();

  return(
    <Container>
      <Logo src={require(`../images/splendex-logo.svg`).default} onClick={() => {history.push('/')}} />
    </Container>
  )
}

export default Header;

const Container = styled.div`
  height: 60px;
  width: 100%;
  background: black;
  display: flex;
  align-items: center;
`

const Logo = styled.img`
  height: 50px;
  background: transparent;
  margin-left: 10px;
  cursor: pointer;
`
