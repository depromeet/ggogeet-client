import AxiosRootInstance from "axios";
import type { AxiosInstance } from "axios";

export class Axios {
  protected axios: AxiosInstance;

  constructor(type: "a" | "b") {
    this.axios = this.initInstace();
    this.requestInterceptor();
    this.responseInterceptor();
  }

  private responseInterceptor() {
    // 글로벌 처리
  }

  private requestInterceptor() {}

  private initInstace() {
    return AxiosRootInstance.create({
      baseURL: ".",
    });
  }
}
