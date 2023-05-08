import { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import { formatPrice } from "../../../../../utils/maths";
import Card from "../../../../reusable-ui/Card";
import {
  getFilteredArrayWithoutSelected,
  parseJson,
} from "../../../../../utils/functions";
import MenuContext from "../../../../../context/MenuContext";
import OrderContext from "../../../../../context/OrderContext";
import PrimaryButton from "../../../../reusable-ui/PrimaryButton";

export default function Menu() {
  const { menu, setMenu } = useContext(MenuContext);
  const { isModeAdmin } = useContext(OrderContext);

  //comportement
  const handleClickDeleteButton = (id) => {
    const copyMenu = parseJson(menu);
    const updatedMenu = getFilteredArrayWithoutSelected(copyMenu, id);
    setMenu(updatedMenu);
  };

  return (
    <MenuStyled>
      {menu.length > 0 &&
        menu.map(({ id, title, imageSource, price }) => {
          return (
            <Card
              key={id}
              id={id}
              onClick={handleClickDeleteButton}
              title={title}
              imageSource={imageSource}
              leftDescription={formatPrice(price)}
            />
          );
        })}
      {menu.length === 0 && `${isModeAdmin ? `test` : "sismique"}`}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: scroll;
`;
