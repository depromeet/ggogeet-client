import styled from '@emotion/styled';
import { Body2 } from '@/src/styles/commons';

export const CircleButtonWrapper = styled.button<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: ${({ isSelected }) =>
    isSelected ? '2px solid #767C8D' : '1px solid #E4E7EF'};
  color: ${({ isSelected }) => (isSelected ? '#767C8D' : '#E4E7EF')};
  line-height: 24px;
  white-space: pre-line;

  ${Body2}
`;
