import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ErrorPage() {
    //state
    const navigate = useNavigate()
    //comportements
    const handleClick = () => { 
        navigate('/')
     }

    //affichage
  return (
    <>
        <h1>ErrorPage</h1>
        <button onClick={ handleClick }>Retourner à la page d'accueil</button>
    </>
  )
}
