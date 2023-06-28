import { useAppSelector } from "../../hooks/dispatch";
import { RootState } from "../store";

const questionSelector = (state: RootState) => state.quiz.questions;
const correctAnswerSelector = (state: RootState) => state.quiz.correctAnswer;
const questionCounterSelector = (state: RootState) => state.quiz.questionCounter;
const quizStartSelector = (state: RootState) => state.quiz.quizStart;
const isLoadingSelector = (state: RootState) => state.quiz.isLoading;

export const useQuizSelector = () => {
    return {
        questions: useAppSelector(questionSelector),
        correctAnswer: useAppSelector(correctAnswerSelector),
        questionCounter: useAppSelector(questionCounterSelector),
        quizStart: useAppSelector(quizStartSelector),
        isLoading: useAppSelector((isLoadingSelector)),
    }
}
