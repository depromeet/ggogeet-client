import { Dispatch, SetStateAction } from "react";
import * as S from "./styled";
interface Props {
  isText: boolean;
  setIsText: Dispatch<SetStateAction<boolean>>;
}
export default function AddNavigationBar({ isText, setIsText }: Props) {
  const onClickText = () => setIsText(true);
  const onClickImage = () => setIsText(false);

  return (
    <S.NavigationBarLayout>
      <S.Navigation isSelected={isText} onClick={onClickText}>
        텍스트로 추가
      </S.Navigation>
      <S.Navigation isSelected={!isText} onClick={onClickImage}>
        이미지로 추가
      </S.Navigation>
    </S.NavigationBarLayout>
  );
}
