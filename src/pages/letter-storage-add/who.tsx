import BackButton from "@/src/components/common/Buttons/BackButton";
import BottomButton from "@/src/components/common/Buttons/BottomButton";
import { InputClear } from "@/src/components/common/Input";
import TopNavigation from "@/src/components/common/TopNavigation";
import { Body1, Header1, Header5 } from "@/src/styles/commons";
import styled from "@emotion/styled";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
  flex: 1;
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
  padding: 0 16px 40px 16px;
`;

const NameInput = styled(InputClear)`
  ${Body1}
`;

const FirstBottomButton = styled(BottomButton)`
  border: 1px solid ${({ theme }) => theme.colors.gray5};
  margin: 0 0 8px 0;
  ${Header5}
`;

const SecondBottomButton = styled(BottomButton)`
  background-color: ${({ theme }) => theme.colors.gray2};
  color: ${({ theme }) => theme.colors.white};
  ${Header5}
`;

const LetterStorageWhoPage = () => {
  const onClear = () => {}; // 임시 함수

  return (
    <Layout>
      <TopNavigation
        leftElem={<BackButton />}
        rightElem={<CancelButton>취소</CancelButton>}
      />

      <MainLayout>
        <Title>누구에게 받으셨나요?</Title>
        <NameInput onClear={onClear} placeholder="이름을 입력해주세요" />
      </MainLayout>

      <BottomButtonsContainer>
        <FirstBottomButton name="꼬깃 친구 목록에서 찾기" isRound />
        <SecondBottomButton name="다음" isRound />
      </BottomButtonsContainer>
    </Layout>
  );
};

export default LetterStorageWhoPage;
