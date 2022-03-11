import styled from "styled-components"

const StyledButton = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: teal;
  color: white;
  border: 2px solid white;

`
const Button = ()=>{
    return <StyledButton >click me</StyledButton>;
   }
   
   export default Button;