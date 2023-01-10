import qs from "query-string";
import { KAKAO_QUERY } from "../constants/api";

export const useKakaoFriends = () => {
  const getKakaoFriendsUri = () => {
    const baseURL = KAKAO_QUERY.BASE_URL;
    const query = qs.stringify({
      client_id: KAKAO_QUERY.CLIENT_ID,
      redirect_uri:
        window.location.origin + KAKAO_QUERY.KAKAO_FRIENDS_REDIRECT_URI,
      response_type: KAKAO_QUERY.RESPONSE_TYPE,
      scope: KAKAO_QUERY.KAKAO_FRIENDS_SCOPE,
    });

    return `${baseURL}?${query}`;
  };

  return {
    getKakaoFriendsUri,
  };
};
