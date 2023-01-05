import TopNavigation from "@/src/components/common/TopNavigation";
import { NavBack } from "@/src/components/common/TopNavigation/Atoms";
import styled from "@emotion/styled";

const Layout = styled.div`
  background-color: ${({ theme }) => theme.colors.navy};
  height: 100vh;
`;

const LetterLayout = styled.div``;

const LetterStorageReplyPage = () => {
  return (
    <Layout>
      <TopNavigation leftElem={<NavBack color="white" />} />
    </Layout>
  );
};

export default LetterStorageReplyPage;
