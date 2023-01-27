import styled from "styled-components";
import { theme } from "../../../theme";

export default function Main() {
  return <MainStyled></MainStyled>;
}

const MainStyled = styled.div`
  min-width: 1400px;
  height: 88vh;
  background-color: ${theme.colors.white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-radius: 0px 0px 15px 15px;
`;
