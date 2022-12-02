import { ReactElement } from "react";
import Image from "next/image";
import * as S from "./styled";

type Props = {
  type: "Text" | "Remind" | "Guideline";
  onClick?: () => void;
};

const toolbarItemMap = {
  Text: {
    src: "/Icons/icon__text.svg",
    width: 24,
    height: 24,
  },
  Remind: {
    src: "/Icons/icon__remind.svg",
    width: 22,
    height: 22,
  },
  Guideline: {
    src: "/Icons/icon__guideline.svg",
    width: 24,
    height: 24,
  },
} as const;

const Toolbar = ({ type, onClick }: Props): ReactElement => {
  return (
    <S.ToolbarWrapper onClick={onClick}>
      <Image alt={type} {...toolbarItemMap[type]} />
    </S.ToolbarWrapper>
  );
};

export default Toolbar;
