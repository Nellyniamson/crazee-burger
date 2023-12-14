import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function LoginForm() {

  // Etats
  const [inputValue, setInputValue] = useState('')


  // comportements
  const handleSubmit = (event) =>{
    event.preventDefault();
    alert(`Bonjour ${inputValue}`)
    setInputValue("")
  }

  const handleChange = (event) =>{
    setInputValue(event.target.value)
  }


  // Render

  return (

    <form action='submit' onSubmit={handleSubmit}>
        <h1>Bienvenue chez nous</h1>
        <br />
        <h3>Connectez-vous</h3>
        
        <input 
        type="text" 
        value={inputValue}
        placeholder='Entrez votre prenom'
        onChange={handleChange}
        required
        />
        <button>Accedez a votre espace</button> 
        
        <Link to="/order "> Page order</Link>
    </form>
  )
}
