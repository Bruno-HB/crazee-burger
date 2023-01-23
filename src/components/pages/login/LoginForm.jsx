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
            <hr/>
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
    margin-top: 39.7px 0 32.16px 0;
    font-size: ${theme.fonts.P5};
  }
hr{
    margin: 0 0 40px 0;
    width: 400px;
    border: 2px solid ${theme.colors.line_separator};
}
h2{
    font-size: ${theme.fonts.P4};
    margin: 0  0 18px 0;
}

.input, .buttonStyle {
    width: 400px;
    font-family: 'Open Sans', sans-serif;
    height: 55px;
    border-radius: ${theme.borderRadius.round};
    background-color: ${theme.colors.background_white};
    font-size: ${theme.fonts.P3};
}

.input{
    position: relative;
    margin-bottom: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.icon {
    position: absolute;
    left: 24px;
    top: 18px;
    bottom: 43.75%;
    width: ${theme.fonts.P0};
    color: ${theme.colors.greyDark};
    margin-right: ${theme.spacing.sm};
}
input { 
    position: absolute;
    left: 53.8px;
    top: 18px;
    bottom: 43.75%;
    border: none;
    background-color: ${theme.colors.background_white};
    border-radius: ${theme.borderRadius.round};
    height: 35%;
    width: 320.2px;
}

input:focus {
    outline: none;
    border: 1px solid ${theme.colors.blue};
}

.buttonStyle {
    border: 1px solid ${theme.colors.primary};
    width: 400px;
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