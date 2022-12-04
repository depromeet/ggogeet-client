export type TemplateType = "축하" | "위로" | "사랑해요" | "응원";

export type SituationTemplateDataType = Array<{
  type: TemplateType;
  value: TemplateType;
  imageUrl: string;
}>;
