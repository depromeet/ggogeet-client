import { QueryString } from "@/src/types";

export const getNavigateNextLink = (type: QueryString) => {
  if (type && typeof type === "string") {
    const [front, end] = type.split("-");
    return `/letter-write?type=${front}-0${Number(end) + 1}`;
  } else {
    return `/letter-write?type=recipient-01`;
  }
};
