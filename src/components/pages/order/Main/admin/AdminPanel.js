import React, { useContext } from "react";
import styled from "styled-components";
import PanelTabs from "./PanelTabs";
import PanelContent from "./PanelContent";
import { useState } from "react";

export default function AdminPanel() {
  //state
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isEditSelected, setIsEditSelected] = useState(false);
  const [isAddSelected, setIsAddSelected] = useState(true);
  //comportements

  //affichage

  return (
    <AdminPanelStyled>
      <PanelTabs
        setIsCollapsed={setIsCollapsed}
        isCollapsed={isCollapsed}
        isEditSelected={isEditSelected}
        setIsEditSelected={setIsEditSelected}
        isAddSelected={isAddSelected}
        setIsAddSelected={setIsAddSelected}
      />
      {!isCollapsed && (
        <PanelContent
          isEditSelected={isEditSelected}
          isAddSelected={isAddSelected}
        />
      )}
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
