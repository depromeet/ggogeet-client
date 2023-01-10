import TopNavigation from "@/src/components/common/TopNavigation";
import { NavBack } from "@/src/components/common/TopNavigation/Atoms";
import RemindNavigationBar from "@/src/components/features/letterRemind/Main/RemindNavigationBar";
import TodoContainerList from "@/src/components/features/letterRemind/Main/TodoContainerList";
import { Display2 } from "@/src/styles/commons";
import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import { getReminderList } from "@/src/apis/reminder";
import { useRecoilValue } from "recoil";
import { remindNavigationState } from "@/src/store/LetterRemind";
import LetterAddButton from "@/src/components/features/letterRemind/Main/LetterAddButton";
import { useRouter } from "next/router";
import Image from "next/image";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.navy};
  height: 100vh;
  overflow: scroll;
`;

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 16px 0 16px;
  flex: 1;
`;

const TodoLayout = styled.div`
  flex: 1;
  padding: 0 0 30px 0;
`;

const TopNavigationTitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${Display2}
`;

const TodosContainer = styled.div`
  margin: 24px 0 0 0;
`;

const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.navy50};
  border-radius: 8px;
  margin: 16px 0 0 0;
  height: 100%;
`;

const LetterRemindPage = () => {
  const router = useRouter();

  const selectedNavigation = useRecoilValue(remindNavigationState);

  const { data: remindListData = [], refetch: remindListFetch } = useQuery({
    queryKey: ["getReminderList", selectedNavigation],
    queryFn: getReminderList,
  });

  const unDoneData = remindListData.filter((item) => !item.isDone);
  const doneData = remindListData.filter((item) => item.isDone);

  const onClickLetterAddButton = () => {
    router.push("/letter-remind/write");
  };

  return (
    <Layout>
      <TopNavigation
        title={<TopNavigationTitle>꼬깃 메모</TopNavigationTitle>}
        leftElem={<NavBack color="white" />}
      />

      <MainLayout>
        <RemindNavigationBar
          doneNum={doneData.length}
          unDoneNum={unDoneData.length}
        />

        <TodoLayout>
          {remindListData.length ? (
            <TodosContainer>
              <TodoContainerList
                data={remindListData}
                refetch={() => remindListFetch()}
              />
            </TodosContainer>
          ) : (
            <EmptyContainer>
              <Image
                src="images/image__empty.svg"
                alt="빈화면이미지"
                width={95}
                height={95}
              />
            </EmptyContainer>
          )}
        </TodoLayout>
      </MainLayout>

      <LetterAddButton onClick={onClickLetterAddButton} />
    </Layout>
  );
};

export default LetterRemindPage;
