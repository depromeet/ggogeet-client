import { getReminderList } from "@/src/apis/reminder";
import { queryKeys } from "@/src/react-query/constants";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Accordion from "../../Common/Accordion";
import * as S from "../styled";

const Remind = () => {
  const {
    data = [],
    isError,
    isLoading,
    error,
  } = useQuery([queryKeys.remind], getReminderList);
  const dataLength = data.length;
  if (isLoading) return <>Loading...</>;
  if (isError) return <span>Error: {JSON.stringify(error)}</span>;
  return (
    <S.RemindMainWrapper>
      <S.BottomSheetHeader>
        <strong>꼬깃 메모</strong>
        <span>이전에 적어둔 메모를 참고해서 편지를 작성해 보세요.</span>
      </S.BottomSheetHeader>
      {dataLength > 0 ? (
        <S.RemindMemoContainer>
          <Accordion data={data} />
        </S.RemindMemoContainer>
      ) : (
        <S.EmptyRemindContainer>
          <Image
            src="/images/image__empty.svg"
            alt="메모 없음"
            width={94.5}
            height={95.5}
          />
          <span>아직 작성한 메모가 없어요!</span>
        </S.EmptyRemindContainer>
      )}
    </S.RemindMainWrapper>
  );
};

export default Remind;
