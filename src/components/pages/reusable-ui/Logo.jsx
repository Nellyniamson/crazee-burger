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
    /* background-color : blue; */
    display: flex;
    align-items: center;

    h1{
        display: inline;
        text-align: center;
        color: #ffa01b;
        font-size: 36px;
        line-height: 1em;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        font-family: "Amatic SC" , cursive;
    }

    img{
        object-fit: contain;
        object-position: center;
        height: 60px;
        width: 80px;
        margin: 0 5px ;
    }
`