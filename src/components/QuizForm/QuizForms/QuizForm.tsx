import { FC, FormEvent, useRef, useState } from "react";
import { useAppDispatch } from "../../../hooks/dispatch";
import { fetchQuestions } from "../../../redux/quiz/quizOperation";
import { useNavigate } from "react-router-dom";
import {
  BUTTON,
  DIV_SELECT,
  DIV_SLIDER,
  DIV_LEVEL,
  H1,
  DIV_FIELD,
  DIV_BUTTON,
  WRAPPER,
} from "./QuizForm.styled";
import SelectComponent from "../Select/SelectComponent";
import SliderComponent from "../Slider/SliderComponent";
import LevelComponent from "../Level/LevelComponent";
import TypeQuizComponent from "../TypeQuiz/TypeQuizComponent";
import { quizForm } from "./interface/IUrlRequestQuery";
import { useInView } from "framer-motion";

const QuizForm: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [amount, setAmount] = useState(quizForm.amount);
  const [category, setCategory] = useState(quizForm.category);
  const [difficulty, setDifficulty] = useState(quizForm.difficulty);
  const [type, setType] = useState(quizForm.type);

  const startQuiz = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(
      fetchQuestions({
        amount,
        category,
        difficulty,
        type,
      })
    );
    navigate("start");
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  console.log("🚀  isInView:", isInView);
  const commonStyles = {
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
  };
  return (
    <WRAPPER
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(-150px)",
        ...commonStyles,
      }}
    >
      <H1
        style={{
          transform: isInView ? "none" : "translateX(-250px)",
          ...commonStyles,
        }}
      >
        Quiz
      </H1>
      <form onSubmit={startQuiz}>
        <DIV_FIELD>
          <DIV_SELECT
            style={{
              transform: isInView ? "none" : "translateY(-250px)",
              ...commonStyles,
            }}
          >
            <SelectComponent category={category} setCategory={setCategory} />
          </DIV_SELECT>
          <DIV_SLIDER
            style={{
              transform: isInView ? "none" : "translate(-450px ,250px)",
              ...commonStyles,
            }}
          >
            <SliderComponent amount={amount} setAmount={setAmount} />
          </DIV_SLIDER>
          <DIV_LEVEL
            style={{
              transform: isInView ? "none" : "translateY(550px)",
              ...commonStyles,
            }}
          >
            <LevelComponent
              difficulty={difficulty}
              setDifficulty={setDifficulty}
            />
          </DIV_LEVEL>
          <DIV_LEVEL
            style={{
              transform: isInView ? "none" : "translateX(250px)",
              ...commonStyles,
            }}
          >
            <TypeQuizComponent type={type} setType={setType} />
          </DIV_LEVEL>
        </DIV_FIELD>
        <DIV_BUTTON>
          {category === "" ? "" : <BUTTON type="submit">START QUIZ</BUTTON>}
        </DIV_BUTTON>
      </form>
    </WRAPPER>
  );
};

export default QuizForm;
