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

type KakaoFriendDataType = {
  id: number;
  profile_img: string; // 프로필 이미지 주소
  kakao_friend_name: string; // 내가 저장한 친구 이름
  kakao_uuid: string; // 카카오 메세지 보낼때 사용할 친구 고유 uuid
  created_at: number; // timestamp
  updated_at: number; // timestamp
};

type KakaoFriendsListType = {
  data: {
    friends: Array<KakaoFriendDataType>;
  };
};

export {
  GuidelineSentenceType,
  SituationGuidelineSentenceType,
  KakaoFriendsListType,
};
