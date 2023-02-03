import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import Card from "../../../reusable-ui/Card";

export default function Menu() {
  return (
    <MenuStyled>
      {fakeMenu2.map((e) => (
        <Card id={e.id} image={e.imageSource} title={e.title} price={e.price} />
      ))}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: purple;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
`;
