import React from 'react'
import styled from 'styled-components';
import { theme } from '../theme';

export default function Logo() {
  return (
    <LogoStyled>CRAZEE <img src='/F03 logo-orange.png' alt="Logo of Crazee Burger" /> BURGER</LogoStyled>
  )
}

const LogoStyled = styled.div`
font-family: 'Amatic SC';
font-weight: ${theme.weights.bold};
color: ${theme.colors.primary};
font-size: ${theme.fonts.P6};
display: flex;
justify-content: center;
align-items: center;
img {
    max-width: 15%; 
}
`;
