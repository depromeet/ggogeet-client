import { ReactNode } from "react";

export type RefAny = MutableRefObject<any>;

export type QueryString = string | string[] | undefined;

export type WrapperChildren = { children: ReactNode };
