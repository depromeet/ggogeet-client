export type TemplateType =
  | "축하하는 고양이"
  | "감동받은 곰"
  | "사랑이 넘치는 토끼"
  | "사과하는 다람쥐"
  | "소식 전하는 비둘기"
  | "응원하는 물개"
  | "친해지고 싶은 펭귄"
  | "꼬깃";

export type SituationTemplateDataType = Array<{
  situationId: number;
  title: TemplateType;
  description: string;
  color: string;
  situationImage: {
    src: string;
    width: number;
    height: number;
  };
  completedImage: {
    src: string;
    width: number;
    height: number;
  };
  characterImage: {
    src: string;
    width: number;
    height: number;
  };
}>;
