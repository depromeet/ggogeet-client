import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  RESPONSE_ERROR_UNAUTHORIZED,
} from '@/src/constants/api';
import { deleteCookie, getCookie, setCookie } from '@/src/utils/cookies';

const createAxiosInstance = () => {
  const base = axios.create({
    // 서버 주소
    baseURL: '',
  });

  base.interceptors.response.use(
    (response) => response,
    async (error) => {
      const {
        config,
        response: { status },
      } = error;

      if (status === RESPONSE_ERROR_UNAUTHORIZED) {
        // 토큰 재발급
        /* 
          const { accessToken, refreshToken } = await refreshAllTokens();

          config.headers['Authorization'] = `Bearer ${accessToken}`;

          setCookie(ACCESS_TOKEN_KEY, accessToken);
          setCookie(REFRESH_TOKEN_KEY, refreshToken);

          return axios(config);
        */
      }

      return Promise.reject(error);
    }
  );

  return base;
};

const axiosInstance = createAxiosInstance();

// response type 은 백엔드와 상의 필요
type Response<T> = {
  statusCode: number;
  message?: string;
  data: T;
};

export async function requester<Payload>(config: AxiosRequestConfig) {
  const accessToken = getCookie(ACCESS_TOKEN_KEY);

  const response: AxiosResponse<Response<Payload>> = await axiosInstance({
    headers: {
      Authorization: accessToken ? `Bearer ${accessToken}` : '',
    },
    ...config,
  });

  return {
    status: response.data.statusCode,
    data: response.data.data,
  };
}
