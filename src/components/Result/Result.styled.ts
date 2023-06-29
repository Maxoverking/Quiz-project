import styled, { css, keyframes } from "styled-components";
import { DF_FD_AI } from "../QuizForm/QuizForms/QuizForm.styled";

interface IPercentage {
  percentage: number
}

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const DIV_RESULT = styled.div`
    ${DF_FD_AI}
    font-family: "Atma";
    row-gap: 20px;
`;
export const H2 = styled.h2`
font-size:36px;
margin-top:20px;
color: var(--time-finish);

@media (max-width: 400px) {
   font-size:26px;
  }
`;
export const H2R = styled.h2<IPercentage>`
margin-top:20px;
color: ${({ percentage }) =>
    percentage < 40 ? css`var(--time-finish)` : '#279725'};

`;

export const H4 = styled.h4`
width: 350px;
height: 310px;
border-radius:10px;
background-image: url("./astronaut.gif");
background-size: cover;
background-repeat: no - repeat;
animation: ${rotateAnimation} 20s linear infinite;
  @media (max-width: 500px) {
    width: 250px;
    height: 210px;
  }
`;

export const BUTTON = styled.button`
font-family : "Atma";
padding: 10px 24px;
border-radius: 10px;
font-size: 20px;
letter-spacing: 2px;
background-color: var(--pink);
transition:transform 250ms ease-in-out, background-color 250ms ease-in-out, color 250ms ease-in-out;
  &:hover{
  background-color: var(--pink-hover);
  transform: scale(1.2) rotateZ(-10deg);
  color: var(--white);
}
`;