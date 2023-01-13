import {
  getLetterTempCompleteResult,
  postSendLetterComplete,
  postSendLetterTempComplete,
} from "@/src/apis/letter";
import Button from "@/src/components/common/Buttons/Button";
import InputDefault from "@/src/components/common/Input";
import { KAKAO_QUERY } from "@/src/constants/api";
import { situationTemplatesData } from "@/src/data/LetterWrite";
import useInterval from "@/src/hooks/useInterval";
import { useToast } from "@/src/hooks/useToast";
import { letterWriteInputState } from "@/src/store/LetterWrite";
import { userState } from "@/src/store/users";
import { PostSendLetterTempCompleteType } from "@/src/types/letter";
import { getDateTimeFormat } from "@/src/utils/date";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useTextLengthPixel } from "../Hooks";
import * as S from "../styled";

const CompletedForm02 = () => {
  const router = useRouter();
  const { setToast } = useToast();
  const { name: sendUserName } = useRecoilValue(userState);
  const [letterWriteInputObjectState, setLetterWriteInputObjectState] =
    useRecoilState(letterWriteInputState);
  const { situationId, lastSentence, letterId, receiverUserId } =
    letterWriteInputObjectState;
  const currentTextLengthPixel = useTextLengthPixel(lastSentence);
  const currentTemplate = situationTemplatesData.find(
    (template) => template.situationId === situationId
  );
  const [tempLetterId, setTempLetterId] = useState<number | null>(null);

  const onSuccessMutation = (text: string) => {
    router.push("/");
    return setToast({
      status: "success",
      content: text,
    });
  };

  const onErrorMutation = (text: string) => {
    return setToast({
      status: "error",
      content: text,
    });
  };

  // 비회원 편지 발송 위한 카카오 공유
  const postSendLetterToUnregisteredUser = async ({
    tempLetterId,
    expiredDate,
  }: PostSendLetterTempCompleteType) => {
    const { Kakao } = window;
    if (!Kakao.isInitialized()) {
      Kakao.init(KAKAO_QUERY.CLIENT_ID);
    }
    await Kakao.Share.sendCustom({
      templateId: KAKAO_QUERY.KAKAO_SHARE_TEMPLATE_ID,
      templateArgs: {
        tempLetterId,
        expiredDate,
      },
      serverCallbackArgs: {
        TEMP_LETTER_ID: tempLetterId,
      },
    });
    return tempLetterId;
  };

  const onClickKakaoTalk = async () => {
    if (receiverUserId) {
      // 회원 편지 발송 (카카오 메시지)
      const { successful_receiver_uuids } = await postSendLetterComplete(
        letterId as number
      );
      if (successful_receiver_uuids && successful_receiver_uuids.length > 0) {
        onSuccessMutation("꼬깃 보내기 성공!");
      } else {
        onErrorMutation("회원 꼬깃 발송에 문제가 발생하였습니다..");
      }
    } else {
      // 비회원 편지 발송 (카카오 공유)
      const { tempLetterId, expiredDate } = await postSendLetterTempComplete(
        letterId as number
      );
      setTempLetterId(tempLetterId);
      await postSendLetterToUnregisteredUser({ tempLetterId, expiredDate });
    }
  };

  useInterval(async () => {
    if (tempLetterId) {
      const { sent } = await getLetterTempCompleteResult(tempLetterId);
      if (sent) {
        onSuccessMutation("꼬깃 보내기 성공!");
      }
    }
  }, 3000);

  return (
    <>
      <S.LetterWriteH1>
        진심이 담긴 꼬깃을 보내서
        <br />
        마음을 표현해보세요!
      </S.LetterWriteH1>
      {currentTemplate && (
        <S.LetterWriteCompletedLastSentenceOuterContainer>
          <S.LetterWriteCompletedLastSentence
            color={currentTemplate.color}
            calculatedInputTextWidth={currentTextLengthPixel}
            style={{
              transform: "rotate(-8deg) scale(0.75)",
            }}
          >
            <div className="completed-situation-image">
              <Image
                alt={currentTemplate.title}
                {...currentTemplate.completedImage}
                priority
              />
            </div>
            <div className="completed-bottom-container">
              <div className="last-sentence-input">
                <span>&ldquo;</span>
                <InputDefault defaultValue={lastSentence} disabled />
                <span>&rdquo;</span>
              </div>
              <div className="sender-name-date">
                <div className="sender-name">
                  <span>FROM</span>
                  <strong>{sendUserName}</strong>
                </div>
                <time className="sender-date">
                  {getDateTimeFormat(new Date().getTime())}
                </time>
              </div>
            </div>
          </S.LetterWriteCompletedLastSentence>
          <span>꼬깃 보낼 준비 완료!</span>
        </S.LetterWriteCompletedLastSentenceOuterContainer>
      )}
      <S.BottomButtonContainer
        bgColor="#FBE44D"
        gap={8}
        fontWeight={600}
        fontColor="#3b1f1e"
      >
        <Button
          leftImg={
            <Image
              src="/icons/icon__kakao-talk.svg"
              alt="카카오톡"
              width={20}
              height={16}
              priority
            />
          }
          name="카카오톡으로 보내기"
          size="xl"
          onClick={onClickKakaoTalk}
        />
      </S.BottomButtonContainer>
    </>
  );
};

export default CompletedForm02;
