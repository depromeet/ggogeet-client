import { InputClear } from "@/src/components/common/Input";
import { letterWriteInputState } from "@/src/store/LetterWrite";
import { ChangeEventHandler, ReactElement } from "react";
import { useRecoilState } from "recoil";
import { useBottomButton } from "../Hooks";
import * as S from "../styled";

const ReceiverNameForm = (): ReactElement => {
  const [letterWriteInputObjectState, setLetterWriteInputObjectState] =
    useRecoilState(letterWriteInputState);

  const onChangeInputObject: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    setLetterWriteInputObjectState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onClear = () => {
    setLetterWriteInputObjectState((prev) => ({
      ...prev,
      receiverName: "",
    }));
  };

  const receiverNameLength = letterWriteInputObjectState.receiverName.length;

  const bottomButton = useBottomButton({
    isDisabled: receiverNameLength < 1 || receiverNameLength > 10,
  });

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
          minLength={1}
          maxLength={10}
          onClear={onClear}
        />
      </S.LetterWriteInputContainer>
      {bottomButton}
    </>
  );
};

export default ReceiverNameForm;
