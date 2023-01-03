import qs from "query-string";

export const useOauth = () => {
  const getKakaoRedirectUri = () =>
    window.location.origin + "/signin/redirect/kakao";

  const getKakaoUri = () => {
    const baseURL = "https://kauth.kakao.com/oauth/authorize";
    const query = qs.stringify({
      response_type: "code",
      client_id: "6cc7f25d8ff933a60bc5f7427928aa92",
      redirect_uri: getKakaoRedirectUri(),
      state: "ggogeet-client",
    });

    return `${baseURL}?${query}`;
  };

  return {
    getKakaoRedirectUri,
    getKakaoUri,
  };
};
