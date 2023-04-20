import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function PanelContent({ isEditSelected, isAddSelected }) {
  return (
    <PanelContentStyled>
      {isAddSelected && "Ajouter un produit"}
      {isEditSelected && "Modifier un produit"}
    </PanelContentStyled>
  );
}

const PanelContentStyled = styled.div`
  height: 250px;
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;
