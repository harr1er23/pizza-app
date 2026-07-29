import axios from "axios";
import { API_BASE_URL } from "./config";
import { ApiError } from "./errors";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error)) {
      const reason = error.response?.data?.reason ?? error.message;
      throw new ApiError(reason, error.response?.status);
    }
    throw error;
  },
);
