import { FC, lazy } from "react";
import "./App.styled";
import { Route, Routes } from "react-router-dom";
import { useQuizSelector } from "../redux/quiz/quizSelector";
const Home = lazy(() => import("./pages/HomePage/HomePage"));
const LoaderTimer = lazy(() => import("./LoaderTimer/LoaderTimer"));
const AnswerPage = lazy(() => import("./pages/AnswerPage/AnswerPage"));

const App: FC = () => {
  const { quizStart } = useQuizSelector();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="start" element={<LoaderTimer />} />
        <Route path={`/${quizStart}`} element={<AnswerPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
