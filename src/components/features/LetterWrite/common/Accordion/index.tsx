import { RemindDataType } from "@/src/data/LetterWrite/type";
import * as S from "../styled";

interface AccordionProps {
  data: RemindDataType;
}

const Accordion = ({ data }: AccordionProps) => {
  return (
    <S.LetterWriteAccordionWrapper>
      {data.map((memo) => (
        <li key={memo.id}></li>
      ))}
    </S.LetterWriteAccordionWrapper>
  );
};

export default Accordion;
