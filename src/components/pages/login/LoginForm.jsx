import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoChevronForward } from "react-icons/io5"
import { BsPersonCircle } from "react-icons/bs"
import Input from "../../reusable-ui/TextInput";


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
            <Input value={ username } onChange={ handleChange } type="text" placeholder="Entrez votre prénom" className="input__container" Icon={<BsPersonCircle className="icon" />}/>
            <button className="button__container">
                <span>Accéder à mon espace</span>
                <IoChevronForward className="icon"/>
            </button>    
        </LoginFormStyled>
    )
}


const LoginFormStyled = styled.form`
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

  .button__container {
    width: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    white-space: nowrap;
    text-decoration: none;
    line-height: 1;
    cursor: pointer;

    padding: 18px 24px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 800;
    color: white;
    background-color: #ff9f1b;
    border: 1px solid #ff9f1b;

    &:hover:not(:disabled) {
        background-color: white;
        color: #ff9f1b;
        border: 1px solid #ff9f1b;
        transition: all 200ms ease-out;
    }

    &:active {
        color: white;
        background-color: #ff9f1b;
        border: 1px solid #ff9f1b;
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        margin-left: 10px;
    }

  }
`;