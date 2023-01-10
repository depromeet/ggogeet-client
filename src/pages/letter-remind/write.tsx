import { postReminder } from "@/src/apis/reminder";
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
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import dayjs from "dayjs";

const Layout = styled.div`
  background-color: ${({ theme }) => theme.colors.navy};
  height: 100vh;
`;

const TopNavigationTitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${Display4}
`;

interface OkButtonProps {
  canClicked: boolean;
}

const OkButton = styled.button<OkButtonProps>`
  color: ${({ theme, canClicked }) =>
    canClicked ? theme.colors.gray3 : theme.colors.gray5};
  cursor: ${({ canClicked }) => (canClicked ? "pointer" : "default")};

  ${Body4};
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
  color: ${({ theme }) => theme.colors.white};
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
  const router = useRouter();

  const [isAlarmOn, setIsAlarmOn] = useState<boolean>(false);
  const [situationId, setSituationId] = useState<number>(0);
  const [eventAt, setEventAt] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [alarmAtId, setAlarmAtId] = useState<number>(-1);
  const [alarmAt, setAlarmAt] = useState<string>("");
  const [canUpload, setCanUpload] = useState<boolean>(false);

  const onClear = () => {
    setTitle("");
  };

  const formatFunc = (date: string) => {
    return "" + dayjs(date).format("YYYY-MM-DD HH:mm:ss");
  };

  const payload = {
    title,
    content,
    situationId: situationId + 1,
    eventAt: formatFunc(eventAt),
    alertOn: isAlarmOn,
    alarmAt,
  };

  const postRemindermutation = useMutation({
    mutationKey: ["postReminder"],
    mutationFn: postReminder,
    onSuccess: () => {
      console.log(payload);

      setIsAlarmOn(false);
      setSituationId(0);
      setEventAt("");
      setTitle("");
      setContent("");
      setAlarmAtId(-1);
      setAlarmAt("");
      setCanUpload(false);

      router.push("/letter-remind");
    },
  });

  console.log(situationId);

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const onChangeEventAt = (e: ChangeEvent<HTMLInputElement>) => {
    setEventAt(e.target.value);
    setAlarmAt(e.target.value);
  };

  const onClickSwitch = () => setIsAlarmOn((prev) => !prev);

  const onClickUploadButton = () => {
    if (title === "" || content === "" || eventAt === "") return;
    postRemindermutation.mutate(payload);
  };

  useEffect(() => {
    if (title !== "" && content !== "" && eventAt !== "") setCanUpload(true);
    else setCanUpload(false);
  }, [title, content, eventAt, canUpload]);

  useEffect(() => {
    let dateDifference = 0;

    switch (alarmAtId) {
      case 0:
        dateDifference = 1;
        break;
      case 1:
        dateDifference = 3;
        break;
      case 2:
        dateDifference = 5;
        break;
      case 3:
        dateDifference = 7;
        break;
      default:
        dateDifference = 0;
    }

    console.log(
      dayjs(eventAt).subtract(dateDifference, "d").format("YYYY-MM-DD HH:mm:ss")
    );

    setAlarmAt(
      dayjs(eventAt).subtract(dateDifference, "d").format("YYYY-MM-DD HH:mm:ss")
    );
  }, [alarmAtId]);

  return (
    <Layout>
      <TopNavigation
        title={<TopNavigationTitle>메모 추가</TopNavigationTitle>}
        leftElem={<NavBack color="white" />}
        rightElem={
          <OkButton
            type="button"
            onClick={onClickUploadButton}
            canClicked={canUpload}
          >
            확인
          </OkButton>
        }
      />

      <MainLayout>
        <UpperLayout>
          <InputContainer>
            <InputName>제목</InputName>
            <TitleInput
              onClear={onClear}
              onChange={onChangeTitle}
              value={title}
              maxLength={12}
            />
          </InputContainer>

          <InputContainer>
            <InputName>내용</InputName>
            <ContentTextArea
              maxLength={100}
              onChange={onChangeContent}
              value={content}
            />
          </InputContainer>

          <InputContainer>
            <InputName>날짜</InputName>
            <DateInput
              value={"" + eventAt}
              onChange={onChangeEventAt}
              type="date"
              styleOption="fill"
            />
          </InputContainer>

          <InputName>상황 태그</InputName>
          <TagsContainer
            tagArray={RemindWriteEmotionData}
            clickedTag={situationId}
            setClickedTag={(value) => setSituationId(value)}
            isShaped
          />
        </UpperLayout>

        <LowerLayout>
          <QuestionContainer>
            <Question>잊지 않게 한번 더 알려줄까요?</Question>
            <Toggle isOn={isAlarmOn} onClick={onClickSwitch} />
          </QuestionContainer>

          {isAlarmOn && (
            <TagsContainer
              tagArray={RemindWriteAlarmData}
              clickedTag={alarmAtId}
              setClickedTag={setAlarmAtId}
            />
          )}
        </LowerLayout>
      </MainLayout>
    </Layout>
  );
};

export default LetterRemindWritePage;
