import Image from "next/image";
import * as S from "./styled";

import Modal from "@/src/components/common/Modal";
import Button from "@/src/components/common/Buttons/Button";
import { useState } from "react";

interface Props {
  isDeleted: () => void;
}

export default function DeleteButton({ isDeleted }: Props) {
  const [openModal, setOpenMadal] = useState(false);

  const onClickDeleteMemo = async () => {
    isDeleted();
    setOpenMadal(() => false);
  };

  return (
    <>
      {openModal && (
        <Modal>
          <S.ModalWrap>
            <S.ModalTitle>메모를 정말 삭제할까요?</S.ModalTitle>

            <Button
              onClick={onClickDeleteMemo}
              name="네, 삭제할래요"
              size="lg"
              outline
            />
            <Button onClick={() => setOpenMadal(false)} name="취소" size="lg" />
          </S.ModalWrap>
        </Modal>
      )}

      <S.ButtonLayout onClick={() => setOpenMadal(true)}>
        <Image
          src="/icons/trashCan.svg"
          alt="쓰레기통아이콘"
          height={16}
          width={16}
        />
        <S.Delete>삭제하기</S.Delete>
      </S.ButtonLayout>
    </>
  );
}
