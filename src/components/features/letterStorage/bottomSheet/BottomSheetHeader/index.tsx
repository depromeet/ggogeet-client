import { Dispatch, SetStateAction } from "react";
import InitializationButton from "../InitializationButton";
import * as S from "./styled";

interface Props {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
  // onClick: () => void;
}

export default function BottomSheetHeader({
  selected,
  setSelected,
}: // onClick,
Props) {
  const onClickItem = (name: string) => {
    setSelected(name);
  };

  return (
    <S.HeaderLayout>
      <S.NavigationsContainer>
        <S.Navigation
          isSelected={selected === "보낸 사람"}
          onClick={() => onClickItem("보낸 사람")}
        >
          보낸 사람
        </S.Navigation>
        <S.Navigation
          isSelected={selected === "태그"}
          onClick={() => onClickItem("태그")}
        >
          태그
        </S.Navigation>
        <S.Navigation
          isSelected={selected === "날짜"}
          onClick={() => onClickItem("날짜")}
        >
          날짜
        </S.Navigation>
      </S.NavigationsContainer>

      {/* <InitializationButton onClick={onClick} /> */}
    </S.HeaderLayout>
  );
}
