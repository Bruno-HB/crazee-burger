import { useContext } from "react";
import styled from "styled-components";
import PanelTabs from "./PanelTabs";
import PanelContent from "./PanelContent";
import OrderContext from "../../../../../../context/OrderContext";

export default function AdminPanel() {
  //state
  const { isCollapsed } = useContext(OrderContext);
  //comportements

  //affichage

  return (
    <AdminPanelStyled>
      <PanelTabs />
      {!isCollapsed && <PanelContent />}
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
