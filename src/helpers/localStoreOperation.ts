import { IUrlRequestQuery } from "../components/QuizForm/QuizForms/interface/IUrlRequestQuery";

export const quizLocalStore = (write: IUrlRequestQuery, quizStart: string) => {
    const requestData = { req: write, quizStart }
    localStorage.setItem("Quiz", JSON.stringify(requestData));
}

export const getQuizLocalStore = () => {
    const data = localStorage.getItem("Quiz");
    if (data) {
        const parsedData = JSON.parse(data);
        return parsedData;
    }
    return null;
};

export const clearQuizLocalStore = () => {
    localStorage.removeItem("Quiz");
};