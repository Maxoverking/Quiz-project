import { FC, useEffect, useState } from "react";
import { BUTTON, FINISH, TIMER_WRAP } from "./Timer.styled";
import { useAppDispatch } from "../../hooks/dispatch";
import {
  quizCorrectAnswerAction,
  quizQuestionCounterAction,
} from "../../redux/quiz/quizSlice";
import { ITimerProps } from "./interface/ITimerProps";

const Timer: FC<ITimerProps> = ({
  selectedAnswer,
  setSelectedAnswer,
  setCorrect,
}) => {
  const dispatch = useAppDispatch();
  const [time, setTime] = useState(60);
  const [stop, setStop] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!stop && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [dispatch, stop, time]);

  const formattedTime = `${Math.floor(time / 60)
    .toString()
    .padStart(2, "0")}:${(time % 60).toString().padStart(2, "0")}`;

  const stopTimer = () => {
    setCorrect(true);

    if (time === 0) {
      setTimeout(() => {
        dispatch(quizQuestionCounterAction());
        setTime(60);
        setStop(false);
        setSelectedAnswer({ id: 0, answer: "" });
        setCorrect(false);
        console.log("object");
      }, 1000);
    } else {
      setTimeout(() => {
        setStop(true);
        setTime(60);
        dispatch(quizCorrectAnswerAction(selectedAnswer));
        dispatch(quizQuestionCounterAction());
        setStop(false);
        setSelectedAnswer({ id: 0, answer: "" });
        setCorrect(false);
        console.log("object2");
      }, 1000);
    }
  };

  return (
    <>
      <TIMER_WRAP>
        <h3>{formattedTime}</h3>
        <BUTTON type="button" onClick={stopTimer}>
          NEXT
        </BUTTON>
      </TIMER_WRAP>
      <FINISH>{time === 0 ? <h4>Time is finish</h4> : ""}</FINISH>
    </>
  );
};

export default Timer;
