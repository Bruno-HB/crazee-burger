import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { theme } from "../../../theme";

export default function UserConnected({ username }) {
  return (
    <UserConnectedStyled>
      <div className="user-disconnect">
        <span>
          Hey, <span className="username">{username}</span>{" "}
        </span>
        <Link to="/" className="link-to-disconnect">
          Se déconnecter
        </Link>
      </div>
      <BsPersonCircle className="icon" />
    </UserConnectedStyled>
  );
}

const UserConnectedStyled = styled.div`
  display: flex;
  color: ${theme.colors.greyBlue};
  align-items: center;

  .icon {
    height: ${theme.fonts.size.P4};
    width: ${theme.fonts.size.P4};
    padding-right: 70px;
  }

  .username {
    color: ${theme.colors.primary};
    font-weight: ${theme.fonts.weights.bold};
  }

  .user-disconnect {
    padding-right: ${theme.spacing.sm};
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .link-to-disconnect {
    text-decoration: none;
    color: ${theme.colors.greyBlue};
    font-size: ${theme.fonts.size.XXS};
  }
`;
