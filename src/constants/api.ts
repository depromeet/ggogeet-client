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
