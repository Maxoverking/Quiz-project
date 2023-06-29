import { FC, FormEvent, useRef, useState } from "react";
import { useAppDispatch } from "../../../hooks/dispatch";
import { fetchQuestions } from "../../../redux/quiz/quizOperation";
import { useNavigate } from "react-router-dom";
import {
  BUTTON,
  DIV_SELECT,
  DIV_SLIDER,
  DIV_LEVEL,
  DIV_FIELD,
  DIV_BUTTON,
  WRAPPER,
  DIV_TITLE,
} from "./QuizForm.styled";
import SelectComponent from "../Select/SelectComponent";
import SliderComponent from "../Slider/SliderComponent";
import LevelComponent from "../Level/LevelComponent";
import TypeQuizComponent from "../TypeQuiz/TypeQuizComponent";
import { quizForm } from "./interface/IUrlRequestQuery";
import { useInView } from "framer-motion";
import Title from "../Title/Title";

const QuizForm: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });
  const [amount, setAmount] = useState(quizForm.amount);

  console.log("🚀  amount:", amount);
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

  return (
    <WRAPPER
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(-150px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <DIV_TITLE>
        <Title />
      </DIV_TITLE>

      <form onSubmit={startQuiz}>
        <DIV_FIELD>
          <DIV_SELECT isInView={isInView}>
            <SelectComponent category={category} setCategory={setCategory} />
          </DIV_SELECT>
          <DIV_SLIDER isInView={isInView}>
            <SliderComponent amount={amount} setAmount={setAmount} />
          </DIV_SLIDER>
          <DIV_LEVEL isInView={isInView}>
            <LevelComponent
              difficulty={difficulty}
              setDifficulty={setDifficulty}
            />
          </DIV_LEVEL>
          <DIV_LEVEL isInView={isInView}>
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
