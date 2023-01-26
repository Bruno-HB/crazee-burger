import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs"
import styled from "styled-components";
import Logo from './Logo'
import { theme } from "../../theme";

export default function Navbar({username }) {
  return (
    <NavbarStyled>
        <Logo className="logo"/>
        <div className="user-box">
            <div className="user-disconnect">
                <span>Hey, <span className="username">{username}</span> </span>
                <Link to='/' className="link-to-disconnect">Se déconnecter</Link>
            </div>
            <BsPersonCircle className="icon" />
        </div>
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
    .user-box {
        display: flex;
        color: #747B91;
        /* flex-direction: column; */
        align-items: center;
        .icon {
            height: 36px;
            width: 36px;
            /* color: #747B91; */
            padding-right: 70px;
        }
        .username {
            color: ${theme.colors.primary};
            font-weight: ${theme.fonts.weights.bold};
        }
        .user-disconnect {
            padding-right: 10px;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
        }
    }
    .logo {
        padding-left: 20px;
    }
    .link-to-disconnect {
        text-decoration: none;
        color: #747B91;
        font-size: ${theme.fonts.size.XXS};
    }
`;
