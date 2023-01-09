import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { RESPONSE_ERROR } from "@/src/constants/api";
import { getCookie } from "@/src/utils/cookies";
import { COOKIE_ACCESS_TOKEN_KEY } from "../constants/keys";

const createAxiosInstance = () => {
  const base = axios.create({
    baseURL: "https://api.ggo-geet.com/",
  });

  base.interceptors.response.use(
    (response) => response,
    async (error) => {
      const {
        response: { status },
      } = error;

      if (status === RESPONSE_ERROR.UNAUTHORIZED) {
      }

      return Promise.reject(error);
    }
  );

  return base;
};

const axiosInstance = createAxiosInstance();

type Response<T> = {
  statusCode: number;
  message?: string;
  data: T;
};

export async function requester<Payload>(config: AxiosRequestConfig) {
  const accessToken = getCookie(COOKIE_ACCESS_TOKEN_KEY);

  const response: AxiosResponse<Response<Payload>> = await axiosInstance({
    headers: {
      Authorization: accessToken ? `Bearer ${accessToken}` : "",
    },
    ...config,
  });

  return {
    status: response.data.statusCode,
    data: response.data.data,
  };
}
