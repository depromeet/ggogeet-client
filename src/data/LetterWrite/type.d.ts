export type TemplateType =
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
  title: TemplateType;
  description: string;
  color: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
}>;

// TODO: 임시
type RemindDataType = Array<{
  id: number;
  title: string;
  description: string;
  created_at: string;
  isAlarm: boolean;
}>;

export { SituationTemplateDataType, RemindDataType };
