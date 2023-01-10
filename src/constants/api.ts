export const HTTP_METHOD = {
  GET: "GET",
  PUT: "PUT",
  POST: "POST",
  DELETE: "DELETE",
  PATCH: "PATCH",
} as const;

export const RESPONSE_SUCCESS = {
  OK: 200,
  CREATED: 201,
} as const;

export const RESPONSE_ERROR = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  INTERNAL_SERVER: 500,
} as const;

export const KAKAO_QUERY = {
  BASE_URL: "https://kauth.kakao.com/oauth/authorize",
  CLIENT_ID: "6cc7f25d8ff933a60bc5f7427928aa92",
  RESPONSE_TYPE: "code",
  KAKAO_LOGIN_STATE: "ggogeet-client",
  KAKAO_FRIENDS_SCOPE: "friends,talk_message",
  KAKAO_LOGIN_REDIRECT_URI: "/signin/redirect/kakao",
  KAKAO_FRIENDS_REDIRECT_URI: "/signin/redirect/kakao-friends",
  KAKAO_SHARE_TEMPLATE_ID: 87993,
} as const;
