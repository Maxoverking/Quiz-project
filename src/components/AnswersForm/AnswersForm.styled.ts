import styled from "styled-components";
import { DF_FD_AI } from "../QuizForm/QuizForms/QuizForm.styled";

export const QUESTION_FORM = styled.div`
font-family :"Abel" ;
margin:30px 0px;
${DF_FD_AI}

`;
export const QUESTION_RADIO = styled.div`
${DF_FD_AI}
`;
export const NEXT_QUIZ = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin:10px 0px;
`;

export const P = styled.p`
max-width: 60%;
font-size: 24px;
 @media (max-width: 1070px) {
    max-width: 40%; 
  }
 @media (max-width: 767px) {
    max-width: 84%; 
  }
`;
