
import styled from 'styled-components';


export default function PrimaryButton({label, Icon}) {
  return (
    <PrimaryButtonStyled>
      <span>{label}</span> 
      {Icon && Icon}
    </PrimaryButtonStyled>
  )
}

const PrimaryButtonStyled = styled.button`

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
`

