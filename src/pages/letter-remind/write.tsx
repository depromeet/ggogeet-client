import InputDefault, { InputClear } from "@/src/components/common/Input";
import Textarea from "@/src/components/common/Textarea";
import Toggle from "@/src/components/common/Toggle";
import TopNavigation from "@/src/components/common/TopNavigation";
import { NavBack } from "@/src/components/common/TopNavigation/Atoms";
import TagsContainer from "@/src/components/features/letterRemind/Write/TagsContainer";
import {
  RemindWriteAlarmData,
  RemindWriteEmotionData,
} from "@/src/data/LetterRemind";
import { Body2, Body4, Body5, Display4 } from "@/src/styles/commons";
import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";

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

const ContentTextArea = styled(Textarea)`
  height: 70px;
  color: ${({ theme }) => theme.colors.gray5};
  ${Body2}
`;

const DateInput = styled(InputDefault)`
  padding: 14px 16px;
  background-color: ${({ theme }) => theme.colors.gray6};
  color: ${({ theme }) => theme.colors.gray3};
  margin: 0px;

  ${Body4}
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
  const [clickedSituationTag, setClickedSiuationTag] = useState<number>(0);
  const [clickedAlarmTag, setClickedAlarmTag] = useState<number>(0);
  const [dateValue, setDateValue] = useState<string>(new Date() + "");

  const onClickSwitch = () => setIsSwitchOn((prev) => !prev);

  const onChangeDateInput = (e: ChangeEvent<HTMLInputElement>) => {
    setDateValue(e.target.value);
  };

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
            <DateInput
              value={"" + dateValue}
              onChange={onChangeDateInput}
              type="date"
              styleOption="fill"
            />
          </InputContainer>

          <InputName>상황 태그</InputName>
          <TagsContainer
            tagArray={RemindWriteEmotionData}
            clickedTag={clickedSituationTag}
            setClickedTag={(value) => setClickedSiuationTag(value)}
            isShaped
          />
        </UpperLayout>

        <LowerLayout>
          <QuestionContainer>
            <Question>잊지 않게 한번 더 알려줄까요?</Question>
            <Toggle isOn={isSwitchOn} onClick={onClickSwitch} />
          </QuestionContainer>

          {isSwitchOn && (
            <TagsContainer
              tagArray={RemindWriteAlarmData}
              clickedTag={clickedAlarmTag}
              setClickedTag={setClickedAlarmTag}
            />
          )}
        </LowerLayout>
      </MainLayout>
    </Layout>
  );
};

export default LetterRemindWritePage;
