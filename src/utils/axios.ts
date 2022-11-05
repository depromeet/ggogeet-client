import AxiosOriginInstance from "axios";
import Qs from "qs";
import { API_BASE_URL } from "@/src/constants";
import type { AxiosInstance, CreateAxiosDefaults } from "axios";

export * from "@/src/types/apis";

/** Axios 기본옵션 */
const axiosCreateOptions: CreateAxiosDefaults = {
  baseURL: API_BASE_URL[process.env.NODE_ENV],
  headers: {
    "X-auth-bypass": false, // 인증이 필요없는 API에 정책으로 인해 헤더가 추가되면 안되는 경우 사용 됩니다.
  },
  paramsSerializer: {
    serialize: (params) => {
      return Qs.stringify(params, { arrayFormat: "brackets" });
    },
  },
};

export class Axios {
  protected axios: AxiosInstance;

  constructor() {
    this.axios = AxiosOriginInstance.create(axiosCreateOptions);

    this.requestInterceptor(this.axios);
    this.responseInterceptor(this.axios);
  }

  /** 요청 인터셉터 */
  private requestInterceptor(axiosInstance: AxiosInstance) {
    axiosInstance.interceptors.request.use(
      (config) => {
        // TODO: 헤더에 인증 토큰 추가 필요

        delete config.headers!["X-auth-bypass"];
        return config;
      },
      (error) => Promise.reject(error)
    );
  }
  /** 응답 인터셉터 */
  private responseInterceptor(axiosInstance: AxiosInstance) {
    axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        // TODO: HttpStatusCode에 따른 분기 처리 필요.

        return Promise.reject(error);
      }
    );
  }
}
