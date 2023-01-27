import styled from "styled-components";
import Logo from "../../reusable-ui/Logo";
import { theme } from "../../../theme";
import UserConnected from "./UserConnected";
import { refreshPage } from "../../../utils/window";

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <Logo className="logo-navbar" onClick={refreshPage} />
      <UserConnected username={username} />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  font-family: "Open Sans", sans-serif;
  display: flex;
  max-width: 1400px;
  width: 100%;
  background: ${theme.colors.white};
  border-radius: 15px 15px 0px 0px;
  justify-content: space-between;

  .logo-navbar {
    cursor: pointer;
    margin-left: ${theme.spacing.md};
  }
`;
