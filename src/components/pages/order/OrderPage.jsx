import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function OrderPage() {
    //state
    const {username} = useParams();
    const navigate = useNavigate();
    //comportements
    const handleClick = () => { 
        navigate('/')
     }

    //affichage
  return (
    <>
        <h1>Bonjour {username}</h1>
        <button onClick={handleClick}>Déconnexion</button>
    </>
  )
}
