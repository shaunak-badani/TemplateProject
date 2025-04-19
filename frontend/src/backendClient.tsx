import axios from "axios";
import { log } from "./lib/logger"
import { globalStore } from "./store/store";

const apiURL = import.meta.env.VITE_API_ENDPOINT;
log("apiURL : ", apiURL);

const backendClient = axios.create({
    baseURL: apiURL
});

backendClient.interceptors.response.use(
    (response) => response,
    (error) => {
        const message =
            error.response?.data?.detail || "Something went wrong with the API.";
        const status = error.response?.status;

        log("API error:", { status, message });
        
        globalStore.getState().setError(message);
        return Promise.resolve({ data: null, error: { message } });
    }
  );

export default backendClient;