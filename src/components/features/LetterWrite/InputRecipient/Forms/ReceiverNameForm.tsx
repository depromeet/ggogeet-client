import Button from "@/src/components/common/Buttons/Button";
import { InputClear } from "@/src/components/common/Input";
import { letterWriteInputState } from "@/src/store/LetterWrite";
import { getNavigateNextLink } from "@/src/utils/LetterWrite";
import { useRouter } from "next/router";
import {
  ChangeEventHandler,
  KeyboardEvent,
  ReactElement,
  useEffect,
  useState,
} from "react";
import { useRecoilState } from "recoil";
import * as S from "../styled";

const ReceiverNameForm = (): ReactElement => {
  const router = useRouter();
  const { type } = router.query;
  const nextLink = getNavigateNextLink(type);
  const [letterWriteInputObjectState, setLetterWriteInputObjectState] =
    useRecoilState(letterWriteInputState);
  const [isBottomButtonNextDisabled, setIsBottomButtonNextDisabled] =
    useState<boolean>(true);

  const onChangeInputObject: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    setLetterWriteInputObjectState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const onKeyUpReceiverName = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      router.push(nextLink);
    } else {
      return;
    }
  };
  const onClickNext = () => {
    router.push(nextLink);
  };

  useEffect(() => {
    const receiverNameLength = letterWriteInputObjectState.receiverName.length;
    if (receiverNameLength >= 1 && receiverNameLength <= 10) {
      setIsBottomButtonNextDisabled(false);
    } else {
      setIsBottomButtonNextDisabled(true);
    }
  }, [letterWriteInputObjectState]);

  return (
    <>
      <S.LetterWriteH1>누구에게 보낼 건가요?</S.LetterWriteH1>
      <S.LetterWriteInputContainer>
        <InputClear
          name="receiverName"
          placeholder="받는 사람의 이름을 입력해주세요"
          defaultValue={letterWriteInputObjectState.receiverName}
          value={letterWriteInputObjectState.receiverName}
          onChange={onChangeInputObject}
          onKeyUp={onKeyUpReceiverName}
          minLength={1}
          maxLength={10}
          onClear={() => {
            setLetterWriteInputObjectState((prev) => ({
              ...prev,
              receiverName: "",
            }));
          }}
        />
      </S.LetterWriteInputContainer>
      <S.BottomButtonContainer type="Initial Page">
        <Button name="꼬깃 친구 목록에서 찾기" fontStyle="bold" isRound />
        <Button
          name="다음"
          fontStyle="bold"
          isRound
          isDark
          disabled={isBottomButtonNextDisabled}
          onClick={onClickNext}
        />
      </S.BottomButtonContainer>
    </>
  );
};

export default ReceiverNameForm;
