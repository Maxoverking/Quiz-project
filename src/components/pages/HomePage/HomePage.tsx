import { FC } from "react";

import { DIV } from "./HomePage.styled";
import QuizForm from "../../QuizForm/QuizForms/QuizForm";

const Home: FC = () => {
  return (
    <DIV>
      <QuizForm />
    </DIV>
  );
};

export default Home;
