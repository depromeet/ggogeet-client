import theme from "@/src/styles/theme";
import type {
  KakaoFriendsListType,
  SituationGuidelineSentenceType,
} from "@/src/types/Letter";
import type { RemindDataType, SituationTemplateDataType } from "./type";

const situationTemplatesData: SituationTemplateDataType = [
  {
    situationId: 1,
    title: "축하하는 고양이",
    description:
      "생일, 입학, 승진 등 축하할 일이 있을 때는 귀여운 고양이 친구를 건네보세요!",
    color: theme.colors.yellow,
    situationImage: {
      src: "/images/image__situation-template01.png",
      width: 113,
      height: 173,
    },
    completedImage: {
      src: "/images/image__completed-template02.png",
      width: 280,
      height: 174,
    },
  },
  {
    situationId: 2,
    title: "감동받은 곰",
    description:
      "고마움을 표현하고 싶을 때, 포근한 곰 친구로 따뜻한 마음을 전해 보세요!",
    color: theme.colors.purple,
    situationImage: {
      src: "/images/image__situation-template02.png",
      width: 154,
      height: 169,
    },

    completedImage: {
      src: "/images/image__completed-template01.png",
      width: 280,
      height: 188,
    },
  },
  {
    situationId: 3,
    title: "사랑이 넘치는 토끼",
    description:
      "애정을 표현하고 싶을 때는 사랑스러운 토끼 친구의 도움을 받아보세요.",
    color: theme.colors.red,
    situationImage: {
      src: "/images/image__situation-template03.png",
      width: 119,
      height: 187,
    },
    completedImage: {
      src: "/images/image__completed-template03.png",
      width: 280,
      height: 174,
    },
  },
  {
    situationId: 4,
    title: "사과하는 다람쥐",
    description:
      "미안한 마음을 전해야 할 때, 두 손 모아 사과하는 다람쥐 친구를 건네보세요.",
    color: theme.colors.gray3,
    situationImage: {
      src: "/images/image__situation-template04.png",
      width: 137,
      height: 172,
    },
    completedImage: {
      src: "/images/image__completed-template04.png",
      width: 280,
      height: 174,
    },
  },
  {
    situationId: 5,
    title: "소식 전하는 비둘기",
    description:
      "근황이 궁금한 사람이 있나요? 비둘기 친구가 좋은 소식을 물어다 줄 거예요!",
    color: theme.colors.green,
    situationImage: {
      src: "/images/image__situation-template05.png",
      width: 123,
      height: 180,
    },
    completedImage: {
      src: "/images/image__completed-template05.png",
      width: 280,
      height: 174,
    },
  },
  {
    situationId: 6,
    title: "응원하는 물개",
    description:
      "힘이 되고 싶은 사람이 있다면, 물개 친구가 물개 박수로 응원해 줄 거예요!",
    color: theme.colors.beige,
    situationImage: {
      src: "/images/image__situation-template06.png",
      width: 161,
      height: 168,
    },
    completedImage: {
      src: "/images/image__completed-template06.png",
      width: 280,
      height: 174,
    },
  },
  {
    situationId: 7,
    title: "친해지고 싶은 펭귄",
    description:
      "누군가와 친해지고 싶을 때, 수줍게 악수를 건네는 펭귄 친구를 보내보아요!",
    color: theme.colors.blue,
    situationImage: {
      src: "/images/image__situation-template07.png",
      width: 137,
      height: 176,
    },
    completedImage: {
      src: "/images/image__completed-template07.png",
      width: 280,
      height: 174,
    },
  },
  {
    situationId: 8,
    title: "꼬깃",
    description: "어떤 꼬깃 친구로도 내 마음을 표현할 수 없다면...😎",
    color: theme.colors.gray1,
    situationImage: {
      src: "/images/image__situation-template08.png",
      width: 121,
      height: 178,
    },
    completedImage: {
      src: "/images/image__completed-template08.png",
      width: 280,
      height: 174,
    },
  },
];

// TODO: 임시용 (감동받은 곰에 해당하는 가이드라인 데이터)
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

// TODO: 임시용
const tempRemindData: RemindDataType = [
  {
    id: 1,
    title: "시크릿 산타 공개하는 날",
    description:
      "디프만 시크릿 산타 공개하는 날.. 선물이랑 같이 꼬깃으로 편지 써서 줄 거다!!",
    created_at: "12월 03일",
    isAlarm: false,
  },
  {
    id: 2,
    title: "김현지 생일",
    description: "생일 축하합니다!",
    created_at: "12월 08일",
    isAlarm: false,
  },
  {
    id: 3,
    title: "크리스마스니까요..",
    description: "메리 크리스마스~",
    created_at: "12월 24일",
    isAlarm: false,
  },
  {
    id: 4,
    title: "새해 인사",
    description: "새해 복 많이 받으세요~!",
    created_at: "12월 24일",
    isAlarm: true,
  },
  {
    id: 5,
    title: "12월 31일 마지막 날",
    description: "제야의 종소리~",
    created_at: "12월 31일",
    isAlarm: true,
  },
];

// TODO: 임시용
const tempKakaoFriendsList: KakaoFriendsListType = {
  data: {
    friends: [
      {
        id: 1,
        profile_img: "",
        kakao_friend_name: "김가은",
        kakao_uuid: "",
        created_at: new Date().getTime(),
        updated_at: new Date().getTime(),
      },
      {
        id: 2,
        profile_img: "",
        kakao_friend_name: "김나영",
        kakao_uuid: "",
        created_at: new Date().getTime(),
        updated_at: new Date().getTime(),
      },
      {
        id: 3,
        profile_img: "",
        kakao_friend_name: "김동규",
        kakao_uuid: "",
        created_at: new Date().getTime(),
        updated_at: new Date().getTime(),
      },
      {
        id: 4,
        profile_img: "",
        kakao_friend_name: "김문규",
        kakao_uuid: "",
        created_at: new Date().getTime(),
        updated_at: new Date().getTime(),
      },
      {
        id: 5,
        profile_img: "",
        kakao_friend_name: "김민수",
        kakao_uuid: "",
        created_at: new Date().getTime(),
        updated_at: new Date().getTime(),
      },
      {
        id: 6,
        profile_img: "",
        kakao_friend_name: "김혜진",
        kakao_uuid: "",
        created_at: new Date().getTime(),
        updated_at: new Date().getTime(),
      },
      {
        id: 7,
        profile_img: "",
        kakao_friend_name: "유희수",
        kakao_uuid: "",
        created_at: new Date().getTime(),
        updated_at: new Date().getTime(),
      },
      {
        id: 8,
        profile_img: "",
        kakao_friend_name: "정성훈",
        kakao_uuid: "",
        created_at: new Date().getTime(),
        updated_at: new Date().getTime(),
      },
      {
        id: 9,
        profile_img: "",
        kakao_friend_name: "정지원",
        kakao_uuid: "",
        created_at: new Date().getTime(),
        updated_at: new Date().getTime(),
      },
      {
        id: 10,
        profile_img: "",
        kakao_friend_name: "최영광",
        kakao_uuid: "",
        created_at: new Date().getTime(),
        updated_at: new Date().getTime(),
      },
      {
        id: 11,
        profile_img: "",
        kakao_friend_name: "홍서희",
        kakao_uuid: "",
        created_at: new Date().getTime(),
        updated_at: new Date().getTime(),
      },
    ],
  },
};

export {
  situationTemplatesData,
  tempGuidelineData,
  tempRemindData,
  tempKakaoFriendsList,
};
