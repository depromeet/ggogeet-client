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
import { queryKeys } from "@/src/react-query/constants";
import { queryClient } from "@/src/react-query/queryClient";
import { letterWriteInputState } from "@/src/store/LetterWrite";
import { PostSendLetterTempCompleteType } from "@/src/types/letter";
import { getDateTimeFormat } from "@/src/utils/date";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { useRecoilState } from "recoil";
import { useTextLengthPixel } from "../Hooks";
import * as S from "../styled";

const CompletedForm02 = () => {
  const router = useRouter();
  const { setToast } = useToast();
  const [letterWriteInputObjectState, setLetterWriteInputObjectState] =
    useRecoilState(letterWriteInputState);
  const { situationId, lastSentence, letterId, receiverUserId } =
    letterWriteInputObjectState;
  const currentTextLengthPixel = useTextLengthPixel(lastSentence);
  const currentTemplate = situationTemplatesData.find(
    (template) => template.situationId === situationId
  );
  const [tempLetterId, setTempLetterId] = useState<number | null>(null);

  const onClickKakaoTalk = () => {
    if (receiverUserId) {
      // 회원 편지 발송 (카카오 메시지)
      postSendLetterMutation.mutate(letterId as number);
    } else {
      // 비회원 편지 발송 (카카오 공유)
      postSendLetterTempCompleteMutation.mutate(letterId as number);
    }
  };

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

  // 회원 편지 발송 (카카오 메시지)
  const postSendLetterMutation = useMutation({
    mutationKey: [queryKeys.postSendLetter],
    onMutate: postSendLetterComplete,
    onSuccess: () => {
      onSuccessMutation("꼬깃 보내기 성공!");
    },
    onError: () => {
      onErrorMutation("회원 꼬깃 발송에 문제가 발생하였습니다..");
    },
  });

  // 비회원 편지 발송 위한 임시 편지 정보(id, 편지 열람 기한) 가져오기
  const postSendLetterTempCompleteMutation = useMutation({
    mutationKey: [queryKeys.postSendLetterTempComplete],
    onMutate: postSendLetterTempComplete,
    onSuccess: ({ tempLetterId, expiredDate }) => {
      postSendLetterUnregisteredUserMutation.mutate({
        tempLetterId,
        expiredDate,
      });
    },
    onError: () => {
      onErrorMutation("비회원 꼬깃 발송에 문제가 발생하였습니다..");
    },
  });

  // 비회원 편지 발송 (카카오 공유)
  const postSendLetterUnregisteredUserMutation = useMutation({
    mutationKey: [queryKeys.postSendLetterUnregisteredUser],
    onMutate: postSendLetterToUnregisteredUser,
    onSuccess: (tempLetterId: number) => {
      setTempLetterId(tempLetterId);
    },
    onError: () => {
      onErrorMutation("비회원 꼬깃 카카오 공유에 문제가 발생하였습니다..");
    },
  });

  // 비회원 편지 발송 콜백 (성공 여부 체크 이후 리다이렉트)
  const getLetterTempCompleteResultMutation = useMutation({
    mutationKey: [queryKeys.getLetterTempCompleteResult],
    onMutate: getLetterTempCompleteResult,
    onSuccess: ({ sent }) => {
      if (sent) {
        onSuccessMutation("꼬깃 보내기 성공!");
      }
    },
  });

  // To persist mutation Fn
  const queryClientMutationMap = useMemo(
    () => ({
      [queryKeys.postSendLetter]: postSendLetterComplete,
      [queryKeys.postSendLetterTempComplete]: postSendLetterTempComplete,
      [queryKeys.postSendLetterUnregisteredUser]:
        postSendLetterToUnregisteredUser,
      [queryKeys.getLetterTempCompleteResult]: getLetterTempCompleteResult,
    }),
    []
  );

  useEffect(() => {
    Object.entries(queryClientMutationMap).forEach(([key, value]) => {
      queryClient.setMutationDefaults([key], {
        mutationFn: value,
      });
    });
  }, [queryClientMutationMap]);

  useInterval(() => {
    if (tempLetterId) {
      getLetterTempCompleteResultMutation.mutate(tempLetterId);
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
                  <strong>유저 이름</strong>
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
