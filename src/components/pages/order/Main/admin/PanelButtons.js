import React from "react";
import styled from "styled-components";
import PanelButton from "../../../../reusable-ui/PanelButton";
import { FiChevronDown } from "react-icons/fi";

export default function PanelButtons() {
  return (
    <PanelButtonsStyled>
      <PanelButton Icon={<FiChevronDown />} />
    </PanelButtonsStyled>
  );
}

const PanelButtonsStyled = styled.div`
  display: flex;
  padding: 0 20px;
`;
