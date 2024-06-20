import styled from 'styled-components';
import LoginForm from './LoginForm'
import Logo from '../reusable-ui/Logo';

export default function LoginPage() {
 return (
    <LoginPageStyled>
      <div><Logo/></div>
      <LoginForm/>
    </LoginPageStyled>
  )
}

const LoginPageStyled= styled.div`
  /* background: red; */
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-size: cover;
  background-position:center;
  background-repeat:no-repeat;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("/images/burger-background.jpg")
`;