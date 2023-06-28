import { configureStore } from "@reduxjs/toolkit";
import { initQuestionState, quizReducer } from "./quiz/quizSlice";

export const initState = {
    quiz: initQuestionState,
};

export const store = configureStore({
    preloadedState: initState,
    reducer: {
        quiz: quizReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
