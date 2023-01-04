import { getReminderList } from "@/src/apis/reminder";
import { queryKeys } from "@/src/react-query/constants";
import { useQuery } from "@tanstack/react-query";
import Accordion from "../../Common/Accordion";
import * as S from "../styled";

const Remind = () => {
  const { data, isError, isLoading, error } = useQuery(
    [queryKeys.remind],
    getReminderList
  );
  if (isLoading) return <>Loading...</>;
  if (isError) return <span>Error: {JSON.stringify(error)}</span>;
  return (
    <S.RemindMainWrapper>
      <S.BottomSheetHeader>
        <strong>꼬깃 메모</strong>
        <span>이전에 적어둔 메모를 참고해서 편지를 작성해 보세요.</span>
      </S.BottomSheetHeader>
      <S.RemindMemoContainer>
        {data && <Accordion data={data} />}
      </S.RemindMemoContainer>
    </S.RemindMainWrapper>
  );
};

export default Remind;
