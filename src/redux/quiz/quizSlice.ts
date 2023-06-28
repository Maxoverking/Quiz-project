import { createSlice } from "@reduxjs/toolkit";
import { QuestionState } from "./types/quizTypes";
import { fetchQuestions } from "./quizOperation";
import { STATUS, QUIZ_STATUS } from "../../constants/constants";
import { IUrlRequestQuery } from "../../components/QuizForm/QuizForms/interface/IUrlRequestQuery";

export const localStore = (write: IUrlRequestQuery) => {
    localStorage.setItem("Quiz", JSON.stringify(write));
}

export const initQuestionState: QuestionState = {
    questions: [],
    correctAnswer: 0,
    questionCounter: 0,
    quizStart: QUIZ_STATUS.choose,
    isLoading: STATUS.idle
};

const quizSlice = createSlice({
    name: "question",
    initialState: initQuestionState,
    reducers: {
        quizQuestionCounterZeroAction: () => initQuestionState,

        quizStartAction: (state, { payload }) => ({ ...state, quizStart: payload }),

        quizEmptyAction: (state, { payload }) => ({ ...state, isLoading: payload }),

        quizQuestionCounterAction: (state) => ({ ...state, questionCounter: state.questionCounter + 1 }),

        quizCorrectAnswerAction: (state, { payload }) => {
            const { id, answer } = payload
            const isCorrect = state.questions.some(({ correct_answer }, idx) => idx === id && correct_answer === answer);
            return isCorrect ? { ...state, correctAnswer: state.correctAnswer + 1 } : state;
        },
    },
    extraReducers: (builder) =>
        builder.addCase(fetchQuestions.pending, (state) => {
            state.isLoading = STATUS.loading
        })
            .addCase(fetchQuestions.fulfilled, (state, { payload }) => {
                state.questions = payload,
                    state.isLoading = STATUS.success
            }).addCase(fetchQuestions.rejected, (state) => {
                state.isLoading = "Server Error!!!"
            }),
});

export const quizReducer = quizSlice.reducer;
export const {
    quizStartAction,
    quizCorrectAnswerAction,
    quizQuestionCounterAction,
    quizEmptyAction,
    quizQuestionCounterZeroAction
} = quizSlice.actions;