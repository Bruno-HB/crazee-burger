import styled from "styled-components";
import Logo from "../../../reusable-ui/Logo";
import UserConnected from "./UserConnected";
import { refreshPage } from "../../../../utils/window";
import { theme } from "../../../../theme";

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
  max-width: 1400px;
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.extraRound}
    ${theme.borderRadius.extraRound} 0px 0px;
  justify-content: space-between;
  padding: 0 ${theme.spacing.md};
  border-bottom: 1px solid ${theme.colors.greyLight};

  .logo-navbar {
    cursor: pointer;
  }
`;
