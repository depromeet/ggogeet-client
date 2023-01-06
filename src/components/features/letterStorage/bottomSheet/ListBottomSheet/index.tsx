import ListContainer from "../ListContainer";
import * as S from "./styled";

interface ListArrayTypes {
  imageURL?: string;
  name: string;
}

interface Props {
  listArray: ListArrayTypes[];
}

export default function ListBottomSheet({ listArray }: Props) {
  return (
    <S.ListsContainer>
      {listArray.map((item, index) => {
        // NOTE: key값 임시
        return <ListContainer name={item.name} key={index} />;
      })}
    </S.ListsContainer>
  );
}
