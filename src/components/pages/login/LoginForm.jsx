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
            <hr/>
            <h2>Connectez-vous</h2>
            <input type="text" 
            placeholder="Entrez votre prénom" 
            value={ username } 
            onChange={ handleChange }
            required />
            <button>Accéder à mon espace</button>
        </LoginFormStyled>
    )
}


const LoginFormStyled = styled.form`
  background: green;
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  border-radius: 5px;
  font-family: "Amatic SC", cursive;

  hr {
    border: 1.5px solid #f56a2c;
    margin-bottom: 40px;
  }

  h1 {
    color: white;
    font-size: 48px;
  }

  h2 {
    color: white;
    margin: 20px 10px 10px;
    font-size: 36px;
  }
`;