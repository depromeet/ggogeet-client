import InputDefault from "@/src/components/common/Input";
import { situationTemplatesData } from "@/src/data/LetterWrite";
import { letterWriteInputState } from "@/src/store/LetterWrite";
import { getDateTimeFormat } from "@/src/utils/date";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { useBottomButton, useTextLengthPixel } from "../Hooks";
import * as S from "../styled";

const CompletedForm = () => {
  const [letterWriteInputObjectState, setLetterWriteInputObjectState] =
    useRecoilState(letterWriteInputState);
  const router = useRouter();
  const customClickHandler = () => {
    router.push("/letter-write?type=completed-02");
  };
  const bottomButton = useBottomButton({
    text: "꼬깃 작성 완료!",
    customClickHandler,
  });
  const {
    situation: { situationId },
    lastSentence,
  } = letterWriteInputObjectState;
  const currentTemplate = situationTemplatesData.find(
    (template) => template.situationId === situationId
  );
  const [inputValue, setInputValue] = useState<string>(lastSentence);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const currentTextLengthPixel = useTextLengthPixel(inputValue);

  useEffect(() => {
    if (inputValue.length > 0) {
      setLetterWriteInputObjectState((prev) => ({
        ...prev,
        lastSentence: inputValue,
      }));
    }
  }, [inputValue]);

  return (
    <>
      <S.LetterWriteH1>
        커버에 적힐 한 마디를
        <br />
        적어주세요!
      </S.LetterWriteH1>
      {currentTemplate && (
        <S.LetterWriteCompletedLastSentence
          color={currentTemplate.color}
          calculatedInputTextWidth={currentTextLengthPixel}
          isFocused={isFocused}
          inputValueLength={inputValue.length}
        >
          <Image alt={currentTemplate.title} {...currentTemplate.image} />
          <div className="completed-bottom-container">
            <div className="last-sentence-input">
              <span>&ldquo;</span>
              <InputDefault
                value={inputValue}
                onChange={(event) => {
                  setInputValue(event.target.value);
                }}
                placeholder="최대 20자까지 작성할 수 있어요"
                minLength={1}
                maxLength={20}
                onFocus={() => {
                  setIsFocused(true);
                }}
                onBlur={() => {
                  setIsFocused(false);
                }}
              />
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
      )}
      {bottomButton}
    </>
  );
};

export default CompletedForm;
