import * as S from './styled';

type Props = {
  content: string;
  disabled?: boolean;
  isDark?: boolean;
  isSelected?: boolean;
  onClick?: () => void;
};

export default function TagButton({
  content,
  disabled = false,
  isDark = false,
  isSelected = false,
  onClick,
}: Props) {
  return (
    <S.TagButtonWrapper
      type='button'
      disabled={disabled}
      isDark={isDark}
      isSelected={isSelected}
      onClick={onClick}
    >
      {content}
      <S.SelectedTagBorder
        disabled={disabled}
        isDark={isDark}
        isSelected={isSelected}
      />
    </S.TagButtonWrapper>
  );
}
