import { FC, lazy } from "react";
import "./App.styled";
import { Route, Routes } from "react-router-dom";
import { QUIZ_STATUS } from "../constants/constants";
const Home = lazy(() => import("./pages/HomePage/HomePage"));
const LoaderTimer = lazy(() => import("./LoaderTimer/LoaderTimer"));
const AnswerPage = lazy(() => import("./pages/AnswerPage/AnswerPage"));

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={QUIZ_STATUS.start} element={<LoaderTimer />} />
        <Route path={`/${QUIZ_STATUS.progress}`} element={<AnswerPage />} />
      </Routes>
    </>
  );
};

export default App;
