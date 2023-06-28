import { FC } from "react";
import AnswersForm from "../../AnswersForm/AnswersForm";
import { DIV } from "../HomePage/HomePage.styled";
import { useQuizSelector } from "../../../redux/quiz/quizSelector";
import Result from "../../Result/Result";

const AnswerPage: FC = () => {
  const { questions, questionCounter } = useQuizSelector();

  return (
    <DIV>
      {questions.length === questionCounter ? <Result /> : <AnswersForm />}
    </DIV>
  );
};

export default AnswerPage;
