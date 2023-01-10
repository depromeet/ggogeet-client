import { RemindData } from "@/src/data/LetterRemind";
import { ReminderDataType } from "@/src/types/reminder";
import TodoContainer from "../TodoContainer";
import * as S from "./styled";

interface Props {
  data: ReminderDataType[];
}

export default function TodoContainerList({ data }: Props) {
  const listData = RemindData;

  return (
    <S.ListLayout>
      {listData.map((item) => {
        return (
          <S.TodoWrapper key={item.id}>
            <TodoContainer todo={item} />
          </S.TodoWrapper>
        );
      })}
    </S.ListLayout>
  );
}
