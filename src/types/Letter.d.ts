// 사용자 문장 (가이드라인)
type GuidelineSentenceType = {
  id: number;
  content: string;
};

type SituationGuidelineSentenceType = {
  userSentence: {
    situation_id: number;
    sentence: Array<GuidelineSentenceType>;
  };
  guideSentence: {
    situation_id: number;
    sentence: Array<GuidelineSentenceType>;
  };
};

export { GuidelineSentenceType, SituationGuidelineSentenceType };
