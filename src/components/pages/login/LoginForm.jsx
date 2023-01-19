import { useState } from "react";

export default function LoginForm() {
    // state
    const [username, setUsername] = useState("")

    // comportements
        const handleSubmit = (e) => {
            e.preventDefault();
            alert(`Bonjour ${username}`)
            setUsername("")
        }

        const handleChange = (e) => {
            setUsername(e.target.value)
        }

    // affichage
    return (
        <form onSubmit={ handleSubmit }>
            <h1>Bienvenue chez nous !</h1>
            <br/>
            <h2>Connectez-vous</h2>
            <input type="text" placeholder="Entrez votre prénom..." required value={ username } onChange={ handleChange }></input>
            <button>Accédez à votre espace</button>
        </form>
    )
}
