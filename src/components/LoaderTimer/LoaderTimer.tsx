import { FC, useEffect, useState } from "react";
import { DIV, H2 } from "./LoaderTimer.styled";
import { useAppDispatch } from "../../hooks/dispatch";
import { QUIZ_STATUS } from "../../constants/constants";
import { useNavigate } from "react-router-dom";

const LoaderTimer: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [count, setCount] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 700);

    if (count < 0) {
      clearInterval(timer);
      navigate(`/${QUIZ_STATUS.progress}`);
    }

    return () => {
      clearInterval(timer); // Очистка таймера при размонтировании компонента
    };
  }, [count, dispatch, navigate]);

  return (
    <DIV>
      <H2>{count === 0 ? "START" : count}</H2>
    </DIV>
  );
};

export default LoaderTimer;
