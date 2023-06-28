export interface IUrlRequestQuery {
    amount: number;
    category: string;
    difficulty: string;
    type: string;
}

export const quizForm: IUrlRequestQuery = {
    amount: 10,
    category: "",
    difficulty: "easy",
    type: "multiple",
};