import BaseResponse from "./BaseResponse";
import { TokenResponseData, UserInfoResponseData } from "../models/AuthModel";

export interface TokenResponse extends BaseResponse<TokenResponseData> {}

export interface UserInfoResponse extends BaseResponse<UserInfoResponseData> {}