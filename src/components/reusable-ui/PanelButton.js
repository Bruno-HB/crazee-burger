import styled from "styled-components";
import { theme } from "../../theme";

export default function PanelButton({ label, Icon, className }) {
  return (
    <PanelButtonStyled className={className}>
      {Icon && Icon}
      <span>{label}</span>
    </PanelButtonStyled>
  );
}

const PanelButtonStyled = styled.button``;
