export interface Auth {
  id: string;
  accessToken: string;
  refreshToken: string;
  type: string;
  createTime: string;
  expireTime: string;
  refreshExpireTime: string;
}
