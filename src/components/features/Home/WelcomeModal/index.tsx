import Image from "next/image";
import Modal from "@/src/components/common/Modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./styled";

const welcomeModalContents: {
  description: string;
  width: number;
  height: number;
}[] = [
  {
    description: "반가워요!\n꼬깃에 오신 것을 환영해요.",
    width: 64,
    height: 64,
  },
  {
    description: "어떤 내용을 써야할지 망설여질 때\n꼬깃 가이드로 도와줄게요.",
    width: 240,
    height: 155,
  },
  {
    description:
      "전하려는 마음을 메모해뒀다가\n잊지 않고 꼬깃을 보낼 수 있어요.",
    width: 240,
    height: 155,
  },
  {
    description: "여기저기 흩어져 있던\n마음들을 차곡차곡 보관할 수 있어요.",
    width: 240,
    height: 151,
  },
  {
    description: "꼬깃과 함께 편지를 써서\n소중한 마음을 주고받아볼까요?",
    width: 186,
    height: 62,
  },
];

interface Props {
  onClose: () => void;
}

export default function WelcomeModal({ onClose }: Props) {
  return (
    <Modal onClose={onClose}>
      <S.SliderWrapper>
        <Slider arrows={false} autoplay autoplaySpeed={8000} dots>
          {welcomeModalContents.map(({ description, ...args }, idx) => (
            <S.WelcomeModalContents key={idx}>
              <Image
                src={`/gifs/ggogeet_welcome${idx + 1}.gif`}
                alt=""
                {...args}
              />
              <p>{description}</p>
            </S.WelcomeModalContents>
          ))}
        </Slider>
      </S.SliderWrapper>
    </Modal>
  );
}
