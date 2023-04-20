import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import AdminContext from "../../../../../context/AdminContext";
import PanelButton from "../../../../reusable-ui/Tab";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeAddOutline } from "react-icons/md";
import PanelButtons from "./PanelButtons";
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
      <PanelButtons
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
