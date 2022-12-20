import * as S from "./styled";

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  isChecked: boolean;
  isRound?: boolean;
}

export default function Checkbox({
  isChecked,
  isRound = false,
  ...args
}: Props) {
  return (
    <S.CheckboxWrapper isRound={isRound} isChecked={isChecked}>
      <input type="checkbox" checked={isChecked} {...args} />
    </S.CheckboxWrapper>
  );
}
