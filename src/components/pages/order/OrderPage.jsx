import { useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import Navbar from "./Navbar";

export default function OrderPage() {
  //state
  const { username } = useParams();

  //affichage
  return (
    <OrderPageStyled>
      <Navbar username={username} />
      <div className="main"></div>
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

  .main {
    min-width: 1400px;
    height: 85vh;
    background-color: ${theme.colors.white};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    border-radius: 0px 0px 15px 15px;
  }
`;
