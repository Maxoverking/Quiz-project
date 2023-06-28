import { FC } from "react";
import AnswersForm from "../../AnswersForm/AnswersForm";
import { DIV } from "../HomePage/HomePage.styled";
import { useQuizSelector } from "../../../redux/quiz/quizSelector";
import Result from "../../Result/Result";

const AnswerPage: FC = () => {
  const { question, questionCounter } = useQuizSelector();

  return (
    <DIV>
      {question.length === questionCounter ? <Result /> : <AnswersForm />}
    </DIV>
  );
};

export default AnswerPage;
