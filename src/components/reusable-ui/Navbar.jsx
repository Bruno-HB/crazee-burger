import styled from "styled-components";
import Logo from './Logo'
import { theme } from "../../theme";
import { BsPersonCircle } from "react-icons/bs"
import UserConnected from "./UserConnected";

export default function Navbar({username }) {

  return (
    <NavbarStyled>
        <Logo className="logo" />
        <UserConnected username={username} Icon={<BsPersonCircle className="icon" />}/>
    </NavbarStyled>
  )
}

const NavbarStyled = styled.div`
    font-family: "Open Sans", sans-serif;
    display: flex;
    max-width: 1400px;
    width: 100%;
    background: white;
    border-radius: 15px 15px 0px 0px;
    justify-content: space-between;
    .logo {
        padding-left: ${theme.spacing.md};
    }
`;
