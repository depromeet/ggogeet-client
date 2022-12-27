import InputDefault from "@/src/components/common/Input";
import TagsContainer from "@/src/components/common/TagsContainer";
import Textarea from "@/src/components/common/Textarea";
import TopNavigation from "@/src/components/common/TopNavigation";
import {
  RemindWriteAlarmData,
  RemindWriteEmotionData,
} from "@/src/data/LetterRemind";
import { Body2, Body4, Header4, Header5 } from "@/src/styles/commons";
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

const QuestionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 20px 0;
`;

const TopNavigationTitle = styled.p`
  color: ${({ theme }) => theme.colors.gray5};
  ${Header4}
`;

const OkButton = styled.button`
  color: ${({ theme }) => theme.colors.gray4};
  ${Header5}
  cursor: pointer;
`;

const InputName = styled.p`
  color: ${({ theme }) => theme.colors.gray4};
  padding: 0 0 8px 0;
  ${Body4};
`;

const Question = styled.p`
  color: ${({ theme }) => theme.colors.gray5};
  ${Body2}
`;

const RemindWriteInput = styled(InputDefault)`
  // NOTE: 날짜부분 input 따로 만들게 되면 변수명 변경하기
  height: 24px;
  color: ${({ theme }) => theme.colors.gray5};
  ${Body2}
`;

const ContentTextArea = styled(Textarea)`
  height: 70px;
  color: ${({ theme }) => theme.colors.gray5};
  ${Body2}
`;

const LetterRemindWritePage = () => {
  return (
    <>
      <TopNavigation
        title={<TopNavigationTitle>꼬깃기억 추가</TopNavigationTitle>}
        leftElem={
          <Image
            alt="뒤로가기화살표"
            src="/icons/backArrow.svg"
            width={19}
            height={17}
          />
        } // NOTE: 뒤로가기화살표 임시
        rightElem={<OkButton type="button">확인</OkButton>}
      />

      <Layout>
        <UpperLayout>
          <InputContainer>
            <InputName>날짜</InputName>
            <RemindWriteInput styleOption="fill" />
          </InputContainer>

          <InputContainer>
            <InputName>제목</InputName>
            <RemindWriteInput styleOption="fill" />
          </InputContainer>

          <InputContainer>
            <InputName>내용</InputName>
            <ContentTextArea maxLength={100} />
          </InputContainer>

          <TagsContainer tagArray={RemindWriteEmotionData} />
        </UpperLayout>

        <LowerLayout>
          <QuestionContainer>
            <Question>잊지 않게 한번 더 알려줄까요?</Question>
            <p>스위치</p>
          </QuestionContainer>

          <TagsContainer tagArray={RemindWriteAlarmData} />
        </LowerLayout>
      </Layout>
    </>
  );
};

export default LetterRemindWritePage;
