import { useRouter } from 'next/router';
import * as S from './styled';

const NavCancel = () => {
  const router = useRouter();
  return (
    <S.NavItemContainer
      onClick={() => {
        router.back();
      }}
    >
      <S.NavCancelText>취소</S.NavCancelText>
    </S.NavItemContainer>
  );
};

export default NavCancel;
