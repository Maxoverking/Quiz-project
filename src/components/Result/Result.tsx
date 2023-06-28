import { FC } from "react";
import { WRAPPER } from "../QuizForm/QuizForms/QuizForm.styled";
import { useQuizSelector } from "../../redux/quiz/quizSelector";
import { DIV_RESULT, H2, BUTTON } from "./Result.styled";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/dispatch";
import { quizQuestionCounterZeroAction } from "../../redux/quiz/quizSlice";

const Result: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { questionCounter, correctAnswer } = useQuizSelector();

  const percentage: number = (correctAnswer / questionCounter) * 100;

  const handleGoBack = () => {
    dispatch(quizQuestionCounterZeroAction());
    navigate("/");
  };

  return (
    <WRAPPER>
      <DIV_RESULT>
        <H2>Result : {`${percentage} %`}</H2>
        <h4>Question quantity : {questionCounter} </h4>
        <h4>Correct answer : {correctAnswer} </h4>
        <BUTTON type="button" onClick={handleGoBack}>
          Back to Quiz
        </BUTTON>
      </DIV_RESULT>
    </WRAPPER>
  );
};

export default Result;
