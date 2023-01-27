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
  display: flex;
  min-width: 1400px;
  background: ${theme.colors.white};
  border-radius: 15px 15px 0px 0px;
  justify-content: space-between;
  padding: 0 ${theme.spacing.md};

  .logo-navbar {
    cursor: pointer;
  }
`;
