import * as S from "./styled";

interface Props {
  navigations: string[];
}

export default function LetterStorageTopNavigation({ navigations }: Props) {
  return (
    <>
      <S.NavigationLayout>{navigations.map((item) => item)}</S.NavigationLayout>
    </>
  );
}
