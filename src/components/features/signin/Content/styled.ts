import Image from "next/image";
import styled from "@emotion/styled";
import { Display2 } from "@/src/styles/commons";

export const Background = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};
`;

export const TopContent = styled.div`
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  ${Display2}
`;

export const SigninButton = styled.button`
  margin-top: auto;
  margin-bottom: 60px;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
`;
