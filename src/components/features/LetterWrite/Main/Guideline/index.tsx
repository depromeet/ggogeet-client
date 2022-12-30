import Button from "@/src/components/common/Buttons/Button";
// import Checkbox from "@/src/components/common/Buttons/Checkbox";
import InputDefault from "@/src/components/common/Input";
import { tempGuidelineData } from "@/src/data/LetterWrite";

import {
  letterWriteGuidelineState,
  letterWriteInputState,
} from "@/src/store/LetterWrite";
import { SituationGuidelineSentenceType } from "@/src/types/Letter";
import Image from "next/image";
import { MouseEvent, TouchEvent, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import * as S from "../styled";

interface GuidelineProps {
  onClose: (type: "Guideline" | "Remind") => void;
}

// TODO: 앞에서 선택한 situation에 따른 가이드 문장 list API 호출
const Guideline = ({ onClose }: GuidelineProps) => {
  const letterWriteInputObjectState = useRecoilValue(letterWriteInputState);
  const setLetterWriteGuidelineState = useSetRecoilState(
    letterWriteGuidelineState
  );
  const [isOpenAddGuideline, setIsOpenAddGuideline] = useState<boolean>(false);
  const [newGuidelineText, setNewGuidelineText] = useState<string>("");
  // const [isNewGuidelinePublicChecked, setIsNewGuidelinePublicChecked] =
  //   useState<boolean>(true);
  const onClickGuideline = (text: string) => {
    setLetterWriteGuidelineState(text);
    onClose("Guideline");
  };
  const [currentGuidelineData, setCurrentGuidelineData] =
    useState<SituationGuidelineSentenceType>(tempGuidelineData);
  const onAddNewGuideline = () => {
    // TODO: Enter key
    if (newGuidelineText.length >= 1 && newGuidelineText.length <= 20) {
      setCurrentGuidelineData((prev) => ({
        ...prev,
        userSentence: {
          situation_id: 2,
          sentence: [
            {
              id:
                Math.max(
                  ...prev.userSentence.sentence.map((sen) => sen.id),
                  0
                ) + 1,
              content: newGuidelineText,
            },
            ...prev.userSentence.sentence,
          ],
        },
      }));
      setIsOpenAddGuideline(false);
      setNewGuidelineText("");
    }
  };
  const onDeleteCustomGuideline = (
    event: MouseEvent<HTMLImageElement> | TouchEvent<HTMLImageElement>,
    id: number
  ) => {
    event.stopPropagation();
    setCurrentGuidelineData((prev) => ({
      ...prev,
      userSentence: {
        situation_id: 2,
        sentence: prev.userSentence.sentence.filter((data) => data.id !== id),
      },
    }));
  };
  return (
    <>
      {isOpenAddGuideline ? (
        <S.GuidelineAddWrapper>
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
              onChange={(event) => {
                const { value } = event.currentTarget;
                setNewGuidelineText(value);
              }}
              minLength={1}
              maxLength={20}
              placeholder="편지 쓸 때 참고할 문장을 추가해 보세요."
              tail={
                <Button name="추가" size="lg" onClick={onAddNewGuideline} />
              }
            />
            <div>
              {/* TODO: 상황 선택 find 한 것 태그 표시 */}
              <Image
                src="/icons/icon__guideline-tag.svg"
                alt="가이드라인 태그 - 감동받은 곰"
                width={83}
                height={22}
              />
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
            <li>※ 공백 포함 20자 이내</li>
            <li>
              ※ 전체 공개 시 작성한 문장이 다른 꼬깃 유저들에게 공개됩니다.
            </li>
          </ul>
        </S.GuidelineAddWrapper>
      ) : (
        <S.GuidelineMainWrapper
          isListHeightChanged={
            currentGuidelineData.userSentence.sentence.length >= 5
          }
        >
          <S.BottomSheetHeader>
            <strong>꼬깃 가이드</strong>
            <span>편지에 쓰고 싶은 가이드 문장을 선택해 보세요.</span>
          </S.BottomSheetHeader>
          <ul>
            {currentGuidelineData.userSentence.sentence.map((data) => (
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
            {currentGuidelineData.guideSentence.sentence.map((data) => (
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
            isShow={currentGuidelineData.userSentence.sentence.length < 5}
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
                if (currentGuidelineData.userSentence.sentence.length < 5) {
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
