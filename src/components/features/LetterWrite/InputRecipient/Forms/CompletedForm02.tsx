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
import { userState } from "@/src/store/users";
import { PostSendLetterTempCompleteType } from "@/src/types/letter";
import { getDateTimeFormat } from "@/src/utils/date";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
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

  const onClickKakaoTalk = async () => {
    if (receiverUserId) {
      // ?????? ?????? ?????? (????????? ?????????)
      const { successful_receiver_uuids } = await postSendLetterComplete(
        letterId as number
      );
      if (successful_receiver_uuids && successful_receiver_uuids.length > 0) {
        onSuccessMutation("?????? ????????? ??????!");
      } else {
        onErrorMutation("?????? ?????? ????????? ????????? ?????????????????????..");
      }
    } else {
      // ????????? ?????? ?????? (????????? ??????)
      postSendLetterTempCompleteMutation.mutate(letterId as number);
    }
  };

  // ????????? ?????? ?????? ?????? ????????? ??????
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

  // ????????? ?????? ?????? ?????? ?????? ?????? ??????(id, ?????? ?????? ??????) ????????????
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
      onErrorMutation("????????? ?????? ????????? ????????? ?????????????????????..");
    },
  });

  // ????????? ?????? ?????? (????????? ??????)
  const postSendLetterUnregisteredUserMutation = useMutation({
    mutationKey: [queryKeys.postSendLetterUnregisteredUser],
    onMutate: postSendLetterToUnregisteredUser,
    onSuccess: (tempLetterId: number) => {
      setTempLetterId(tempLetterId);
    },
    onError: () => {
      onErrorMutation("????????? ?????? ????????? ????????? ????????? ?????????????????????..");
    },
  });

  // ????????? ?????? ?????? ?????? (?????? ?????? ?????? ?????? ???????????????)
  const getLetterTempCompleteResultMutation = useMutation({
    mutationKey: [queryKeys.getLetterTempCompleteResult],
    onMutate: getLetterTempCompleteResult,
    onSuccess: ({ sent }) => {
      if (sent) {
        onSuccessMutation("?????? ????????? ??????!");
      }
    },
  });

  // To persist mutation Fn
  const queryClientMutationMap = useMemo(
    () => ({
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
        ????????? ?????? ????????? ?????????
        <br />
        ????????? ??????????????????!
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
                  <strong>{sendUserName}</strong>
                </div>
                <time className="sender-date">
                  {getDateTimeFormat(new Date().getTime())}
                </time>
              </div>
            </div>
          </S.LetterWriteCompletedLastSentence>
          <span>?????? ?????? ?????? ??????!</span>
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
              alt="????????????"
              width={20}
              height={16}
            />
          }
          name="?????????????????? ?????????"
          size="xl"
          onClick={onClickKakaoTalk}
        />
      </S.BottomButtonContainer>
    </>
  );
};

export default CompletedForm02;
