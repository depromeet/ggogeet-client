export const getCookie = (key: string, defaultValue = "") => {
  if (typeof window === "undefined") return defaultValue;

  const _cookies: { [key: string]: string } = {};

  const documentCookies = document.cookie?.split("; ") ?? [];

  for (let i = 0; i < documentCookies.length; i++) {
    const cookieParts = documentCookies[i].split("=");

    const _cookie = cookieParts.slice(1).join("=");
    const name = cookieParts[0];

    _cookies[name] = _cookie;
  }

  return _cookies[key] ?? defaultValue;
};

export const setCookie = (key: string, value: any) => {
  if (typeof window === "undefined") return;

  const updatedCookie = `${encodeURIComponent(key)}=${encodeURIComponent(
    value
  )}; path=/; secure`;

  document.cookie = updatedCookie;
};

export const deleteCookie = (key: string) => {
  const updatedCookie = `${encodeURIComponent(
    key
  )}=; max-age=-1; path=/; secure`;

  document.cookie = updatedCookie;
};
