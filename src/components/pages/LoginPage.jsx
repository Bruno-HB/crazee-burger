import { useState } from "react";

export default function LoginPage() {
    // state
    const [name, setName] = useState("")
    const [text, setText] = useState("")
  // comportements
    const handleSubmit = (e) => {
      e.preventDefault();
      setName(text)
      alert(`Bonjour ${text}`)
      setText("")
    }

    const handleChange = (e) => {
      setText(e.target.value)
    }
  // affichage 
  return (
    <>
      <h1>Bienvenue chez nous !</h1>
      <h2>Connectez-vous</h2>
      <form onSubmit={ handleSubmit }>
      <input type="text" placeholder="Entrez votre prénom..." required value={ text } onChange={ handleChange }></input>
      <button>Accédez à votre espace</button>
      </form>
    </>
  )
}
