import Button from "@/src/components/common/Buttons/Button";
import Checkbox from "@/src/components/common/Buttons/Checkbox";
import InputDefault from "@/src/components/common/Input";
import { guidelineBasicData } from "@/src/data/LetterWrite";
import type {
  guidelineBasicDataType,
  TemplateType,
} from "@/src/data/LetterWrite/type";
import {
  letterWriteGuidelineState,
  letterWriteInputState,
} from "@/src/store/LetterWrite";
import Image from "next/image";
import { MouseEvent, TouchEvent, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
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
  const [isNewGuidelinePublicChecked, setIsNewGuidelinePublicChecked] =
    useState<boolean>(true);
  const onClickGuideline = (text: string) => {
    setLetterWriteGuidelineState(text);
    onClose("Guideline");
  };
  const [currentGuidelineData, setCurrentGuidelineData] =
    useState<guidelineBasicDataType>(guidelineBasicData);
  const onAddNewGuideline = () => {
    setCurrentGuidelineData((prev) => [
      {
        type: letterWriteInputObjectState.situation as TemplateType,
        isCustom: true,
        value: newGuidelineText,
      },
      ...prev,
    ]);
    setIsOpenAddGuideline(false);
    setNewGuidelineText("");
  };
  const onDeleteCustomGuideline = (
    event: MouseEvent<HTMLImageElement> | TouchEvent<HTMLImageElement>,
    customGuidelineText: string
  ) => {
    event.stopPropagation();
    setCurrentGuidelineData((prev) =>
      prev.filter((data) => data.value !== customGuidelineText)
    );
  };
  return (
    <>
      {isOpenAddGuideline ? (
        <S.GuidelineAddWrapper>
          <div>
            <strong>나만의 문장 추가</strong>
            <Image
              src="/Icons/icon__guideline-close--white.svg"
              alt="나만의 문장 추가 닫기"
              width={24}
              height={24}
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
              maxLength={20}
              placeholder="편지 쓸 때 참고할 문장을 추가해 보세요."
              tail={
                <Button name="추가" size="lg" onClick={onAddNewGuideline} />
              }
            />
            <div>
              <Image
                src="/Icons/icon__guideline-tag.svg"
                alt="가이드라인 태그 - 감동받은 곰"
                width={83}
                height={22}
              />
              <div>
                <Checkbox
                  id="new-guideline-public-check"
                  isChecked={isNewGuidelinePublicChecked}
                  onChange={() => {
                    setIsNewGuidelinePublicChecked((prev) => !prev);
                  }}
                />
                <label htmlFor="new-guideline-public-check">전체 공개</label>
              </div>
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
        <S.GuidelineMainWrapper>
          <div>
            <strong>꼬깃 가이드</strong>
            <span>편지에 쓰고 싶은 가이드 문장을 선택해 보세요.</span>
          </div>
          <ul>
            {currentGuidelineData.map((data) => (
              <li key={data.value}>
                <Button
                  name={data.value}
                  size="lg"
                  rightImg={
                    data.isCustom && (
                      <Image
                        src="/Icons/icon__guideline-close--gray.svg"
                        alt="커스텀 가이드라인 문장 삭제"
                        width={16}
                        height={16}
                        onClick={(event) =>
                          onDeleteCustomGuideline(event, data.value)
                        }
                      />
                    )
                  }
                  onClick={() => onClickGuideline(data.value)}
                />
              </li>
            ))}
          </ul>
          <div>
            <Button
              name="나만의 문장 추가하기"
              size="lg"
              leftImg={
                <Image
                  src="/Icons/icon__guideline-plus.svg"
                  alt="가이드라인 나만의 문장 추가하기"
                  width={16}
                  height={16}
                />
              }
              outline={true}
              onClick={() => {
                if (
                  currentGuidelineData.filter((data) => data.isCustom).length <
                  5
                ) {
                  setIsOpenAddGuideline(true);
                }
              }}
            />
          </div>
        </S.GuidelineMainWrapper>
      )}
    </>
  );
};

export default Guideline;
