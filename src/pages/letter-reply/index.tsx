import { getReceivedLetterDetail } from "@/src/apis/letter";
import TopNavigation from "@/src/components/common/TopNavigation";
import { NavBack } from "@/src/components/common/TopNavigation/Atoms";
import { situationTemplatesData } from "@/src/data/LetterWrite";
import { queryKeys } from "@/src/react-query/constants";
import { Body4, Caption1, Display1 } from "@/src/styles/commons";
import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";

const Layout = styled.div`
  background-color: ${({ theme }) => theme.colors.navy};
  height: 100vh;
  position: relative;
`;

const MainLayout = styled.div`
  padding: 65px 20px 0 20px;
`;

const AnimalImageWrapper = styled.div`
  position: absolute;
  background-color: black; // 임시
  width: 206px;
  height: 99px;
  left: 36px;
  top: 47px;
`;

const LetterMainLayout = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px 8px 0 0;
  padding: 36px 20px 28px 20px;
`;

const Content = styled.p`
  color: ${({ theme }) => theme.colors.navy};
  font-size: 14px;
  line-height: 170%;
`;

interface LetterBottomLayoutProps {
  color: string;
}

const LetterBottomLayout = styled.div<LetterBottomLayoutProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ color }) => color};
  border-radius: 0 0 8px 8px;
  padding: 12px 20px;
`;

const Date = styled.p`
  color: ${({ theme }) => theme.colors.navy30};
  ${Caption1};
`;

const SenderContainer = styled.div`
  display: flex;
`;

const From = styled.p`
  color: ${({ theme }) => theme.colors.navy50};
  margin: 0 4px 0 0;

  ${Body4}
`;

const Sender = styled.p`
  color: ${({ theme }) => theme.colors.gray5};

  ${Display1}
`;

const LetterReplyPage = () => {
  const { data } = useQuery([queryKeys.getReceivedLetterDetail], () =>
    getReceivedLetterDetail(1)
  );

  const situationColor =
    situationTemplatesData[data?.situationId ? data.situationId - 1 : 0].color;

  return (
    <Layout>
      <TopNavigation leftElem={<NavBack color="white" />} />

      <MainLayout>
        <AnimalImageWrapper></AnimalImageWrapper>

        <LetterMainLayout>
          <Content>{data?.content}</Content>
        </LetterMainLayout>

        <LetterBottomLayout color={situationColor}>
          <Date>{data?.receivedAt.split(" ")[0].replace(/-/g, ".")}</Date>
          <SenderContainer>
            <From>FROM</From>
            <Sender>{data?.senderNickname}</Sender>
          </SenderContainer>
        </LetterBottomLayout>
      </MainLayout>
    </Layout>
  );
};

export default LetterReplyPage;
