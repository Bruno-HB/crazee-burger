import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import AdminContext from "../../../../../context/AdminContext";
import PanelButton from "../../../../reusable-ui/PanelButton";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import PanelButtons from "./PanelButtons";
import PanelContent from "./PanelContent";
import { useState } from "react";

export default function Panel() {
  //state
  const [isCollapsed, setIsCollapsed] = useState(false);
  //comportements

  //affichage

  return (
    <PanelStyled>
      <PanelButtons setIsCollapsed={setIsCollapsed} isCollapsed={isCollapsed} />
      {isCollapsed && <PanelContent />}
    </PanelStyled>
  );
}

const PanelStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
