import { getReceivedLetterTemp } from "@/src/apis/letter";
import TopNavigation from "@/src/components/common/TopNavigation";
import { NavBack } from "@/src/components/common/TopNavigation/Atoms";
import { situationTemplatesData } from "@/src/data/LetterWrite";
import { useToast } from "@/src/hooks/useToast";
import { queryKeys } from "@/src/react-query/constants";
import { Body4, Caption1, Display1 } from "@/src/styles/commons";
import { getDateTimeFormat } from "@/src/utils/date";
import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

const LettersReceivedTempPage: NextPage = ({ tempLetterId }: any) => {
  const router = useRouter();
  const { setToast } = useToast();
  const {
    data,
    isSuccess,
    error: detailError,
    isError,
  } = useQuery(
    [queryKeys.getLettersReceivedTemp],
    () => getReceivedLetterTemp(Number(tempLetterId)),
    {
      enabled: !!tempLetterId,
    }
  );
  useEffect(() => {
    const error = detailError as any;

    if (error) {
      const status = error.response.status;
      if (status === 404) {
        setToast({
          status: "error",
          content: "받은 꼬깃이 없어요!",
        });
        router.push("/");
      }
    }
  }, [isError]);

  if (!isSuccess) return <></>;

  const { content, senderNickname, receivedAt, situationId } = data;

  const { color, title, characterImage } = situationTemplatesData.find(
    (template) => template.situationId === situationId
  )!;

  return (
    <Layout>
      <TopNavigation leftElem={<NavBack color="white" isHome />} />

      <MainLayout>
        <AnimalImageWrapper>
          <Image alt={title} {...characterImage} priority />
        </AnimalImageWrapper>

        <LetterMainLayout>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </LetterMainLayout>
        <LetterBottomLayout color={color}>
          <DateText>
            {getDateTimeFormat(new Date(receivedAt).getTime())}
          </DateText>
          <SenderContainer>
            <From>FROM</From>
            <Sender>{senderNickname}</Sender>
          </SenderContainer>
        </LetterBottomLayout>
      </MainLayout>
    </Layout>
  );
};

export async function getServerSideProps(ctx: any) {
  const { temp_letter_id: tempLetterId } = ctx.params;
  return {
    props: {
      tempLetterId,
    },
  };
}

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
  left: 36px;
  top: 47px;
`;

const LetterMainLayout = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px 8px 0 0;
  padding: 36px 20px 28px 20px;
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

const DateText = styled.p`
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

export default LettersReceivedTempPage;
