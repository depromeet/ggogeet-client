import { situationTemplatesData } from "@/src/data/LetterWrite";
import { letterWriteInputState } from "@/src/store/LetterWrite";
import { ReminderDataType } from "@/src/types/reminder";
import { getDateTimeFormat } from "@/src/utils/date";
import Image from "next/image";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import * as S from "../styled";

interface AccordionProps {
  data: ReminderDataType[];
}

const Accordion = ({ data }: AccordionProps) => {
  const [clickedMemoId, setClickedMemoId] = useState<number>(-1);
  const onClickMemoId = (id: number) => {
    if (clickedMemoId === id) {
      setClickedMemoId(-1);
    } else {
      setClickedMemoId(id);
    }
  };
  const letterWriteInputObjectState = useRecoilValue(letterWriteInputState);
  const { situationId } = letterWriteInputObjectState;
  const currentTemplate = situationTemplatesData.find(
    (template) => template.situationId === situationId
  );
  return (
    <S.LetterWriteAccordionWrapper>
      {data.map((memo) => (
        <li key={memo.id}>
          <S.AccordionHeader
            onClick={() => onClickMemoId(memo.id)}
            isClicked={clickedMemoId === memo.id}
          >
            <div>
              {memo.alertOn && (
                <Image
                  src="/icons/icon__accordion-bell.svg"
                  alt="아코디언 알림"
                  width={16}
                  height={16}
                />
              )}
              <span>{memo.title}</span>
            </div>
            <div>
              <span>
                {getDateTimeFormat(new Date(memo.eventAt).getTime())
                  .replace(/\s/g, "")
                  .slice(2)
                  .split(".")
                  .map((num) => num.toString().padStart(2, "0"))
                  .join(".")}
              </span>
              <Image
                src="/icons/icon__accordion-chevron-down.svg"
                alt="아코디언 화살표"
                width={12}
                height={12}
              />
            </div>
          </S.AccordionHeader>
          {clickedMemoId === memo.id && (
            <S.AccordionContents>
              <span>{currentTemplate?.title}</span>
              <p>{memo.content}</p>
            </S.AccordionContents>
          )}
        </li>
      ))}
    </S.LetterWriteAccordionWrapper>
  );
};

export default Accordion;
