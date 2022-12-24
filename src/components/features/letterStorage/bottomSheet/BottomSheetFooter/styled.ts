import Button from "@/src/components/common/Buttons/Button";
import styled from "@emotion/styled";

export const ButtonContainer = styled.div`
  padding: 20px;
`;

export const ApplyButton = styled(Button)`
  color: ${({ theme }) => theme.colors.gray2};
  border: ${({ theme }) => `1px solid ${theme.colors.gray2}`};
  width: 100%;
  cursor: pointer;
`;
