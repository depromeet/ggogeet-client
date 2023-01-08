export type AuthPayloadType = {
  code: string;
  redirectURI: string;
};

export type KakaoLoginDataType = {
  jwtAccessToken: string;
  jwtRefreshToken: string;
  allowFriendsList: boolean;
};
