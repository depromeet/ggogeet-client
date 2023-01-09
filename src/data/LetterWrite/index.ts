import theme from "@/src/styles/theme";
import type { SituationTemplateDataType } from "./type";

export const situationTemplatesData: SituationTemplateDataType = [
  {
    situationId: 1,
    title: "축하하는 고양이",
    description:
      "생일, 입학, 승진 등 축하할 일이 있을 때는 귀여운 고양이 친구를 건네보세요!",
    color: theme.colors.yellow,
    situationImage: {
      src: "/images/image__situation-template01.svg",
      width: 256,
      height: 213,
    },
    completedImage: {
      src: "/images/image__completed-template01.svg",
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
      src: "/images/image__situation-template02.svg",
      width: 256,
      height: 213,
    },
    completedImage: {
      src: "/images/image__completed-template02.svg",
      width: 280,
      height: 174,
    },
  },
  {
    situationId: 3,
    title: "사랑이 넘치는 토끼",
    description:
      "애정을 표현하고 싶을 때는 사랑스러운 토끼 친구의 도움을 받아보세요.",
    color: theme.colors.red,
    situationImage: {
      src: "/images/image__situation-template03.svg",
      width: 256,
      height: 213,
    },
    completedImage: {
      src: "/images/image__completed-template03.svg",
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
      src: "/images/image__situation-template04.svg",
      width: 256,
      height: 213,
    },
    completedImage: {
      src: "/images/image__completed-template04.svg",
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
      src: "/images/image__situation-template05.svg",
      width: 256,
      height: 213,
    },
    completedImage: {
      src: "/images/image__completed-template05.svg",
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
      src: "/images/image__situation-template06.svg",
      width: 256,
      height: 213,
    },
    completedImage: {
      src: "/images/image__completed-template06.svg",
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
      src: "/images/image__situation-template07.svg",
      width: 256,
      height: 213,
    },
    completedImage: {
      src: "/images/image__completed-template07.svg",
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
      src: "/images/image__situation-template08.svg",
      width: 256,
      height: 213,
    },
    completedImage: {
      src: "/images/image__completed-template08.svg",
      width: 280,
      height: 174,
    },
  },
];
