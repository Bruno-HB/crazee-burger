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
import { fakeMenu } from "../../../../../fakeData/fakeMenu";

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
      {menu.length === 0 && (
        <div className="empty-menu">
          {isModeAdmin && (
            <div>
              <h1>Le menu est vide ?</h1>
              <h2>Cliquez ci-dessous pour le réinitialiser</h2>
              <PrimaryButton
                className={"generate-button"}
                label="Générer de nouveaux  produits"
                onClick={() => setMenu(fakeMenu.MEDIUM)}
              />
            </div>
          )}
          {!isModeAdmin && (
            <div>
              <h1>Victime de notre succès ! :D</h1>
              <h2>de nouvelles recettes sont en cours de préparation.</h2>
              <h2>à très vite !</h2>
            </div>
          )}
        </div>
      )}
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

  .empty-menu {
    text-align: center;
    min-width: 400px;
    margin: auto;
    padding: 40px ${theme.spacing.lg};
    border-radius: ${theme.borderRadius.round};
    font-family: "Amatic SC", cursive;

    h1 {
      color: ${theme.colors.greyBlue};
      font-size: ${theme.fonts.size.P5};
    }

    h2 {
      margin: 20px 10px 10px;
      color: ${theme.colors.greyBlue};
      font-size: ${theme.fonts.size.P4};
      font-weight: ${theme.fonts.weights.regular};
      word-wrap: normal;
    }
    .generate-button {
      margin-top: 31px;
      width: 224.05px;
      font-size: ${theme.fonts.size.XS};
      line-height: ${theme.fonts.size.XS};
    }
  }
`;
