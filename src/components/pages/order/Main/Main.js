import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";
import Panel from "./Admin/Panel";
import { useContext } from "react";
import AdminContext from "../../../../context/AdminContext";

export default function Main() {
  const { isModeAdmin } = useContext(AdminContext);

  return (
    <MainStyled>
      {/* <div className="basket">Basket</div> */}
      <div className="menu-and-panel">
        <Menu />
        {isModeAdmin && <Panel />}
      </div>
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

  .menu-and-panel {
    position: relative;
    overflow-y: hidden;
    display: grid;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
