import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import Logo from "../../Logo";
import { BsPersonCircle } from "react-icons/bs";


export default function LoginForm() {
    // state
    const [username, setUsername] = useState("")
    const navigate = useNavigate()

    // comportements
        const handleSubmit = (e) => {
            e.preventDefault();
            navigate(`/order/${username}`, {state: {username}})
            setUsername("")
        }

        const handleChange = (e) => {
            setUsername(e.target.value)
        }

    // affichage
    return (
        <>
        <LoginFormStyled onSubmit={ handleSubmit }>
            <Logo />
            <h1>Bienvenue chez nous !</h1>
            <br/>
            <div className="line"></div>
            <h2>Connectez-vous</h2>
            <div className="input">
                <BsPersonCircle className="icon"/>
                <input type="text" placeholder="Entrez votre prénom" required value={ username } onChange={ handleChange }></input>
            </div>
            <div className="buttonStyle">
                <button>Accéder à votre espace {">"}</button>
            </div>
        </LoginFormStyled>
        </>
    )
}

const LoginFormStyled = styled.form`
font-family: 'Amatic SC';
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: ${theme.colors.white};
text-transform: uppercase;
h1{
    margin-top: 0;
    font-size: ${theme.fonts.P5};
  }
  .line{
    width: 35%;
    border: 2px solid ${theme.colors.primary};
}
h2{
    font-size: ${theme.fonts.P4};
}

.input, .buttonStyle {
    font-family: 'Open Sans', sans-serif;
    height: ${theme.spacing.xl};
    border-radius: ${theme.borderRadius.round};
    background-color: ${theme.colors.background_white};
    margin-bottom: ${theme.spacing.sm};
    font-size: ${theme.fonts.P3};
}

.input{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35%;
}
.icon {
    color: ${theme.colors.greyDark};
    margin-right: ${theme.spacing.sm};
}
input { 
    border: none;
    background-color: ${theme.colors.background_white};
    border-radius: ${theme.borderRadius.round};
    height: 35%;
    width: 70%;
}

input:focus {
    outline: none;
    border: 2px solid ${theme.colors.blue};
}

.buttonStyle {
    border: 1px solid ${theme.colors.primary};
    width: 35%;
    display: flex;
    justify-content: center;
    align-items: center;
}
button {
    border-radius: ${theme.borderRadius.round};
    cursor: pointer;
    border: none;
    height: 100%;
    width: 100%;
    font-size: ${theme.fonts.P1};
    font-weight: ${theme.weights.bold};
    color: ${theme.colors.background_white};
    background-color: ${theme.colors.primary_burger};
}

button:hover, button:active {
    color: ${theme.colors.primary_burger};
    background-color: ${theme.colors.background_white};
}
`;