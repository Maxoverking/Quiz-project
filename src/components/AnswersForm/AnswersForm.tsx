import { ChangeEvent, FC, useEffect, useState } from "react";
import {
  NEXT_QUIZ,
  QUESTION_FORM,
  QUESTION_RADIO,
  P,
} from "./AnswersForm.styled";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Timer from "../Timer/Timer";
import { WRAPPER } from "../QuizForm/QuizForms/QuizForm.styled";
import { useQuizSelector } from "../../redux/quiz/quizSelector";
import { useNavigate } from "react-router-dom";
import { objectAnswer } from "./interface/IAnswer";
import { getQuestionArray } from "../../helpers/getQuestionArray";

const AnswersForm: FC = () => {
  const navigate = useNavigate();
  const { question, questionCounter } = useQuizSelector();
  const [selectedAnswer, setSelectedAnswer] = useState(objectAnswer);

  const [myAnswer, setMyAnswer] = useState<string[]>([]);

  useEffect(() => {
    const questionArray = getQuestionArray(question[questionCounter]);
    setMyAnswer(questionArray);
  }, [navigate, question, questionCounter]);

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer({
      id: questionCounter,
      answer: event.target.value,
    });
  };

  return (
    <>
      <WRAPPER>
        <QUESTION_FORM>
          <h2>{question[questionCounter].category}</h2>
          <P>{question[questionCounter].question}</P>
        </QUESTION_FORM>
        <QUESTION_RADIO>
          <FormControl>
            <RadioGroup
              value={selectedAnswer.answer}
              onChange={handleRadioChange}
            >
              {myAnswer.map((answer) => (
                <FormControlLabel
                  key={answer}
                  control={<Radio />}
                  label={answer}
                  value={answer}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </QUESTION_RADIO>
        <NEXT_QUIZ>
          <Timer
            selectedAnswer={selectedAnswer}
            setSelectedAnswer={setSelectedAnswer}
          />
        </NEXT_QUIZ>
      </WRAPPER>
    </>
  );
};

export default AnswersForm;
