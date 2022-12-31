export const getDateTimeFormat = (milliseconds: number) =>
  new Intl.DateTimeFormat("ko-kr").format(new Date(milliseconds)).slice(0, -1);
