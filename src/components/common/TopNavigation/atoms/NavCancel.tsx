import { useRouter } from 'next/router';
import * as S from './styled';

const NavCancel = () => {
  const router = useRouter();
  return (
    <S.NavButton
      onClick={() => {
        router.push('/');
      }}
    >
      <S.NavCancelText>취소</S.NavCancelText>
    </S.NavButton>
  );
};

export default NavCancel;
