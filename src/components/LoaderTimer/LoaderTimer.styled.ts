import styled, { keyframes } from "styled-components";

const increaseSizeAnimation = keyframes`
  from {
    font-size: 56px;
  }
  to {
    font-size: 82px;
  }
`;

export const DIV = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
background-color:var(--delft-blue);
height: 100vh;
`;

export const H2 = styled.h2`
font-family :"Atma" ;
color:var(--saffron);
text-shadow: var(--form-shadow);
animation: ${increaseSizeAnimation} 1s linear infinite alternate;
`;

