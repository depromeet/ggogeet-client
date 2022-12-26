import BottomButton from "@/src/components/common/Buttons/BottomButton";
import Textarea from "@/src/components/common/Textarea";
import TopNavigation from "@/src/components/common/TopNavigation";
import { NavBack } from "@/src/components/common/TopNavigation/atoms";
import AddNavigationBar from "@/src/components/features/letterStorage/add/AddNavigationBar";
import { Body4, Display2 } from "@/src/styles/commons";
import styled from "@emotion/styled";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.navy};
  height: 100vh;
`;

const TopNavigationTitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${Display2}
`;

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px 0 20px;
  flex: 1;
`;

const LetterAddTextAreaWrapper = styled.div`
  margin: 20px 0 0 0;
`;

const LetterAddTextArea = styled(Textarea)`
  height: 320px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const BottomLayout = styled.div`
  display: flex;
  padding: 20px;
`;

interface NextButtonProps {
  canClicked: boolean;
}

const NextButton = styled(BottomButton)<NextButtonProps>`
  background-color: ${({ theme }) => theme.colors.gray5};
  color: ${({ theme, canClicked }) =>
    canClicked ? theme.colors.white : theme.colors.gray3};
  border-radius: 2px;

  ${Body4}
`;

const LetterStorageAddPage = () => {
  return (
    <Layout>
      <TopNavigation
        title={<TopNavigationTitle>받은 편지 추가</TopNavigationTitle>}
        leftElem={<NavBack color="white" />}
      />

      <MainLayout>
        <AddNavigationBar selectedItem="텍스트로 추가" />
        <LetterAddTextAreaWrapper>
          <LetterAddTextArea />
        </LetterAddTextAreaWrapper>
      </MainLayout>

      <BottomLayout>
        <NextButton name="다음" canClicked={true} />
      </BottomLayout>
    </Layout>
  );
};

export default LetterStorageAddPage;
