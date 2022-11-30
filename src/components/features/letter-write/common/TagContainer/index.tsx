import TagButton from '@/src/components/common/Buttons/TagButton';
import { letterWriteInputState } from '@/src/store/LetterWrite';
import { ReactElement } from 'react';
import { useRecoilState } from 'recoil';
import * as S from './styled';

const tags = [
  {
    id: 1,
    value: '가족',
  },
  {
    id: 2,
    value: '친구',
  },
  {
    id: 3,
    value: '연인',
  },
  {
    id: 4,
    value: '동료',
  },
  {
    id: 5,
    value: '가족가족',
  },
  {
    id: 6,
    value: '친구친구',
  },
  {
    id: 7,
    value: '연인연인',
  },
  {
    id: 8,
    value: '동료동료',
  },
];

const LetterWriteTagContainer = (): ReactElement => {
  const [letterWriteInputObjectState, setLetterWriteInputObjectState] =
    useRecoilState(letterWriteInputState);
  const onSelectTag = (tag: string) => {
    setLetterWriteInputObjectState((prev) => ({
      ...prev,
      relationship: tag,
    }));
  };
  return (
    <S.LetterWriteTagContainerWrapper>
      {tags.map((tag, id) => (
        <TagButton
          key={tag.id}
          content={tag.value}
          isDark={true}
          isSelected={letterWriteInputObjectState.relationship === tag.value}
          onClick={() => onSelectTag(tag.value)}
        />
      ))}
    </S.LetterWriteTagContainerWrapper>
  );
};

export default LetterWriteTagContainer;
