import Button from "@/src/components/common/Buttons/Button";
import TopNavigation from "@/src/components/common/TopNavigation";
import TodoContainer from "@/src/components/features/letter-remind/TodoContainer";
import styled from "@emotion/styled";
import { title } from "process";

const Layout = styled.div`
  padding: 12px 16px 0 16px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  width: 270px;
  padding: 0 0 28px 0;
  justify-content: space-between;
`;

const TodoContainerWrapper = styled.div`
  padding: 0 0 12px 0;
`;

const DummyData = [
  { title: "제목", date: "11월 29일", id: "1" },
  { title: "제목", date: "11월 29일", id: "2" },
  { title: "제목", date: "11월 29일", id: "3" },
  { title: "제목", date: "11월 29일", id: "4" },
  { title: "제목", date: "11월 29일", id: "5" },
  { title: "제목", date: "11월 29일", id: "6" },
  { title: "제목", date: "11월 29일", id: "7" },
  { title: "제목", date: "11월 29일", id: "8" },
  { title: "제목", date: "11월 29일", id: "9" },
  { title: "제목", date: "11월 29일", id: "10" },
];

const LetterRemindPage = () => {
  return (
    <>
      <TopNavigation title="꼬깃기억" />

      <Layout>
        <ButtonsContainer>
          <Button name="모든 꼬깃기억" fontStyle="bold" isDark={true} />
          <Button name="미완료" fontStyle="bold" isDark={true} />
          <Button name="완료" fontStyle="bold" isDark={true} />
        </ButtonsContainer>

        {DummyData.map((item) => {
          return (
            <TodoContainerWrapper key={item.id}>
              <TodoContainer title={item.title} date={item.date} />
            </TodoContainerWrapper>
          );
        })}
      </Layout>
    </>
  );
};

export default LetterRemindPage;
