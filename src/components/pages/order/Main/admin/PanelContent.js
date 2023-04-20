import { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import OrderContext from "../../../../../context/OrderContext";

export default function PanelContent() {
  //state
  const { isEditSelected, isAddSelected } = useContext(OrderContext);
  //comportement

  //affichage
  return (
    <PanelContentStyled>
      <p>
        {isAddSelected && "Ajouter un produit"}
        {isEditSelected && "Modifier un produit"}
      </p>
    </PanelContentStyled>
  );
}

const PanelContentStyled = styled.div`
  height: 250px;
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  p {
    padding: 0 20px;
  }
`;
