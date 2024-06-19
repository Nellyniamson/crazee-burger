import styled from 'styled-components';
import LoginForm from './LoginForm'

export default function LoginPage() {
 return (
    <LoginPageStyled>
      <div>Logo</div>
      <LoginForm></LoginForm>
    </LoginPageStyled>
  )
}

const LoginPageStyled= styled.div`
  background:red;
`;