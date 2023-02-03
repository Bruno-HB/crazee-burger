import { useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";

export default function OrderPage() {
  //state
  const { username } = useParams();

  //affichage
  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar username={username} />
        <Main />
      </div>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.primary};
  height: 100vh;

  .container {
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
  }
`;
