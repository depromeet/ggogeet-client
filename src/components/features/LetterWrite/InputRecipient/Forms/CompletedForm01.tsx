import { postNewLetterCreate } from "@/src/apis/letter";
import InputDefault from "@/src/components/common/Input";
import { situationTemplatesData } from "@/src/data/LetterWrite";
import { queryKeys } from "@/src/react-query/constants";
import { letterWriteInputState } from "@/src/store/LetterWrite";
import { userState } from "@/src/store/users";
import { SituationIdType } from "@/src/types/sentence";
import { getDateTimeFormat } from "@/src/utils/date";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useBottomButton, useTextLengthPixel } from "../Hooks";
import { LetterCompletedProgress } from "../Loadings";
import * as S from "../styled";

interface CompletedFormProps {
  type: "Write" | "Store";
}

const CompletedForm = ({ type }: CompletedFormProps) => {
  const router = useRouter();
  const [letterWriteInputObjectState, setLetterWriteInputObjectState] =
    useRecoilState(letterWriteInputState);
  const userObjectState = useRecoilValue(userState);
  const { situationId, lastSentence, contents } = letterWriteInputObjectState;
  const currentTemplate = situationTemplatesData.find(
    (template) => template.situationId === situationId
  );
  const { name: senderName } = userObjectState;
  const [inputValue, setInputValue] = useState<string>(lastSentence);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isCompletedProgressShow, setIsCompletedProgressShow] =
    useState<boolean>(false);
  const currentTextLengthPixel = useTextLengthPixel(inputValue);

  const bottomButton = useBottomButton({
    text: type === "Write" ? "꼬깃 작성 완료!" : "저장하기",
    isDisabled: inputValue.length < 1 || inputValue.length > 20,
    customClickHandler: () => {},
  });
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (type === "Write") {
      const payload = {
        // TODO: 받는 사람 아이디, 닉네임
        receiverId: 123,
        receiverNickname: "",
        situationId: situationId as SituationIdType,
        title: inputValue,
        content: contents,
      };
      postCreateLetterMutation.mutate(payload);
      setIsCompletedProgressShow(true);
      setTimeout(() => {
        router.push("/letter-write?type=completed-02");
      }, 3000);
    } else {
      // TODO: 가은님) 외부 편지 저장하기 API + 꼬깃 보관함 이동하면서 토스트 메시지 추가
    }
  };

  useEffect(() => {
    if (inputValue.length > 0) {
      setLetterWriteInputObjectState((prev) => ({
        ...prev,
        lastSentence: inputValue,
      }));
    }
  }, [inputValue]);

  const postCreateLetterMutation = useMutation({
    mutationKey: [queryKeys.postCreateLetter],
    onMutate: postNewLetterCreate,
  });

  return (
    <>
      {isCompletedProgressShow ? (
        <LetterCompletedProgress />
      ) : (
        <form onSubmit={onSubmit}>
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
              <div className="completed-situation-image">
                <Image
                  alt={currentTemplate.title}
                  {...currentTemplate.completedImage}
                />
              </div>
              <div className="completed-bottom-container">
                <div className="last-sentence-input">
                  <span>&ldquo;</span>
                  <InputDefault
                    value={inputValue}
                    onInput={(event: ChangeEvent<HTMLInputElement>) => {
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
                    <strong>{senderName}</strong>
                  </div>
                  <time className="sender-date">
                    {getDateTimeFormat(new Date().getTime())}
                  </time>
                </div>
              </div>
            </S.LetterWriteCompletedLastSentence>
          )}
          {bottomButton}
        </form>
      )}
    </>
  );
};

export default CompletedForm;
