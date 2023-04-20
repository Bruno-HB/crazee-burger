import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import AdminContext from "../../../../../context/AdminContext";
import PanelButton from "../../../../reusable-ui/PanelButton";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

export default function Panel() {
  //state
  const { isModeAdmin, setisModeAdmin } = useContext(AdminContext);
  //comportements

  //affichage

  return <>{isModeAdmin && <PanelStyled>Panel</PanelStyled>}</>;
}

const PanelStyled = styled.div`
  background-color: red;
  position: absolute;
  height: 250px;
  bottom: 0;
  left: 0;
  right: 0;
`;
