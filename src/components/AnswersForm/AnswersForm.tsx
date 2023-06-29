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
import {
  decodeEntities,
  getQuestionArray,
} from "../../helpers/getQuestionArray";

const AnswersForm: FC = () => {
  const navigate = useNavigate();
  const { questions, questionCounter } = useQuizSelector();
  const [selectedAnswer, setSelectedAnswer] = useState(objectAnswer);

  const [myAnswer, setMyAnswer] = useState<string[]>([]);

  useEffect(() => {
    const questionArray = getQuestionArray(questions[questionCounter]);
    setMyAnswer(questionArray);
  }, [navigate, questions, questionCounter]);

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer({
      id: questionCounter,
      answer: event.target.value,
    });
  };

  const decodedString = decodeEntities(questions[questionCounter].question);

  return (
    <>
      <WRAPPER>
        <QUESTION_FORM>
          <h2>{`№ ${questionCounter + 1}`}</h2>
          <h2>{questions[questionCounter].category}</h2>
          <P>{decodedString}</P>
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
