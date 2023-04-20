import React from "react";
import styled from "styled-components";
import PanelButton from "../../../../reusable-ui/PanelButton";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import { theme } from "../../../../../theme";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

export default function PanelButtons({
  isCollapsed,
  setIsCollapsed,
  isEditSelected,
  setIsEditSelected,
  isAddSelected,
  setIsAddSelected,
}) {
  //state

  //comportement
  const handleClickAddButton = () => {
    setIsCollapsed(false);
    setIsAddSelected(true);
    setIsEditSelected(false);
  };
  const handleClickEditButton = () => {
    setIsCollapsed(false);
    setIsAddSelected(false);
    setIsEditSelected(true);
  };
  return (
    <PanelButtonsStyled>
      <PanelButton
        label=""
        Icon={!isCollapsed ? <FiChevronDown /> : <FiChevronUp />}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? "is-active" : ""}
      />
      <PanelButton
        label="Ajouter un produit"
        Icon={<AiOutlinePlus />}
        onClick={handleClickAddButton}
        className={isAddSelected ? "is-active" : ""}
      />
      <PanelButton
        label="Modifier un produit"
        Icon={<MdModeEditOutline />}
        onClick={handleClickEditButton}
        className={isEditSelected ? "is-active" : ""}
      />
    </PanelButtonsStyled>
  );
}

const PanelButtonsStyled = styled.div`
  display: flex;
  padding: 0 20px;

  .is-active {
    color: white;
    border-color: ${theme.colors.background_dark};
    background-color: ${theme.colors.background_dark};
  }

  button {
    margin-left: 1px;
  }
`;
