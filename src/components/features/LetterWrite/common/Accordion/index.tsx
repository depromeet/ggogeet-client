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
          <button onClick={() => onClickMemoId(memo.id)}>
            <div>
              {memo.isAlarm && (
                <Image
                  src="/Icons/icon__accordion-bell.svg"
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
                src="/Icons/icon__accordion-chevron-down.svg"
                alt="아코디언 화살표"
                width={12}
                height={12}
              />
            </div>
          </button>
          {clickedMemoId === memo.id && <p>{memo.description}</p>}
        </li>
      ))}
    </S.LetterWriteAccordionWrapper>
  );
};

export default Accordion;
