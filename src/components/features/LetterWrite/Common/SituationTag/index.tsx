import { TemplateType } from "@/src/data/LetterWrite/type";
import theme from "@/src/styles/theme";
import { ReactElement } from "react";
import * as S from "../styled";

interface SituationTagProps {
  templateType: TemplateType;
  height: number;
  isSelected?: boolean;
  stylesOptions?: {
    fontSize?: number;
  };
}

type SituationTagMapType = {
  [template in TemplateType]: string;
};

const situationTagMap: SituationTagMapType = {
  "축하하는 고양이": theme.colors.yellow,
  "감동받은 곰": theme.colors.purple,
  "사랑이 넘치는 토끼": theme.colors.red,
  "사과하는 다람쥐": theme.colors.gray3,
  "소식 전하는 비둘기": theme.colors.green,
  "응원하는 물개": theme.colors.beige,
  "친해지고 싶은 펭귄": theme.colors.blue,
  꼬깃: theme.colors.gray1,
};

const SituationTag = ({
  templateType,
  height,
  isSelected = true,
  stylesOptions,
}: SituationTagProps): ReactElement => {
  return (
    <S.SituationTagWrapper
      height={height}
      bgColor={isSelected ? situationTagMap[templateType] : theme.colors.gray6}
      color={isSelected ? theme.colors.navy70 : theme.colors.gray4}
      stylesOptions={stylesOptions}
    >
      <svg
        width="6"
        height={height}
        viewBox={`0 0 6 ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.052195 22H0.0614712H6L6 0L2.49184 0L2.91855 1.70706C3.29888 3.23191 2.91855 4.84307 1.90744 6.01308C0.525283 7.61465 0.423244 10.0122 1.66626 11.7384L1.89816 12.0549C2.65882 13.5606 2.58461 15.3731 1.70336 16.8021L0.673702 18.4708C0.191339 19.2764 -0.0405673 20.2162 0.00581385 21.1656L0.052195 22Z"
          fill={isSelected ? situationTagMap[templateType] : theme.colors.gray6}
        />
      </svg>
      <div>
        <span>{templateType}</span>
      </div>
      <svg
        width="6"
        height={height}
        viewBox={`0 0 6 ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0L0 3.5L0 22H2.62346L5.51764 19.1325L2.50287 17.7611L6 14.2703L1.41754 12.6495C1.41754 12.6495 5.39705 9.90671 5.39705 9.53269C5.39705 9.53269 1.56596 7.73932 0.98156 7.41325C0.98156 7.41325 5.19297 5.41848 5.98145 5.33217L0 3.5L2.94812 0L0 0Z"
          fill={isSelected ? situationTagMap[templateType] : theme.colors.gray6}
        />
      </svg>
    </S.SituationTagWrapper>
  );
};

export default SituationTag;
