import styled from "@emotion/styled";
import { Display2 } from "@/src/styles/commons";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};
  min-height: 100vh;
`;

export const TopContent = styled.div`
  padding-top: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: ${({ theme }) => theme.spacing[4]};
  ${Display2}
`;

export const SigninButton = styled.button`
  position: absolute;
  bottom: 24px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
`;
