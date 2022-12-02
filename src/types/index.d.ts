import { ReactNode } from "react";

type RefAny = MutableRefObject<any>;

type QueryString = string | string[] | undefined;

type WrapperChildren = { children: ReactNode };

export { RefAny, QueryString, WrapperChildren };
