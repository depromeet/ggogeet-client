import {
  getReceivedLetterDetail,
  getSentLetterDetail,
} from "@/src/apis/letter";
import TopNavigation from "@/src/components/common/TopNavigation";
import { NavBack } from "@/src/components/common/TopNavigation/Atoms";
import { situationTemplatesData } from "@/src/data/LetterWrite";
import { queryKeys } from "@/src/react-query/constants";
import { Body4, Caption1, Display1 } from "@/src/styles/commons";
import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import Image from "next/image";
import dayjs from "dayjs";
import { getCookie } from "cookies-next";
import { COOKIE_ACCESS_TOKEN_KEY } from "@/src/constants/keys";
import { useToast } from "@/src/hooks/useToast";

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
  width: 206px;
  height: 99px;
  left: -20px;
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

const LetterStorageReplyPage = ({ letterId }: any) => {
  const token = getCookie(COOKIE_ACCESS_TOKEN_KEY);
  const router = useRouter();
  const { setToast } = useToast();
  const filter = router.query.filter || "receive";

  if (!token) {
    setToast({
      status: "error",
      content: "로그인 후 꼬깃보관함을 확인해 주세요!",
    });
    router.push("/");
  }

  const { data } = useQuery(
    [queryKeys.getReceivedLetterDetail, letterId],
    () => {
      if (filter === "sent") return getSentLetterDetail(+letterId);
      else return getReceivedLetterDetail(+letterId);
    }
  );

  const situationColor =
    situationTemplatesData[data?.situationId ? data?.situationId - 1 : 0].color;

  return (
    <Layout>
      <TopNavigation leftElem={<NavBack color="white" isStorage />} />

      {data && (
        <MainLayout>
          <AnimalImageWrapper>
            <Image
              src={
                situationTemplatesData[data ? data?.situationId : 0]
                  .completedImage.src
              }
              alt="색종이이미지"
              width={206}
              height={99}
              priority
            />
          </AnimalImageWrapper>

          <LetterMainLayout>
            <Content
              dangerouslySetInnerHTML={{ __html: data?.content ?? "" }}
            />
          </LetterMainLayout>

          <LetterBottomLayout color={situationColor}>
            <Date>{dayjs(data?.receivedAt).format("YYYY.MM.DD")}</Date>
            <SenderContainer>
              <From>{filter === "sent" ? "TO" : "FROM"}</From>
              <Sender>{data?.senderNickname ?? data?.receiverNickname}</Sender>
            </SenderContainer>
          </LetterBottomLayout>
        </MainLayout>
      )}
    </Layout>
  );
};

export default LetterStorageReplyPage;

export async function getServerSideProps(ctx: any) {
  const { letterId } = ctx.params;
  return {
    props: {
      letterId,
    },
  };
}
