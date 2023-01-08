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

const Layout = styled.div`
  background-color: ${({ theme }) => theme.colors.navy};
  height: 100vh;
  overflow: scroll;
`;

const MainLayout = styled.div`
  padding: 12px 16px 0 16px;
`;

const TodoLayout = styled.div`
  margin: 24px 0 0 0;
`;

const TopNavigationTitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${Display2}
`;

const LetterRemindPage = () => {
  const selectedNavigation = useRecoilValue(remindNavigationState);

  const { data: remindListData } = useQuery({
    queryKey: ["getReminderList", selectedNavigation],
    queryFn: getReminderList,
  });

  return (
    <Layout>
      <TopNavigation
        title={<TopNavigationTitle>꼬깃 메모</TopNavigationTitle>}
        leftElem={<NavBack color="white" />}
      />

      <MainLayout>
        <RemindNavigationBar />

        <TodoLayout>
          <TodoContainerList data={remindListData ?? []} />
        </TodoLayout>
      </MainLayout>
    </Layout>
  );
};

export default LetterRemindPage;
