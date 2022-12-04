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
    defaultImageUrl: "/Icons/icon__text-editor--text.svg",
    activeImageUrl: "/Icons/icon__text-editor--text-active.svg",
  },
  Color: {
    defaultImageUrl: "/Icons/icon__text-editor--color.svg",
    activeImageUrl: "/Icons/icon__text-editor--color-active.svg",
  },
  Align: {
    defaultImageUrl: "/Icons/icon__text-editor--align.svg",
    activeImageUrl: "/Icons/icon__text-editor--align-active.svg",
  },
  Guideline: {
    defaultImageUrl: "/Icons/icon__text-editor--guideline.svg",
    activeImageUrl: "/Icons/icon__text-editor--guideline.svg",
  },
  Remind: {
    defaultImageUrl: "/Icons/icon__text-editor--remind.svg",
    activeImageUrl: "/Icons/icon__text-editor--remind.svg",
  },
} as const;

const Toolbar = ({ type, isClicked = false, onClick }: Props): ReactElement => {
  return (
    <S.ToolbarWrapper onClick={onClick}>
      <Image
        src={
          isClicked
            ? toolbarItemMap[type].activeImageUrl
            : toolbarItemMap[type].defaultImageUrl
        }
        alt={type}
        width={24}
        height={24}
      />
    </S.ToolbarWrapper>
  );
};

export default Toolbar;
