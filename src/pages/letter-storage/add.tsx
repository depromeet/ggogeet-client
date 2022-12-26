import TopNavigation from "@/src/components/common/TopNavigation";
import { NavBack } from "@/src/components/common/TopNavigation/atoms";
import { Display2 } from "@/src/styles/commons";
import styled from "@emotion/styled";

const Layout = styled.div`
  background-color: ${({ theme }) => theme.colors.navy};
  height: 100vh;
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
    </Layout>
  );
};

export default LetterStorageAddPage;
