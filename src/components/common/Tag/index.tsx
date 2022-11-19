import * as S from './styled';

type Props = {
  content: string;
};

export default function Tag({ content }: Props) {
  return <S.TagWrapper>{content}</S.TagWrapper>;
}
