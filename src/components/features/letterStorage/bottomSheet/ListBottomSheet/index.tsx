<<<<<<< HEAD
import BottomSheetFooter from "../BottomSheetFooter";
import BottomSheetHeader from "../BottomSheetHeader";
import ListContainer from "../ListContainer";
import * as S from "./styled";
=======
import BottomSheetHeader from "../BottomSheetHeader";
import ListContainer from "../ListContainer";
>>>>>>> fa5ebff (💄 LetterBox 페이지 bottomSheet 대략적 레이아웃 구성)

interface ListArrayTypes {
  imageURL?: string;
  name: string;
}

interface Props {
  listArray: ListArrayTypes[];
}

export default function ListBottomSheet({ listArray }: Props) {
  return (
    <>
      <BottomSheetHeader selectedItem="보낸사람" />
<<<<<<< HEAD
      <S.ListsContainer>
        {listArray.map((item, index) => {
          // NOTE: key값 임시
          return <ListContainer name={item.name} key={index} />;
        })}
      </S.ListsContainer>
      <BottomSheetFooter />
=======
      {listArray.map((item, index) => {
        // NOTE: key값 임시
        return <ListContainer name={item.name} key={index} />;
      })}
>>>>>>> fa5ebff (💄 LetterBox 페이지 bottomSheet 대략적 레이아웃 구성)
    </>
  );
}
