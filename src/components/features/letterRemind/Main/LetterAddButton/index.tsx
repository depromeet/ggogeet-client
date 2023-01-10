import * as S from "./styled";

interface Props {
  onClick: () => void;
}

export default function LetterAddButton({ ...props }: Props) {
  return <S.ButtonLayout {...props}>+</S.ButtonLayout>;
}
