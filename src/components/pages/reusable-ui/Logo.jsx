import styled from "styled-components";

export default function Logo() {
  return (
    <LogoStyled>
        <h1>Crazee</h1>
        <img src="../images/logo-orange.png" alt="img-logo" />
        <h1>Burger</h1>
    </LogoStyled>
  )
}

const LogoStyled = styled.div`
  background-color : blue;
`;