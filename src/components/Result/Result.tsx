import { FC, useRef } from "react";
import { useInView } from "framer-motion";
import { WRAPPER } from "../QuizForm/QuizForms/QuizForm.styled";
import { useQuizSelector } from "../../redux/quiz/quizSelector";
import { DIV_RESULT, H2, BUTTON, H4 } from "./Result.styled";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/dispatch";
import { quizQuestionCounterZeroAction } from "../../redux/quiz/quizSlice";
import { STATUS } from "../../constants/constants";
import { clearQuizLocalStore } from "../../helpers/localStoreOperation";

const Result: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { questionCounter, correctAnswer, isLoading } = useQuizSelector();

  const percentage: number = Math.floor(
    (correctAnswer / questionCounter) * 100
  );
  if (percentage > 30) {
    console.log("object");
  }
  const handleGoBack = () => {
    dispatch(quizQuestionCounterZeroAction());
    clearQuizLocalStore();
    navigate("/");
  };

  return (
    <WRAPPER
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(150px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <DIV_RESULT>
        {STATUS.error === isLoading ? (
          <>
            <H2>{STATUS.error}</H2>
            <H4></H4>
          </>
        ) : (
          <>
            <H2>Result : {`${percentage} %`}</H2>
            <h4>Question quantity : {questionCounter} </h4>
            <h4>Correct answer : {correctAnswer} </h4>
          </>
        )}
        <BUTTON type="button" onClick={handleGoBack}>
          Back to Quiz
        </BUTTON>
      </DIV_RESULT>
    </WRAPPER>
  );
};

export default Result;
