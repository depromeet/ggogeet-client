export type AuthPayloadType = {
  code: string;
  redirectURI: string;
};

export type KakaoLoginType = {
  jwtAccessToken: string;
  jwtRefreshToken: string;
  allowFriendsList: boolean;
};
