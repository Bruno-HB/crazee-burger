import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import Card from "../../../reusable-ui/Card";

export default function Menu() {
  return (
    <MenuStyled className="menu">
      {fakeMenu2.map((e) => (
        <Card id={e.id} image={e.imageSource} title={e.title} price={e.price} />
      ))}
    </MenuStyled>
  );
}

const MenuStyled = styled.div``;
