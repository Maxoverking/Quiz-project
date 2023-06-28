import { IDataQuestion } from "../redux/quiz/types/quizTypes";

export const getQuestionArray = (questions: IDataQuestion): string[] => {
    const { incorrect_answers, correct_answer } = questions || {};
    const answersArray = [...incorrect_answers, correct_answer];

    const randomSort = () => Math.random() - 0.5;
    const randomizedAnswers = answersArray.sort(randomSort);

    return randomizedAnswers;
};

export const decodeEntities = (str: string): string => {
    const decodedString = str.replace(/&rsquo;|&#039;|&quot;/g, (match) => {
        switch (match) {
            case "&rsquo;":
            case "&#039;":
                return "'";
            case "&quot;":
                return '"';
            default:
                return match;
        }
    });
    return decodedString;

}