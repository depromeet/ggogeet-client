import Button from "@/src/components/common/Buttons/Button";
import TopNavigation from "@/src/components/common/TopNavigation";
import TodoContainer from "@/src/components/features/letter-remind/TodoContainer";
import { RemindData } from "@/src/data/LetterRemind";
import styled from "@emotion/styled";

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

        {RemindData.map((item) => {
          return (
            <TodoContainerWrapper key={item.id}>
<<<<<<< HEAD
              <TodoContainer todo={item} />
=======
              <TodoContainer todoObject={item} />
>>>>>>> 1bcacce (💄 토글 컨텐츠 부분 UI 추가)
            </TodoContainerWrapper>
          );
        })}
      </Layout>
    </>
  );
};

export default LetterRemindPage;
