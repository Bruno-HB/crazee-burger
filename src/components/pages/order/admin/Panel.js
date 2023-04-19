import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";

export default function Panel() {
  //state

  //comportements

  //affichage
  return <PanelStyled>Panel</PanelStyled>;
}

const PanelStyled = styled.div`
  position: absolute;
  box-sizing: border-box;
  height: 250px;
  width: 1400px;
  bottom: ${theme.spacing.sm};
  z-index: 1;
  background: ${theme.colors.background_white};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  border: 1px solid #e4e5e9;
  box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.1);
`;
