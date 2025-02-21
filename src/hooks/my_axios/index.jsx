import axios from "axios";

let baseURL = import.meta.env.VITE_BASE_URL;

let myAxios = axios.create({
    baseURL: baseURL,
})
export default myAxios