import styled, { keyframes } from "styled-components";

const increaseSizeAnimation = keyframes`
  from {
    font-size: 56px;
  }
  to {
    font-size: 82px;
  }
`;

interface IH2 {
  count: number
}

export const DIV = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
background-color:var(--delft-blue);
height: 100vh;
`;

export const H2 = styled.h2<IH2>`
font-family :"Atma" ;
color: ${({ count }) => count === 0 ? "#ff0101" : "#fabf47"};
text-shadow: var(--form-shadow);
animation: ${increaseSizeAnimation} 1s linear infinite alternate;
`;

