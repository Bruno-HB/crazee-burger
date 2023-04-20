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

  //comportements

  //affichage

  return <PanelStyled>Panel</PanelStyled>;
}

const PanelStyled = styled.div`
  position: absolute;
  height: 250px;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;
