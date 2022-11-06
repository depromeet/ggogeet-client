import { auth } from '../local-storage/Auth'
import {BaseAPI} from './Base'
import { TokenResponse, UserInfoResponse } from './responses/AuthResponse'
import BaseResponse from './responses/BaseResponse'

export class AuthAPI extends BaseAPI {
  /**
   * 회원 로그인
   * @param
   * @returns
   * access_token // access token
   * expires_in   // access token 만료 기한
   * refresh_token  // refresh token
   * refresh_expires_in // refresh token 만료 기한
   */
  public async signIn(
    username: string, // email
    password: string,
  ): Promise<TokenResponse> {
    const body = {username,password}
    const res = await this.post<TokenResponse>(`${this.baseAPIUrl}/user/signin`, body)
    const { data: tokens } = res
    auth.login(tokens.access_token, tokens.refresh_token)
    return res
  }

  /**
   * 로그아웃
   * @param
   * @returns
   */
  public async signOut(): Promise<BaseResponse> {
    const res = await this.postWithAuth<BaseResponse>(`${this.baseAPIUrl}/user/signout`)
    auth.logout()
    return res
  }

  /**
   * 계정 정보 조회
   * @param
   * @returns
   * email  // 사용자 이메일
   * phone_number // 사용자 전화번호
   * name // 사용자 이름
   * email_verified // 이메일 인증 여부
   * is_pause_account // 정지 계정 여부
   * is_temp_password // 임시 비밀번호 여부
   */
  public async getUserInfo(): Promise<UserInfoResponse> {
    const res = await this.getWithAuth<UserInfoResponse>(`${this.baseAPIUrl}/user/info`)
    return res
  }
}

export const authAPI = new AuthAPI()
