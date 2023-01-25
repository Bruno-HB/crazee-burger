import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs"


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
            <div className="input__container">
                <BsPersonCircle className="icon" />
                <input type="text"
                placeholder="Entrez votre prénom"
                value={ username }
                onChange={ handleChange }
                required />
            </div>
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

  .input__container {
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;
    .icon {
        font-size: 15px;
        margin-right: 8px;
        color: #93a2b1;
    }
    input {
        border: none;
        font-size: 15px;
        color: #17161a;
    }

    &::placeholder {
        background: white;
        color: lightgrey;
    }
  }

`;