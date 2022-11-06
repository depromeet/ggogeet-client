import { IS_SERVER } from "../constants"


class Auth {
  private readonly KEY_TOKEN: string = 'token'
  private readonly KEY_REFRESH_TOKEN: string = 'refresh-token'
  private readonly KEY_USER_NAME: string = 'user-name'
  private readonly KEY_KEEP_LOGIN: string = 'keep-login'
  private readonly KEY_ACTION_TIME: string = 'action-time'

  private token: string = (!IS_SERVER && localStorage.getItem(this.KEY_TOKEN)) || ''
  private refreshToken: string = (!IS_SERVER && localStorage.getItem(this.KEY_REFRESH_TOKEN)) || ''
  private userName: number = parseInt(
    (!IS_SERVER && localStorage.getItem(this.KEY_USER_NAME)) || '-1',
    10,
  )

  getToken(): string {
    return (!IS_SERVER && localStorage.getItem(this.KEY_TOKEN)) || ''
  }

  setToken(token: string) {
    this.token = token
    this.setActionTime(new Date())
    !IS_SERVER && localStorage.setItem(this.KEY_TOKEN, token)
  }

  getRefreshToken(): string {
    return (!IS_SERVER && localStorage.getItem(this.KEY_REFRESH_TOKEN)) || ''
  }

  setRefreshToken(token: string) {
    this.refreshToken = token
    !IS_SERVER && localStorage.setItem(this.KEY_REFRESH_TOKEN, token)
  }

  getUserName(): number {
    return parseInt((!IS_SERVER && localStorage.getItem(this.KEY_USER_NAME)) || '-1', 10)
  }

  setUserName(userName: number) {
    this.userName = userName
    !IS_SERVER && localStorage.setItem(this.KEY_USER_NAME, userName.toString())
  }

  getKeepLogin(): boolean {
    return ((!IS_SERVER && localStorage.getItem(this.KEY_KEEP_LOGIN)) || 'false') === 'true'
  }

  setKeepLogin(isKeep: boolean) {
    !IS_SERVER && localStorage.setItem(this.KEY_KEEP_LOGIN, isKeep.toString())
  }

  getActionTime(): Date {
    const time = !IS_SERVER && localStorage.getItem(this.KEY_ACTION_TIME)
    if (!time) return new Date()
    return new Date(time)
  }

  setActionTime(time: Date) {
    !IS_SERVER && localStorage.setItem(this.KEY_ACTION_TIME, time.toISOString())
  }

  getSessionKeepTime(): number {
    if (this.getKeepLogin()) return parseInt(process.env.REACT_APP_LONG_SESSION_TIME || '60', 10)
    return parseInt(process.env.REACT_APP_SESSION_TIME || '20', 10)
  }

  login(token: string, refreshToken: string) {
    this.setToken(token)
    this.setRefreshToken(refreshToken)
  }

  logout(): void {
    this.setToken('')
    this.setRefreshToken('')
    this.setUserName(-1)
  }

  isLoggedIn(): boolean {
    return this.getUserName() > 0
  }
}

export const auth: Auth = new Auth()
