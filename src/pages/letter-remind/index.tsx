import TopNavigation from "@/src/components/common/TopNavigation";
import { NavBack } from "@/src/components/common/TopNavigation/Atoms";
import RemindNavigationBar from "@/src/components/features/letterRemind/Main/RemindNavigationBar";
import TodoContainerList from "@/src/components/features/letterRemind/Main/TodoContainerList";
import { Display2 } from "@/src/styles/commons";
import styled from "@emotion/styled";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getReminderList } from "@/src/apis/reminder";

const Layout = styled.div`
  background-color: ${({ theme }) => theme.colors.navy};
  height: 100vh;
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
  const [selectedPage, setSelectedPage] = useState<string>("모든 메모");

  const { isSuccess, data } = useQuery({
    queryKey: ["getReminderList", selectedPage],
    queryFn: getReminderList,
  });

  return (
    <Layout>
      <TopNavigation
        title={<TopNavigationTitle>꼬깃 메모</TopNavigationTitle>}
        leftElem={<NavBack color="white" />}
      />

      <MainLayout>
        <RemindNavigationBar
          selectedItem={selectedPage}
          setSelectedItem={setSelectedPage}
        />

        <TodoLayout>
          <TodoContainerList data={data ?? []} />
        </TodoLayout>
      </MainLayout>
    </Layout>
  );
};

export default LetterRemindPage;
