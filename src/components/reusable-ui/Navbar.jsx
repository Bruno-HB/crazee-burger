import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs"
import styled from "styled-components";
import Logo from './Logo'

export default function Navbar({username }) {
  return (
    <NavbarStyled>
        <Logo />
        <div className="user-box">
        <span>Hey, {username} <BsPersonCircle className="icon" /></span>
        <Link to='/'>Se déconnecter</Link>
        </div>
    </NavbarStyled>
  )
}

const NavbarStyled = styled.div`
    display: flex;
    max-width: 1400px;
    width: 100%;
    background: white;
    justify-content: space-between;
    .user-box {
        display: flex;
        flex-direction: column;
    }
`;
