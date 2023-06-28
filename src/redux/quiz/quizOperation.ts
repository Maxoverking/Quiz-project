import { axiosRequest } from "../../servises/servises";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUrlRequestQuery } from "../../components/QuizForm/QuizForms/interface/IUrlRequestQuery";
import { IDataQuestion } from "./types/quizTypes";

export const fetchQuestions = createAsyncThunk('get/question',
    async ({ amount, category, difficulty, type }: IUrlRequestQuery):
        Promise<IDataQuestion[]> => {
        try {
            const { data } = await axiosRequest.get("", {
                params: {
                    amount: amount.toString(),
                    category, difficulty, type,
                }
            });
            console.log("🚀  data:", data.results);
            return data.results;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
)
