import Button from "@/src/components/common/Buttons/Button";
import InputDefault from "@/src/components/common/Input";
import { situationTemplatesData } from "@/src/data/LetterWrite";
import { letterWriteInputState } from "@/src/store/LetterWrite";
import { getDateTimeFormat } from "@/src/utils/date";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { useTextLengthPixel } from "../Hooks";
import * as S from "../styled";

const CompletedForm02 = () => {
  const [letterWriteInputObjectState, setLetterWriteInputObjectState] =
    useRecoilState(letterWriteInputState);
  const { situationId, lastSentence } = letterWriteInputObjectState;
  const currentTextLengthPixel = useTextLengthPixel(lastSentence);
  const currentTemplate = situationTemplatesData.find(
    (template) => template.situationId === situationId
  );
  const onClickKakaoTalk = () => {
    // API: 카카오톡 보내기
  };
  return (
    <>
      <S.LetterWriteH1>
        진심이 담긴 꼬깃을 보내서
        <br />
        마음을 표현해보세요!
      </S.LetterWriteH1>
      {currentTemplate && (
        <S.LetterWriteCompletedLastSentenceOuterContainer>
          <S.LetterWriteCompletedLastSentence
            color={currentTemplate.color}
            calculatedInputTextWidth={currentTextLengthPixel}
            style={{
              transform: "rotate(-8deg) scale(0.75)",
            }}
          >
            <div className="completed-situation-image">
              <Image
                alt={currentTemplate.title}
                {...currentTemplate.completedImage}
              />
            </div>
            <div className="completed-bottom-container">
              <div className="last-sentence-input">
                <span>&ldquo;</span>
                <InputDefault defaultValue={lastSentence} disabled />
                <span>&rdquo;</span>
              </div>
              <div className="sender-name-date">
                <div className="sender-name">
                  <span>FROM</span>
                  <strong>유저 이름</strong>
                </div>
                <time className="sender-date">
                  {getDateTimeFormat(new Date().getTime())}
                </time>
              </div>
            </div>
          </S.LetterWriteCompletedLastSentence>
          <span>꼬깃 보낼 준비 완료!</span>
        </S.LetterWriteCompletedLastSentenceOuterContainer>
      )}
      <S.BottomButtonContainer
        bgColor="#FBE44D"
        gap={8}
        fontWeight={600}
        fontColor="#3b1f1e"
      >
        <Button
          leftImg={
            <Image
              src="/icons/icon__kakao-talk.png"
              alt="카카오톡"
              width={20}
              height={16}
            />
          }
          name="카카오톡으로 보내기"
          size="xl"
          onClick={onClickKakaoTalk}
        />
      </S.BottomButtonContainer>
    </>
  );
};

export default CompletedForm02;
