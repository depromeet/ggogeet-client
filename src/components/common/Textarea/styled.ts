import styled from "@emotion/styled";

export const Wrap = styled.div`
  background-color: ${({ theme }) => theme.colors.gray1};
  border-radius: 8px;
  padding: 12px;

  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const Textarea = styled.textarea`
  background-color: #f0f2f6;
  width: 100%;
  border: none;
`;

export const LengthCount = styled.span`
  margin-left: auto;
  color: #bcc1d0;
  font-size: 12px;
`;
export const Length = styled.span<{ length: number }>`
  color: ${({ theme, length }) => length && theme.colors.gray5};
`;
