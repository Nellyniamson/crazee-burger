import { useState } from 'react'


export default function LoginPage() {

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
    <>
        <h1>Bienvenue chez nous</h1>
        <br />
        <h3>Connectez-vous</h3>

        <form action='submit' onSubmit={handleSubmit}>
        <input 
        type="text" 
        value={inputValue}
        placeholder='Entrez votre prenom'
        onChange={handleChange}
        />
        <button>Accedez a votre espace</button>
        </form>
    </>
  )
}
