import BackButton from "@/src/components/common/Buttons/BackButton";
import BottomButton from "@/src/components/common/Buttons/BottomButton";
import InputDefault, { InputClear } from "@/src/components/common/Input";
import TopNavigation from "@/src/components/common/TopNavigation";
import { Header1, Header5 } from "@/src/styles/commons";
import styled from "@emotion/styled";

const Layout = styled.div`
  padding: 12px 16px;
  height: 100vh;
`;

const CancelButton = styled.button`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray4};
  ${Header5}
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.gray5};
  padding: 0 0 30px 0;
  ${Header1}
`;

const BottomButtonsContainer = styled.div`
  min-height: 100%;
`;

const LetterStorageWhoPage = () => {
  const onClear = () => {}; // 임시 함수

  return (
    <>
      <TopNavigation
        leftElem={<BackButton />}
        rightElem={<CancelButton>취소</CancelButton>}
      />

      <Layout>
        <Title>누구에게 받으셨나요?</Title>
        <InputClear onClear={onClear} placeholder="이름을 입력해주세요" />

        {/* <BottomButton name="꼬깃 친구 목록에서 찾기" isRound />
        <BottomButton name="다음" isRound /> */}
      </Layout>
    </>
  );
};

export default LetterStorageWhoPage;
