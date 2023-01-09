import qs from "query-string";
import { KAKAO_QUERY } from "../constants/api";

export const useOauth = () => {
  const getKakaoUri = () => {
    const baseURL = KAKAO_QUERY.BASE_URL;
    const query = qs.stringify({
      response_type: KAKAO_QUERY.RESPONSE_TYPE,
      client_id: KAKAO_QUERY.CLIENT_ID,
      redirect_uri:
        window.location.origin + KAKAO_QUERY.KAKAO_LOGIN_REDIRECT_URI,
      state: KAKAO_QUERY.KAKAO_LOGIN_STATE,
    });

    return `${baseURL}?${query}`;
  };

  return {
    getKakaoUri,
  };
};
