type TemplateType =
  | "축하하는 고양이"
  | "감동받은 곰"
  | "사랑이 넘치는 토끼"
  | "사과하는 다람쥐"
  | "소식 전하는 비둘기"
  | "응원하는 물개"
  | "친해지고 싶은 펭귄"
  | "꼬깃";

type SituationTemplateDataType = Array<{
  situationId: number;
  templateUrl: string;
  title: TemplateType;
  description: string;
}>;

export { SituationTemplateDataType };
