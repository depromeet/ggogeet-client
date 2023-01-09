import styled from "@emotion/styled";

export const Wrap = styled.div`
  background-color: ${({ theme }) => theme.colors.gray6};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 12px;

  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const Textarea = styled.textarea`
  background-color: inherit;
  width: 100%;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  caret-color: ${({ theme }) => theme.colors.white};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray4};
  }
`;

export const LengthCount = styled.span`
  margin-left: auto;
  color: ${({ theme }) => theme.colors.gray4};
  font-size: 12px;
`;
export const Length = styled.span<{ length: number }>`
  color: ${({ theme, length }) => length && theme.colors.yellow};
`;
