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
    default: "/icons/icon__text-editor-text.svg",
    active: "/icons/icon__text-editor-text--active.svg",
  },
  Color: {
    default: "/icons/icon__text-editor-color.svg",
    active: "/icons/icon__text-editor-color--active.svg",
  },
  Align: {
    default: "/icons/icon__text-editor-align.svg",
    active: "/icons/icon__text-editor-align--active.svg",
  },
  Guideline: {
    default: "/icons/icon__text-editor-guideline.svg",
    active: "/icons/icon__text-editor-guideline.svg",
  },
  Remind: {
    default: "/icons/icon__text-editor-remind.svg",
    active: "/icons/icon__text-editor-remind.svg",
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
