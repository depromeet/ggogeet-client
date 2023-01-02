import * as S from "./styled";

import type { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return <S.Layout>{children}</S.Layout>;
}
