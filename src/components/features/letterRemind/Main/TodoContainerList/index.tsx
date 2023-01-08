import { RemindData } from "@/src/data/LetterRemind";
import TodoContainer from "../TodoContainer";
import * as S from "./styled";

export default function TodoContainerList() {
  return (
    <S.ListLayout>
      {RemindData.map((item) => {
        return (
          <S.TodoWrapper key={item.id}>
            <TodoContainer todo={item} />
          </S.TodoWrapper>
        );
      })}
    </S.ListLayout>
  );
}
