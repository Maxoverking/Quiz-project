import styled from "styled-components";
import { DF_FD_AI } from "../QuizForm/QuizForms/QuizForm.styled";


export const DIV_RESULT = styled.div`
    ${DF_FD_AI}
    font-family: "Atma";
    row-gap: 20px;
`;
export const H2 = styled.h2`
margin-top:20px;

`;
export const BUTTON = styled.button`
  font-family :"Atma" ;
  padding: 10px 24px;
  border-radius: 10px;
  font-size:20px;
  letter-spacing:2px;
  background-color: var(--pink);
  transition:transform 250ms ease-in-out, background-color 250ms ease-in-out,color 250ms ease-in-out ;
  &:hover{
    background-color: var(--pink-hover);
    transform: scale(1.2) rotateZ(-10deg);
    color:var(--white);
  }

`;