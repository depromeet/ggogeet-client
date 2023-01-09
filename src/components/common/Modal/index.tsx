import * as S from "./styled";

interface Props {
  title: string;
  description?: string;
  buttons: {
    name: string;
    onClick?: () => void;
  }[];
}

export default function Modal({ title, description, buttons }: Props) {
  return (
    <S.ModalWrapper>
      <p>{title}</p>
      {description && <p>{description}</p>}
      {buttons.map(({ name, onClick }) => (
        <button key={name} type="button" onClick={onClick}>
          {name}
        </button>
      ))}
    </S.ModalWrapper>
  );
}
