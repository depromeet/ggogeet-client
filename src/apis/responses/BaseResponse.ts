import { ModelList } from "../models/BaseModel";

type BasicResponse<T> = {
  statusCode: number;
  data: T;
  message?: string;
};

export interface Error {
  message: string;
  code: string;
}

export class Error {
  message = "";
  code = "";
}

// import type {Error} from './@@@'

export default interface BaseResponse {
  status: string;
  data: any;
  error: Error;
}

export interface ModelListResponse<T> extends BaseResponse {
  data: ModelList<T>;
}

export interface ModelResponse<T> extends BaseResponse {
  data: T;
}
