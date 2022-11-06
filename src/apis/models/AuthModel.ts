export const INITIAL_USER_INFO = {
  email: '',
  phone_number: '',
  name: '',
  email_verified: false,
  is_pause_account: false,
  is_temp_password: false

}

export interface TokenResponseData {
  access_token: string
  expires_in: number
  refresh_token: string
  refresh_expires_in: number
}

export interface UserInfoResponseData {
  email: string
  phone_number: string
  name: string
  email_verified: boolean
  is_pause_account: boolean
  is_temp_password: boolean
}