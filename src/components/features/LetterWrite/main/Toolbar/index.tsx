import { ReactElement } from "react";
import Image from "next/image";
import * as S from "../styled";

type Props = {
  type: "Text" | "Color" | "Align" | "Guideline" | "Remind";
  onClick?: () => void;
};

const toolbarItemMap = {
  Text: {
    src: "/Icons/icon__text-editor--text.svg",
    width: 24,
    height: 24,
  },
  Color: {
    src: "/Icons/icon__text-editor--color.svg",
    width: 24,
    height: 24,
  },
  Align: {
    src: "/Icons/icon__text-editor--align.svg",
    width: 24,
    height: 24,
  },
  Guideline: {
    src: "/Icons/icon__text-editor--guideline.svg",
    width: 24,
    height: 24,
  },
  Remind: {
    src: "/Icons/icon__text-editor--remind.svg",
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
