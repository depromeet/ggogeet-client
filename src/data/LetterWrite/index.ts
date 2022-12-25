import type { SituationGuidelineSentenceType } from "@/src/types/Letter";
import type { SituationTemplateDataType } from "./type";

// TODO: description 수정 필요
const situationTemplatesData: SituationTemplateDataType = [
  {
    situationId: 1,
    templateUrl: "",
    title: "축하하는 고양이",
    description:
      "응원하고 싶을 때는 물개 친구를 건네보세요. 신나는 물개 박수 어쩌 할거예요!",
  },
  {
    situationId: 2,
    templateUrl: "",
    title: "감동받은 곰",
    description:
      "응원하고 싶을 때는 물개 친구를 건네보세요. 신나는 물개 박수 어쩌 할거예요!",
  },
  {
    situationId: 3,
    templateUrl: "",
    title: "사랑이 넘치는 토끼",
    description:
      "응원하고 싶을 때는 물개 친구를 건네보세요. 신나는 물개 박수 어쩌 할거예요!",
  },
  {
    situationId: 4,
    templateUrl: "",
    title: "사과하는 다람쥐",
    description:
      "응원하고 싶을 때는 물개 친구를 건네보세요. 신나는 물개 박수 어쩌 할거예요!",
  },
  {
    situationId: 5,
    templateUrl: "",
    title: "소식 전하는 비둘기",
    description:
      "응원하고 싶을 때는 물개 친구를 건네보세요. 신나는 물개 박수 어쩌 할거예요!",
  },
  {
    situationId: 6,
    templateUrl: "",
    title: "응원하는 물개",
    description:
      "응원하고 싶을 때는 물개 친구를 건네보세요. 신나는 물개 박수 어쩌 할거예요!",
  },
  {
    situationId: 7,
    templateUrl: "",
    title: "친해지고 싶은 펭귄",
    description:
      "응원하고 싶을 때는 물개 친구를 건네보세요. 신나는 물개 박수 어쩌 할거예요!",
  },
  {
    situationId: 8,
    templateUrl: "",
    title: "꼬깃",
    description:
      "응원하고 싶을 때는 물개 친구를 건네보세요. 신나는 물개 박수 어쩌 할거예요!",
  },
];

// 임시용 (감동받은 곰에 해당하는 가이드라인 데이터)
const tempGuidelineData: SituationGuidelineSentenceType = {
  userSentence: {
    situation_id: 2,
    sentence: [],
  },
  guideSentence: {
    situation_id: 2,
    sentence: [
      {
        id: 1,
        content: "기본 제공 문장 1",
      },
      {
        id: 2,
        content: "기본 제공 문장 2",
      },
      {
        id: 3,
        content: "기본 제공 문장 3",
      },
      {
        id: 4,
        content: "기본 제공 문장 4",
      },
      {
        id: 5,
        content: "기본 제공 문장 5",
      },
    ],
  },
};

export { situationTemplatesData, tempGuidelineData };
