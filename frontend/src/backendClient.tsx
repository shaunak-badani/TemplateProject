import axios from "axios";
import { log } from "./lib/logger"

const apiURL = import.meta.env.VITE_API_ENDPOINT;
log("apiURL : ", apiURL);

const backendClient = axios.create({
    baseURL: apiURL
});

export default backendClient;