import styled from "styled-components";
import { theme } from "../../../../theme";
import MainRightSide from "./MainRight/MainRightSide";
//import Basket from "./Basket";

export default function Main() {
  return (
    <MainStyled>
      {/*<Basket />*/}
      <MainRightSide />
    </MainStyled>
  );
}

const MainStyled = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  background: ${theme.colors.background_white};
  height: calc(95vh - 10vh);

  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  display: grid;
  grid-template-columns: 1fr;

  overflow-y: scroll;
  /* .basket {
    background: pink;
  } */

  .menu-and-admin-panel {
    position: relative;
    overflow-y: hidden;
    display: grid;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
