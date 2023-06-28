export interface IDataQuestion {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export interface QuestionState {
    questions: IDataQuestion[] | [];
    correctAnswer: number;
    questionCounter: number;
    quizStart: string;
    isLoading: string;
}