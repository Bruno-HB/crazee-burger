import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoChevronForward } from "react-icons/io5"
import { BsPersonCircle } from "react-icons/bs"
import TextInput from "../../reusable-ui/TextInput";
import Button from "../../reusable-ui/Button";
import { theme } from "../../../theme";


export default function LoginForm() {
    // state
    const [username, setUsername] = useState("")
    const navigate = useNavigate()

    // comportements
        const handleSubmit = (e) => {
            e.preventDefault();
            setUsername("")
            navigate(`/order/${username}`)
        }

        const handleChange = (e) => {
            setUsername(e.target.value)
        }

    // affichage
    return (
        <LoginFormStyled onSubmit={ handleSubmit }>
            <h1>Bienvenue chez nous !</h1>
            <hr/>
            <h2>Connectez-vous</h2>
            <TextInput value={ username } onChange={ handleChange } type="text" placeholder="Entrez votre prénom" Icon={<BsPersonCircle className="icon" />} required/>
            <Button label="Accéder à mon espace" Icon={<IoChevronForward className="icon" />} />
        </LoginFormStyled> 
    )
}


const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0 auto;
  padding: 40px ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.round};
  font-family: "Amatic SC", cursive;

  hr {
    border: 1.5px solid ${theme.colors.line_separator};
    margin-bottom: ${theme.gridUnit *5}px;
  }

  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P5};
  }

  h2 {
    color: ${theme.colors.white};
    margin: 20px 10px 10px;
    font-size: ${theme.fonts.size.P4};
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.P0};
    margin-left: 10px;
  }
`;