import { ReminderType } from "@/src/types/reminder";
import TodoContainer from "../TodoContainer";
import { useRecoilState, useRecoilValue } from "recoil";
import { remindNavigationState } from "@/src/store/LetterRemind";
import * as S from "./styled";

interface Props {
  data: ReminderType[];
  refetch: () => void;
}

export default function TodoContainerList({ data, refetch }: Props) {
  const selectedNavigation = useRecoilValue(remindNavigationState);

  let listData = [];

  const doneData = data.filter((item) => item.isDone === true);
  const notDoneData = data.filter((item) => item.isDone === false);

  switch (selectedNavigation) {
    case "모든 메모":
      listData = data.sort((a, b) => +a.isDone - +b.isDone);
      break;
    case "미완료":
      listData = notDoneData;
      break;
    default:
      listData = doneData;
  }

  return (
    <S.ListLayout>
      {listData.map((item) => {
        return (
          <S.TodoWrapper key={item.id}>
            <TodoContainer
              itemId={item.id}
              isDone={item.isDone}
              refetchList={refetch}
            />
          </S.TodoWrapper>
        );
      })}
    </S.ListLayout>
  );
}
