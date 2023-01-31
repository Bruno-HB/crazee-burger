import styled from "styled-components";
import { theme } from "../../../theme";
import Card from "../../reusable-ui/Card";
import { fakeMenu1, fakeMenu2 } from "../../../fakeData/fakeMenu";

export default function Main() {
  return (
    <MainStyled>
      {fakeMenu2.map((e) => (
        <Card id={e.id} image={e.imageSource} title={e.title} price={e.price} />
      ))}
    </MainStyled>
  );
}

const MainStyled = styled.div`
  width: 1400px;
  height: 88vh;
  background-color: ${theme.colors.white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-radius: 0px 0px 15px 15px;
`;
