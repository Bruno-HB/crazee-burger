import React from "react";
import styled from "styled-components";
import PanelButton from "../../../../reusable-ui/PanelButton";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import { theme } from "../../../../../theme";

export default function PanelButtons({ isCollapsed, setIsCollapsed }) {
  //comportement
  const handleClick = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <PanelButtonsStyled>
      <PanelButton
        Icon={isCollapsed ? <FiChevronDown /> : <FiChevronUp />}
        onClick={handleClick}
        className={!isCollapsed ? "is-active" : ""}
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
`;
