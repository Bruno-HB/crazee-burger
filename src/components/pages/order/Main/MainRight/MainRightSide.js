import { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import { theme } from "../../../../../theme";
import AdminPanel from "./Admin/AdminPanel";
import Menu from "./Menu";
import MenuContext from "../../../../../context/MenuContext";
import { fakeMenu } from "../../../../../fakeData/fakeMenu";

export default function MainRightSide() {
  const { isModeAdmin } = useContext(OrderContext);
  const [menu, setMenu] = useState(fakeMenu.MEDIUM);

  const menuContextValue = {
    menu,
    setMenu,
  };

  return (
    <MenuContext.Provider value={menuContextValue}>
      <MainRightSideStyled>
        <Menu />
        {isModeAdmin && <AdminPanel />}
      </MainRightSideStyled>
    </MenuContext.Provider>
  );
}

const MainRightSideStyled = styled.div`
  position: relative;
  overflow-y: hidden;
  display: grid;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};

  &::-webkit-scrollbar {
    display: none;
  }
`;
