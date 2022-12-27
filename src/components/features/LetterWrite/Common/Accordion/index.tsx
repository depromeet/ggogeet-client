import { RemindDataType } from "@/src/data/LetterWrite/type";
import Image from "next/image";
import { useState } from "react";
import * as S from "../styled";

interface AccordionProps {
  data: RemindDataType;
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
  return (
    <S.LetterWriteAccordionWrapper>
      {data.map((memo) => (
        <li key={memo.id}>
          <S.AccordionHeader
            onClick={() => onClickMemoId(memo.id)}
            isClicked={clickedMemoId === memo.id}
          >
            <div>
              {memo.isAlarm && (
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
              <span>{memo.created_at}</span>
              <Image
                src="/icons/icon__accordion-chevron-down.svg"
                alt="아코디언 화살표"
                width={12}
                height={12}
              />
            </div>
          </S.AccordionHeader>
          {clickedMemoId === memo.id && (
            <S.AccordionContents>{memo.description}</S.AccordionContents>
          )}
        </li>
      ))}
    </S.LetterWriteAccordionWrapper>
  );
};

export default Accordion;
