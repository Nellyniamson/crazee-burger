import { useState } from 'react'


export default function LoginPage() {

    // Etats
  const [prenom, setPrenom] = useState('')


    // comportements
  const handleSubmit = (event) =>{
    event.preventDefault();
  };

  const handleChange = (event) =>{
    setPrenom(event.target.value)
    console.log(handleChange)
  };

  const handleClick = (event) =>{
    
  }

    // Render
  return (
    <>
    <h1>Bienvenue chez nous</h1>
    <h3>Connectez-vous</h3>

    <form action='submit' onSubmit={handleSubmit}>
      <input 
      type="text" 
      value={prenom}
      placeholder='Entrez votre prenom'
      onChange={handleChange}
      />
      <button onClick={handleClick}>Accedez a votre espace</button>
    </form>
  </>
  )
}
