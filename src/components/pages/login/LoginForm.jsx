import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoChevronForwardOutline } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import TextInput from '../reusable-ui/TextInput'; 


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
          
          <button className="button-with-icon">
              <span>Accedez a votre espace</span> 
              <IoChevronForwardOutline className='icon'/>
          </button>
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
  padding: 2.5rem 2rem;
  border-radius:5px;
  font-family: "Amatic SC" , cursive;


  hr{
    border: 1.5px solid #f56a2c;
    margin-bottom:40px;
  }

  h1{
    color: white;
    font-size: 48px;
    margin-bottom:40px;
  }

  h2{
    color: #8e8b8b;
    margin: 20px 10px 10px;
    color: white;
    font-size: 36px;
  }



  .button-with-icon{

    width: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    white-space: nowrap;
    text-decoration: none;
    line-height: 1;

    background-color:#ff9f1b;
    border-radius: 5px;
    border: 1px solid #ff9f1b;
    font-size: 15px;
    color: white;
    font-weight: 800;
    padding: 18px 24px;

    &:hover:not(:disabled){
      background-color: white;
      color: #ff9f1b;
      border: 1px solid #ff9f1b;
      transition: all 200ms ease-out;
    }

    &:active{
      color: white;
      background-color: #ff9f1b;
      border: 1px solid #ff9f1b;
    }

    &:disabled{
      opacity: 0.6;
      cursor: not-allowed;
    }

    .icon{
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 15px;
      margin-left: 10px;
    }
  }
`