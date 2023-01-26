import styled from "styled-components";
import Logo from "../../reusable-ui/Logo";
import { theme } from "../../../theme";
import UserConnected from "./UserConnected";

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <Logo className="logo" />
      <UserConnected username={username} />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.div`
  font-family: "Open Sans", sans-serif;
  display: flex;
  max-width: 1400px;
  width: 100%;
  background: ${theme.colors.white};
  border-radius: 15px 15px 0px 0px;
  justify-content: space-between;
  .logo {
    padding-left: ${theme.spacing.md};
  }
`;
