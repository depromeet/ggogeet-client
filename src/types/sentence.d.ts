export type SituationIdType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type GuideSentenceType = {
  id: number;
  content: string;
  situationId: SituationIdType;
  type: "user" | "guide";
  isShared: boolean;
  createdAt: string;
};

export type UserGuideSentencePayloadType = {
  content: string;
  isShared: boolean;
  situationId: SituationIdType;
};

export type GuideSentenceBySituationIdType = {
  userSentence: Array<GuideSentenceType>;
  guideSentence: Array<GuideSentenceType>;
};
