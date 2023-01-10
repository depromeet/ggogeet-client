import styled from "@emotion/styled";
import { Body2, Body4, Caption1 } from "@/src/styles/commons";

export const ModalWrapper = styled.dialog`
  display: block;
  margin: 0;
  padding: 40px 20px 16px 20px;
  border: none;
  width: 280px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10000;
  border-radius: 8px;
  background-color: ${({ theme: { colors } }) => colors.gray5};
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > p {
    width: 100%;
    text-align: center;
    &:nth-of-type(1) {
      line-height: 24px;
      color: ${({ theme: { colors } }) => colors.white};
      ${Body4}
    }

    &:nth-of-type(2) {
      margin-top: 4px;
      line-height: 18px;
      color: ${({ theme: { colors } }) => colors.gray2};
      ${Caption1}
    }

    &:last-of-type {
      margin-bottom: 32px;
    }
  }

  & > button:nth-of-type(1) {
    border: 1px solid ${({ theme: { colors } }) => colors.gray2};
  }
`;

export const ModalButton = styled.button`
  width: 100%;
  color: ${({ theme: { colors } }) => colors.gray2};
  line-height: 21px;
  padding: 13px 0;
  border-radius: 4px;

  ${Body2}
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
`;
