import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


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
            <br/>
            <h2>Connectez-vous</h2>
            <input type="text" 
            placeholder="Entrez votre prénom..." 
            value={ username } 
            onChange={ handleChange }
            required />
            <button>Accédez à votre espace</button>
        </LoginFormStyled>
    )
}


const LoginFormStyled = styled.form`
  background: green;
`;