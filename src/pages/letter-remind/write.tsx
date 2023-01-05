import InputDefault, { InputClear } from "@/src/components/common/Input";
import TagsContainer from "@/src/components/common/TagsContainer";
import Textarea from "@/src/components/common/Textarea";
import TopNavigation from "@/src/components/common/TopNavigation";
import { NavBack } from "@/src/components/common/TopNavigation/atoms";
import {
  RemindWriteAlarmData,
  RemindWriteEmotionData,
} from "@/src/data/LetterRemind";
import { Body2, Body4, Body5, Display4 } from "@/src/styles/commons";
import styled from "@emotion/styled";
import Image from "next/image";
import { useState } from "react";

const Layout = styled.div`
  background-color: ${({ theme }) => theme.colors.navy};
  height: 100vh;
`;

const TopNavigationTitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${Display4}
`;

const OkButton = styled.button`
  color: ${({ theme }) => theme.colors.gray3};
  ${Body4}
  cursor: pointer;
`;

const MainLayout = styled.div`
  padding: 16px;
`;

const UpperLayout = styled.div`
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.gray6}`};
  padding: 0 0 24px 0;
`;

const InputContainer = styled.div`
  margin: 0 0 20px 0;
`;

const InputName = styled.p`
  color: ${({ theme }) => theme.colors.gray3};
  margin: 0 0 8px 0;
  ${Body2};
`;

const TitleInput = styled(InputClear)`
  color: ${({ theme }) => theme.colors.white};
  ${Body5};
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

const LowerLayout = styled.div`
  padding: 24px 0 0 0;
`;

const QuestionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 20px 0;
`;

const Question = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${Body5}
`;

const LetterRemindWritePage = () => {
  const onClear = () => {}; // 임시 함수

  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(false);

  return (
    <Layout>
      <TopNavigation
        title={<TopNavigationTitle>메모 추가</TopNavigationTitle>}
        leftElem={<NavBack color="white" />}
        rightElem={<OkButton type="button">확인</OkButton>}
      />

      <MainLayout>
        <UpperLayout>
          <InputContainer>
            <InputName>제목</InputName>
            <TitleInput onClear={onClear} />
          </InputContainer>

          <InputContainer>
            <InputName>내용</InputName>
            <ContentTextArea maxLength={100} />
          </InputContainer>

          <InputContainer>
            <InputName>날짜</InputName>
            <RemindWriteInput styleOption="fill" />
          </InputContainer>

          <InputName>상황 태그</InputName>
          <TagsContainer tagArray={RemindWriteEmotionData} />
        </UpperLayout>

        <LowerLayout>
          <QuestionContainer>
            <Question>잊지 않게 한번 더 알려줄까요?</Question>
            <p>스위치</p>
          </QuestionContainer>

          {isSwitchOn && <TagsContainer tagArray={RemindWriteAlarmData} />}
        </LowerLayout>
      </MainLayout>
    </Layout>
  );
};

export default LetterRemindWritePage;
