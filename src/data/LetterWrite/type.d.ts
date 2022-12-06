type TemplateType = "축하" | "위로" | "사랑" | "응원" | "감사" | "사과";

type TemplateDataType = Array<{
  type: TemplateType;
  value: string;
  imageUrl: string;
}>;

type GuidelineType = "Custom" | "Default";

type GuidelineDataType = Array<{
  type: GuidelineType;
  value: string;
}>;

export { TemplateType, TemplateDataType, GuidelineType, GuidelineDataType };
