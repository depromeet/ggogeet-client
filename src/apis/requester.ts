import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { TOKEN_KEY, RESPONSE_ERROR } from "@/src/constants/api";
import { getCookie } from "@/src/utils/cookies";

const createAxiosInstance = () => {
  const base = axios.create({
    baseURL: "",
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
  const accessToken = getCookie(TOKEN_KEY.ACCESS);

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
