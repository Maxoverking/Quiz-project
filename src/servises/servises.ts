// axios.defaults.baseURL = "https://opentdb.com/api.php?"
import axios from "axios";

export const axiosRequest = axios.create({
    baseURL: "https://opentdb.com/api.php?"
})

