import { situationTemplatesData } from "@/src/data/LetterWrite";
import { letterWriteInputState } from "@/src/store/LetterWrite";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { useBottomButton } from "../Hooks";
import * as S from "../styled";

const CompletedForm = () => {
  const [letterWriteInputObjectState, setLetterWriteInputObjectState] =
    useRecoilState(letterWriteInputState);
  const customClickHandler = () => {};
  const bottomButton = useBottomButton({
    text: "꼬깃 작성 완료!",
    customClickHandler,
  });
  const {
    situation: { templateUrl, title, color },
    createdAt,
  } = letterWriteInputObjectState;
  return (
    <>
      <S.LetterWriteH1>
        커버에 적힐 한 마디를
        <br />
        적어주세요!
      </S.LetterWriteH1>
      <S.LetterWriteCompletedLastSentence color={color}>
        {/* <Image src={templateUrl} alt={title} width={280} height={174} /> */}
        <div className="last-sentence-input"></div>
        <div className="sender-name-date"></div>
      </S.LetterWriteCompletedLastSentence>
      {bottomButton}
    </>
  );
};

export default CompletedForm;
