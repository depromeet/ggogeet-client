import { ReactElement } from "react";
import { useBottomButton } from "../Hooks";
import * as S from "../styled";

const ReceiverFriendsForm = (): ReactElement => {
  const bottomButton = useBottomButton({text: '친구목록에 없어요'});
  return (
    <>
      <S.LetterWriteH1>누구에게 보낼 건가요?</S.LetterWriteH1>
      {bottomButton}
    </>
  );
};

export default ReceiverFriendsForm;
