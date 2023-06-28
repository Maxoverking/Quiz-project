import { IDataQuestion } from "../redux/quiz/types/quizTypes";

export const getQuestionArray = (question: IDataQuestion): string[] => {
    const { incorrect_answers, correct_answer } = question || {};
    const answersArray = [...incorrect_answers, correct_answer];

    const randomSort = () => Math.random() - 0.5;
    const randomizedAnswers = answersArray.sort(randomSort);

    return randomizedAnswers;
};