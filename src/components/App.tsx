import { FC, lazy, useEffect } from "react";
import "./App.styled";
import { Route, Routes } from "react-router-dom";
import { QUIZ_STATUS } from "../constants/constants";
import { fetchQuestions } from "../redux/quiz/quizOperation";
import { useAppDispatch } from "../hooks/dispatch";
import { getQuizLocalStore } from "../helpers/localStoreOperation";
const Home = lazy(() => import("./pages/HomePage/HomePage"));
const LoaderTimer = lazy(() => import("./LoaderTimer/LoaderTimer"));
const AnswerPage = lazy(() => import("./pages/AnswerPage/AnswerPage"));

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const storeData = getQuizLocalStore();
    if (storeData?.quizStart === QUIZ_STATUS.progress) {
      dispatch(fetchQuestions(storeData.req));
    }
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="start" element={<LoaderTimer />} />
        <Route path={`/${QUIZ_STATUS.progress}`} element={<AnswerPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
