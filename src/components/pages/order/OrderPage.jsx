import { useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./Main";
import Navbar from "./Navbar";

export default function OrderPage() {
  //state
  const { username } = useParams();

  //affichage
  return (
    <OrderPageStyled>
      <Navbar username={username} />
      <Main />
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${theme.colors.primary};
  height: 100vh;
`;
