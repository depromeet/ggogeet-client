import axios, { AxiosRequestConfig } from 'axios';
import { auth } from '../local-storage/Auth';
import { TokenResponse } from './responses/AuthResponse';
import BaseResponse from './responses/BaseResponse';

export class BaseAPI {
  public baseAPIUrl: string = process.env.NEXT_PUBLIC_API_BASE_URL ?? '';

  private lastMethod = '';
  private lastURL = '';
  private lastCalled = 0;
  private threshold = 1000;

  constructor() {
    axios.defaults.baseURL = this.baseAPIUrl;
  }

  protected preCheck(
    method: 'GET' | 'PUT' | 'DELETE' | 'POST',
    url: string
  ): boolean {
    const currentTime = new Date().getTime();
    if (
      this.lastMethod === method &&
      (method === 'POST' || method === 'PUT') &&
      this.lastURL === url &&
      this.lastCalled + this.threshold > currentTime
    ) {
      return false;
    } else {
      this.lastMethod = method;
      this.lastURL = url;
      this.lastCalled = new Date().getTime();
    }
    return true;
  }

  protected async refreshToken(): Promise<TokenResponse> {
    const config = {
      body: {
        refresh_token: `${auth.getRefreshToken()}`,
      },
    };
    try {
      const res = await axios.post<TokenResponse>(
        `${this.baseAPIUrl}/user/token-refresh`,
        config
      );
      // console.log(`POST ${JSON.stringify(res.data)}`)
      const { data } = res.data;
      auth.setToken(data.access_token);
      auth.setRefreshToken(data.refresh_token);
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 400 || error.response?.status === 401) {
          auth.logout();
        }
        return error.response?.data;
      } else {
        return {
          data: {
            access_token: '',
            expires_in: 0,
            refresh_expires_in: 0,
            refresh_token: '',
          },
          message: '',
          code: 0,
          result: false,
        };
      }
    }
  }

  protected async get<T extends BaseResponse | unknown>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const check = this.preCheck('GET', url);
    if (!check) {
      return {
        data: {},
        message: '',
        result: false,
        code: 0,
      } as T;
    }
    try {
      const res = await axios.get(url, config);
      if (res.data) {
        return res.data;
      }
      return res as T;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data as T;
      } else {
        return {
          data: {},
          message: '',
          result: false,
          code: 0,
        } as T;
      }
    }
  }

  protected async getWithAuth<T extends BaseResponse>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const check = this.preCheck('GET', url);
    if (!check) {
      return {
        data: {},
        message: '',
        result: false,
        code: 0,
      } as T;
    }
    if (!config) {
      config = {
        headers: {
        },
      };
    }
    if (auth.getToken().length > 0 && config.headers) {
      config.headers['Authorization'] = `Bearer ${auth.getToken()}`;
    }
    try {
      const res = await axios.get(url, config);
      return res.data as T;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          const res = await this.refreshToken();
          if (res.result && res.code === 1) {
            return this.getWithAuth(url, config);
          }
        }
        return error.response?.data as T;
      } else {
        return {
          data: {},
          message: '',
          result: false,
          code: 0,
        } as T;
      }
    }
  }

  protected async post<T extends BaseResponse | unknown>(
    url: string,
    data: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> {
    this.lastMethod = 'POST';
    this.lastURL = url;
    this.lastCalled = new Date().getTime();
    if (!config) {
      config = {
        headers: {
        },
      };
    }
    try {
      const res = await axios.post(url, data, config);
      // console.log(`POST ${JSON.stringify(res.data)}`)
      if (res.data) {
        return res.data;
      }
      return res as T;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data as T;
      } else {
        return {
          data: {},
          message: '',
          result: false,
          code: 0,
        } as T;
      }
    }
  }

  protected async postWithAuth<T extends BaseResponse>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const check = this.preCheck('POST', url);
    if (!check) {
      return {
        data: {},
        message: '',
        result: false,
        code: 0,
      } as T;
    }
    if (!config) {
      config = {
        headers: {
        },
      };
    }
    if (auth.getToken().length > 0 && config.headers) {
      config.headers['Authorization'] = `Bearer ${auth.getToken()}`;
    }
    try {
      const res = await axios.post(url, data, config);
      //  console.log(`POST ${JSON.stringify(res.data)}`);
      return res.data as T;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          const res = await this.refreshToken();
          if (res.result && res.code === 1) {
            return this.postWithAuth(url, data, config);
          }
        }
        return error.response?.data as T;
      } else {
        return {
          data: {},
          message: '',
          result: false,
          code: 0,
        } as T;
      }
    }
  }

  protected async put<T extends BaseResponse>(
    url: string,
    data: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> {
    this.lastMethod = 'PUT';
    this.lastURL = url;
    this.lastCalled = new Date().getTime();
    try {
      const res = await axios.put(url, data, config!);
      return res.data as T;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data as T;
      } else {
        return {
          data: {},
          message: '',
          result: false,
          code: 0,
        } as T;
      }
    }
  }

  protected async putWithAuth<T extends BaseResponse>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const check = this.preCheck('PUT', url);
    if (!check) {
      return {
        data: {},
        message: '',
        result: false,
        code: 0,
      } as T;
    }
    if (!config) {
      config = {
        headers: {
        },
      };
    }
    if (config.headers) {
      config.headers['Authorization'] = `Bearer ${auth.getToken()}`;
    }
    try {
      const res = await axios.put(url, data, config);
      //  console.log(`PUT ${JSON.stringify(res.data)}`);
      return res.data as T;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          const res = await this.refreshToken();
          if (res.result && res.code === 1) {
            return this.putWithAuth(url, data, config);
          }
        }
        return error.response?.data as T;
      } else {
        return {
          data: {},
          message: '',
          result: false,
          code: 0,
        } as T;
      }
    }
  }

  protected async delete<T extends BaseResponse>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<T> {
    this.lastMethod = 'DELETE';
    this.lastURL = url;
    this.lastCalled = new Date().getTime();
    try {
      const res = await axios.delete(url, config);
      return res.data as T;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data as T;
      } else {
        return {
          data: {},
          message: '',
          result: false,
          code: 0,
        } as T;
      }
    }
  }

  protected async deleteWithAuth<T extends BaseResponse>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const check = this.preCheck('DELETE', url);
    if (!check) {
      return {
        data: {},
        message: '',
        result: false,
        code: 0,
      } as T;
    }
    if (!config) {
      config = {
        headers: {
        },
      };
    }
    if (config.headers) {
      config.headers['Authorization'] = `Bearer ${auth.getToken()}`;
    }
    try {
      const res = await axios.delete(url, config);
      //  console.log(`DELETE ${JSON.stringify(res.data)}`);
      return res.data as T;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          const res = await this.refreshToken();
          if (res.result && res.code === 1) {
            return this.deleteWithAuth(url, config);
          }
        }
        return error.response?.data as T;
      } else {
        return {
          data: {},
          message: '',
          result: false,
          code: 0,
        } as T;
      }
    }
  }
}

export const baseAPI = new BaseAPI();
