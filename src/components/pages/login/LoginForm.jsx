import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoChevronForwardOutline } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import TextInput from '../reusable-ui/TextInput'; 
import PrimaryButton from '../reusable-ui/PrimaryButton';
import { theme } from '../../../themes';


export default function LoginForm() {

  // Etats
  const [inputValue, setInputValue] = useState('')
  const navigate = useNavigate()


  // comportements
  const handleSubmit = (event) =>{
    event.preventDefault();
    setInputValue("")
    navigate(`order/${inputValue}`)
  }

  const handleChange = (event) =>{
    setInputValue(event.target.value)
  }


  // Render

  return (

    <LoginFormStyled action='submit' onSubmit={handleSubmit}>
        <div>
          <h1>Bienvenue chez nous</h1>
          <hr />
          <h2>Connectez-vous</h2>
        </div>
        
        <div>
          <TextInput value={inputValue} onChange={handleChange} placeholder={"Entrez votre prenom"} required Icon={<BsPersonCircle className='icon' />} className={'input-with-container'}/>
          <PrimaryButton label={"Accedez a votre espace"} Icon={<IoChevronForwardOutline className='icon'/>}/>
        </div>
        
        {/* <Link to="/order "> Page order</Link> */}
    </LoginFormStyled>
  )
}


const LoginFormStyled = styled.form `
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding:40px ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.round};
  font-family: "Amatic SC" , cursive;


  hr{
    border: 1.5px solid ${theme.colors.loginLine};
    margin-bottom:40px;
  }

  h1{
    color: white;
    font-size: ${theme.fonts.P5};
    margin-bottom:40px;
  }

  h2{
    /* color: #8e8b8b; */
    margin: 20px 10px 10px;
    color: white;
    font-size: 36px;
  }
`