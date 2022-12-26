import TopNavigation from "@/src/components/common/TopNavigation";
import { NavBack } from "@/src/components/common/TopNavigation/atoms";
import AddNavigationBar from "@/src/components/features/letterStorage/add/AddNavigationBar";
import { Display2 } from "@/src/styles/commons";
import styled from "@emotion/styled";

const Layout = styled.div`
  background-color: ${({ theme }) => theme.colors.navy};
  height: 100vh;
`;

const MainLayout = styled.div`
  display: flex;
  justify-content: center;
`;

const TopNavigationTitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${Display2}
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
      </MainLayout>
    </Layout>
  );
};

export default LetterStorageAddPage;
