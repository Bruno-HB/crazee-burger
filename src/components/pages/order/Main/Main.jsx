import styled from "styled-components";
import { theme } from "../../../../theme";
import Card from "../../../reusable-ui/Card";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";

export default function Main() {
  return (
    <MainStyled>
      <div className="basket">basket</div>
      <div className="menu">
        {fakeMenu2.map((e) => (
          <Card
            id={e.id}
            image={e.imageSource}
            title={e.title}
            price={e.price}
          />
        ))}
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  display: grid;
  grid-template-columns: 25% 75%;
  /* flex-wrap: wrap; */
  /* gap: 50px 60px; */
  overflow: scroll;
  height: 88vh;
  /* padding: 50px 92.5px; */
  background-color: ${theme.colors.white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-radius: 0px 0px 15px 15px;

  .basket {
    background: pink;
  }

  .menu {
    background: purple;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
  }
`;
