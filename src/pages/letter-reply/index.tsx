import TopNavigation from "@/src/components/common/TopNavigation";
import { NavBack } from "@/src/components/common/TopNavigation/Atoms";
import { Body4, Caption1, Display1 } from "@/src/styles/commons";
import styled from "@emotion/styled";

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
  const letterColor = "beige"; // 임시 컬러
  const date = "2022.12.15"; // 임시 날짜
  const sender = "김가은"; // 임시 작성자
  const content =
    "지원언니! 언니의 스물 여섯 번째 생일을 진심으로 축하해🥳 오늘 하루 맛있는 것도 많이 먹고 좋은 사람들과 즐거운 시간 보내! 언니랑 디프만에서 만나게 되어 너무 좋아.<3 그래도 오늘 생일이니까 작업은 조금만 하고 행복 시간들만 보내자! 아, 그리고 저번에 언니가 알려준 마라탕 집이랑 빵이 맛있었던 그 카페.. 너무 좋았었어🥹💦 나랑 나영언니랑 다음에 또 가자 또 !! 여튼 언니 생일날 모든 순간들에 행복이 가득하길 바랄게🍀 luv ya-!"; // 임시 편지 내용

  return (
    <Layout>
      <TopNavigation leftElem={<NavBack color="white" />} />

      <MainLayout>
        <AnimalImageWrapper></AnimalImageWrapper>

        <LetterMainLayout>
          <Content>{content}</Content>
        </LetterMainLayout>

        <LetterBottomLayout color={letterColor}>
          <Date>{date}</Date>
          <SenderContainer>
            <From>FROM</From>
            <Sender>{sender}</Sender>
          </SenderContainer>
        </LetterBottomLayout>
      </MainLayout>
    </Layout>
  );
};

export default LetterReplyPage;
