import { ReactNode } from "react";
import Image from "next/image";
import * as S from "./styled";

interface Props {
  title?: string;
  description?: string;
  buttons?: {
    name: string;
    onClick?: () => void;
  }[];
  onClose?: () => void;
  children?: ReactNode;
}

export default function Modal({
  title,
  description,
  buttons,
  onClose,
  children,
}: Props) {
  return (
    <S.ModalWrapper>
      <S.ModalContainer>
        {children ? (
          children
        ) : (
          <S.ModalContent>
            {title && <p>{title}</p>}
            {description && <p>{description}</p>}
            {buttons?.map(({ name, onClick }) => (
              <S.ModalButton key={name} type="button" onClick={onClick}>
                {name}
              </S.ModalButton>
            ))}
          </S.ModalContent>
        )}
        {onClose && (
          <S.ModalCloseButton type="button" onClick={onClose}>
            <Image
              src="/icons/icon__guideline-close--white.svg"
              alt="웰컴 가이드 모달 닫기"
              width={16}
              height={16}
              priority
            />
          </S.ModalCloseButton>
        )}
      </S.ModalContainer>
    </S.ModalWrapper>
  );
}
