import {
  deleteUserGuideSentence,
  getGuideSentenceBySituationId,
  postUserGuideSentence,
} from "@/src/apis/sentence";
import Button from "@/src/components/common/Buttons/Button";
// import Checkbox from "@/src/components/common/Buttons/Checkbox";
import InputDefault from "@/src/components/common/Input";
import { situationTemplatesData } from "@/src/data/LetterWrite";
import { queryKeys } from "@/src/react-query/constants";
import {
  letterWriteGuidelineState,
  letterWriteInputState,
} from "@/src/store/LetterWrite";
import { SituationIdType } from "@/src/types/sentence";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import {
  ChangeEvent,
  FormEvent,
  MouseEvent,
  TouchEvent,
  useState,
} from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import SituationTag from "../../Common/SituationTag";
import * as S from "../styled";

interface GuidelineProps {
  onClose: (type: "Guideline" | "Remind") => void;
}

// TODO: 앞에서 선택한 situation에 따른 가이드 문장 list API 호출
const Guideline = ({ onClose }: GuidelineProps) => {
  const setLetterWriteGuidelineState = useSetRecoilState(
    letterWriteGuidelineState
  );
  const [isOpenAddGuideline, setIsOpenAddGuideline] = useState<boolean>(false);
  const [newGuidelineText, setNewGuidelineText] = useState<string>("");
  // const [isNewGuidelinePublicChecked, setIsNewGuidelinePublicChecked] =
  //   useState<boolean>(true);
  const letterWriteInputObjectState = useRecoilValue(letterWriteInputState);
  const { situationId } = letterWriteInputObjectState;
  const currentTemplate = situationTemplatesData.find(
    (template) => template.situationId === situationId
  );
  const onClickGuideline = (text: string) => {
    setLetterWriteGuidelineState(text);
    onClose("Guideline");
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newGuidelineText.length >= 1 && newGuidelineText.length <= 20) {
      const payload = {
        content: newGuidelineText,
        isShared: false,
        situationId: situationId as SituationIdType,
      };
      postUserGuideSentenceMutation.mutate(payload);
      setIsOpenAddGuideline(false);
      setNewGuidelineText("");
    }
  };
  const onDeleteCustomGuideline = (
    event: MouseEvent<HTMLImageElement> | TouchEvent<HTMLImageElement>,
    id: number
  ) => {
    event.stopPropagation();
    deleteUserGuideSentenceMutation.mutate(id);
  };

  const queryClient = useQueryClient();

  const { data, isSuccess } = useQuery(
    [queryKeys.guideSentence],
    () => getGuideSentenceBySituationId(situationId as SituationIdType),
    {
      enabled: !!situationId,
    }
  );

  const postUserGuideSentenceMutation = useMutation({
    mutationKey: [queryKeys.postUserGuideSentence],
    mutationFn: postUserGuideSentence,
    onSuccess: () => {
      queryClient.invalidateQueries(["guideSentence"]);
    },
  });

  const deleteUserGuideSentenceMutation = useMutation({
    mutationKey: [queryKeys.deleteUserGuideSentence],
    mutationFn: deleteUserGuideSentence,
    onSuccess: () => {
      queryClient.invalidateQueries(["guideSentence"]);
    },
  });

  if (!isSuccess) return <></>;

  return (
    <>
      {isOpenAddGuideline ? (
        <S.GuidelineAddWrapper onSubmit={onSubmit}>
          <div>
            <strong>나만의 문장 추가</strong>
            <Image
              src="/icons/icon__guideline-close--white.svg"
              alt="나만의 문장 추가 닫기"
              width={16}
              height={16}
              onClick={() => {
                setIsOpenAddGuideline(false);
              }}
            />
          </div>
          <S.GuidelineAddInputWrapper
            currentTextLength={newGuidelineText.length}
          >
            <InputDefault
              styleOption="fill"
              autoFocus
              value={newGuidelineText}
              onInput={(event: ChangeEvent<HTMLInputElement>) => {
                const { value } = event.currentTarget;
                setNewGuidelineText(value);
              }}
              minLength={1}
              maxLength={20}
              placeholder="편지 쓸 때 참고할 문장을 추가해 보세요."
              tail={<Button name="추가" size="lg" />}
            />
            <div>
              {currentTemplate && (
                <SituationTag
                  templateType={currentTemplate.title}
                  height={22}
                />
              )}
              {/* <div>
                <Checkbox
                  id="new-guideline-public-check"
                  checked={isNewGuidelinePublicChecked}
                  onChange={() => {
                    setIsNewGuidelinePublicChecked((prev) => !prev);
                  }}
                />
                <label htmlFor="new-guideline-public-check">전체 공개</label>
              </div> */}
            </div>
          </S.GuidelineAddInputWrapper>
          <ul>
            <li>※ 공백 포함 20자 이내로 작성해 주세요.</li>
            {/* <li>
              ※ 전체 공개 시 작성한 문장이 다른 꼬깃 유저들에게 공개됩니다.
            </li> */}
          </ul>
        </S.GuidelineAddWrapper>
      ) : (
        <S.GuidelineMainWrapper
          isListHeightChanged={data.userSentence.length >= 5}
        >
          <S.BottomSheetHeader>
            <strong>꼬깃 가이드</strong>
            <span>편지에 쓰고 싶은 가이드 문장을 선택해 보세요.</span>
          </S.BottomSheetHeader>
          <ul>
            {data.userSentence.map((data) => (
              <li key={data.id}>
                <Button
                  name={data.content}
                  size="lg"
                  rightImg={
                    <Image
                      src="/icons/icon__guideline-close--gray.svg"
                      alt="커스텀 가이드라인 문장 삭제"
                      width={16}
                      height={16}
                      onClick={(event) =>
                        onDeleteCustomGuideline(event, data.id)
                      }
                    />
                  }
                  onClick={() => onClickGuideline(data.content)}
                />
              </li>
            ))}
            {data.guideSentence.map((data) => (
              <li key={data.id}>
                <Button
                  name={data.content}
                  size="lg"
                  onClick={() => onClickGuideline(data.content)}
                />
              </li>
            ))}
          </ul>
          <S.GuidelineMainBottomButtonWrapper
            isShow={data.userSentence.length < 5}
          >
            <Button
              name="나만의 문장 추가하기"
              size="lg"
              leftImg={
                <Image
                  src="/icons/icon__guideline-plus.svg"
                  alt="가이드라인 나만의 문장 추가하기"
                  width={16}
                  height={16}
                />
              }
              outline={true}
              onClick={() => {
                if (data.userSentence.length < 5) {
                  setIsOpenAddGuideline(true);
                }
              }}
            />
          </S.GuidelineMainBottomButtonWrapper>
        </S.GuidelineMainWrapper>
      )}
    </>
  );
};

export default Guideline;
