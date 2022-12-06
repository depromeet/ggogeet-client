import TagButton from "@/src/components/common/Buttons/TagButton";
import Input from "@/src/components/common/Input";
import TopNavigation from "@/src/components/common/TopNavigation";
import {
  RemindWriteAlarmData,
  RemindWriteEmotionData,
} from "@/src/data/LetterRemind";
import styled from "@emotion/styled";
import Image from "next/image";

const Layout = styled.div`
  padding: 16px;
`;

const UpperLayout = styled.div`
  border-bottom: 1px solid #a4a9b8;
  padding: 0 0 24px 0;
`;

const LowerLayout = styled.div`
  padding: 24px 0 0 0;
`;

const InputContainer = styled.div`
  margin: 0 0 16px 0;
`;

const TagsContainer = styled.div`
  display: flex;
  overflow: auto;
  white-space: nowrap;
`;

const QuestionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 20px 0;
`;

const TagWrapper = styled.div`
  margin: 0 8px 0 0;
`;

const OkButton = styled.button`
  cursor: pointer;
`;

const LetterRemindWritePage = () => {
  return (
    <>
      <TopNavigation
        title="꼬깃기억 추가"
        leftElem={
          <Image
            alt="뒤로가기화살표"
            src="/icons/backArrow.svg"
            width={19}
            height={17}
          />
        }
        rightElem={<OkButton>확인</OkButton>}
      />

      <Layout>
        <UpperLayout>
          <InputContainer>
            <p>날짜</p>
            <Input />
          </InputContainer>

          <InputContainer>
            <p>제목</p>
            <Input />
          </InputContainer>

          <InputContainer>
            <p>내용</p>
            <Input />
          </InputContainer>

          <TagsContainer>
            {RemindWriteEmotionData.map((tag, index) => {
              return (
                <TagWrapper key={index}>
                  <TagButton content={tag} />
                </TagWrapper>
              );
            })}
          </TagsContainer>
        </UpperLayout>

        <LowerLayout>
          <QuestionContainer>
            <p>잊지 않게 한번 더 알려줄까요?</p>
            <p>스위치</p>
          </QuestionContainer>

          <TagsContainer>
            {RemindWriteAlarmData.map((tag, index) => {
              return (
                <TagWrapper key={index}>
                  <TagButton content={tag} />
                </TagWrapper>
              );
            })}
          </TagsContainer>
        </LowerLayout>
      </Layout>
    </>
  );
};

export default LetterRemindWritePage;
