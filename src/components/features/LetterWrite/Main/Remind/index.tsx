import { getReminderList } from "@/src/apis/reminder";
import { queryKeys } from "@/src/react-query/constants";
import { letterWriteInputState } from "@/src/store/LetterWrite";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import Accordion from "../../Common/Accordion";
import * as S from "../styled";

const Remind = () => {
  const { data = [], isSuccess } = useQuery(
    [queryKeys.remind],
    getReminderList
  );
  const letterWriteInputObjectState = useRecoilValue(letterWriteInputState);
  const { situationId } = letterWriteInputObjectState;

  if (!isSuccess) return <></>;

  const filteredData = data.filter((d) => d.situationId === situationId);
  return (
    <S.RemindMainWrapper>
      <S.BottomSheetHeader>
        <strong>꼬깃 메모</strong>
        <span>이전에 적어둔 메모를 참고해서 편지를 작성해 보세요.</span>
      </S.BottomSheetHeader>
      {filteredData.length > 0 ? (
        <S.RemindMemoContainer>
          <Accordion data={filteredData} />
        </S.RemindMemoContainer>
      ) : (
        <S.EmptyRemindContainer>
          <Image
            src="/images/image__empty.svg"
            alt="메모 없음"
            width={94.5}
            height={95.5}
            priority
          />
          <span>아직 작성한 메모가 없어요!</span>
        </S.EmptyRemindContainer>
      )}
    </S.RemindMainWrapper>
  );
};

export default Remind;
