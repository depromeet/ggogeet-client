import { ReactElement } from "react";
import Image from "next/image";
import * as S from "../styled";

type Props = {
  type: "Text" | "Color" | "Align" | "Guideline" | "Remind";
  isClicked?: boolean;
  onClick?: () => void;
};

const toolbarItemMap = {
  Text: {
    default: "/Icons/icon__text-editor-text.svg",
    active: "/Icons/icon__text-editor-text--active.svg",
  },
  Color: {
    default: "/Icons/icon__text-editor-color.svg",
    active: "/Icons/icon__text-editor-color--active.svg",
  },
  Align: {
    default: "/Icons/icon__text-editor-align.svg",
    active: "/Icons/icon__text-editor-align--active.svg",
  },
  Guideline: {
    default: "/Icons/icon__text-editor-guideline.svg",
    active: "/Icons/icon__text-editor-guideline.svg",
  },
  Remind: {
    default: "/Icons/icon__text-editor-remind.svg",
    active: "/Icons/icon__text-editor-remind.svg",
  },
} as const;

const Toolbar = ({ type, isClicked = false, onClick }: Props): ReactElement => {
  return (
    <S.ToolbarWrapper onClick={onClick}>
      <Image
        src={
          isClicked ? toolbarItemMap[type].active : toolbarItemMap[type].default
        }
        alt={type}
        width={24}
        height={24}
      />
    </S.ToolbarWrapper>
  );
};

export default Toolbar;
