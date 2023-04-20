import { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import OrderContext from "../../../../../context/OrderContext";
import { tabsConfig } from "./tabsConfig";

export default function PanelContent() {
  //state
  const { currentTabSelected } = useContext(OrderContext);
  //comportement
  const tabs = tabsConfig;
  const tabSelected = tabs.find((tab) => currentTabSelected === tab.index);
  //affichage
  return (
    <PanelContentStyled>
      <p>{tabSelected.label && tabSelected.label}</p>
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
