import Button from "@/src/components/common/Buttons/Button";
import TopNavigation from "@/src/components/common/TopNavigation";
import TodoContainer from "@/src/components/features/letterRemind/TodoContainer";
import { RemindData } from "@/src/data/LetterRemind";
import styled from "@emotion/styled";
import Image from "next/image";

const Layout = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  height: 100vh;
`;

const MainLayout = styled.div`
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
    <Layout>
      <TopNavigation
        title="꼬깃기억"
        rightElem={
          <Image
            src="/icons/hamburger.svg"
            alt="햄버거아이콘"
            width={18}
            height={16}
          />
        }
      />

      <MainLayout>
        <ButtonsContainer>
          <Button name="모든 꼬깃기억" fontStyle="bold" isDark={true} />
          <Button name="미완료" fontStyle="bold" isDark={true} />
          <Button name="완료" fontStyle="bold" isDark={true} />
        </ButtonsContainer>

        {RemindData.map((item) => {
          return (
            <TodoContainerWrapper key={item.id}>
              <TodoContainer todo={item} />
            </TodoContainerWrapper>
          );
        })}
      </MainLayout>
    </Layout>
  );
};

export default LetterRemindPage;
