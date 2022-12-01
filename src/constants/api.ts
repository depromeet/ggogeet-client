export const HTTP_METHOD = {
  GET: "GET",
  PUT: "PUT",
  POST: "POST",
  DELETE: "DELETE",
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

export const TOKEN_KEY = {
  ACCESS: "access_token",
  REFRESH: "refresh_token",
} as const;
