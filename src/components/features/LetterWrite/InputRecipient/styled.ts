import { Body1, Caption1, Header1 } from "@/src/styles/commons";
import styled from "@emotion/styled";

const LetterWriteInputRecipientLayoutWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const BottomButtonContainer = styled.div<{ type?: string }>`
  width: calc(100% - 32px);
  position: fixed;
  bottom: 16px;
  margin: 0 auto;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;

  button {
    height: 56px;
    border-radius: 30px;
  }

  button {
    ${({ type }) =>
      type === "Initial Page" &&
      `
      width: 100%;
    `}
    &:first-of-type {
      ${({ type }) =>
        type === "Initial Page" &&
        `
        border: 1px solid #767c8d;
    `}
    }
  }
`;

const LetterWriteInputRecipientMain = styled.main`
  padding: 12px 16px;
  height: calc(100vh - 44px);
`;

const LetterWriteInputContainer = styled.div`
  margin-top: 32px;
  height: 30px;
  input {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    &::placeholder {
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
    }
  }
`;

const RelationShipReceiverContainer = styled.div`
  margin: 16px 0 36px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const LetterWriteH1 = styled.h1`
  line-height: 150%;
  color: #767c8d;
  ${Header1}
`;

const LetterWriteCaption1 = styled.small`
  line-height: 14px;
  color: #a4a9b8;
  ${Caption1}
`;

const LetterWriteBody1 = styled.span`
  line-height: 22px;
  color: #767c8d;
  ${Body1}
`;

const SituationTemplateContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 341px;
  background: #e4e7ef;
  border-radius: 12px;
`;

const SituationSlick = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  height: 120px;
  overflow: hidden;
`;

const SituationSlickItem = styled.button<{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  div {
    width: 92px;
    height: 92px;
    background: #e4e7ef;
    border-radius: 12px;
    ${({ isSelected }) =>
      isSelected &&
      `
      border: 1px solid #989fb3;
    `}
  }
  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    display: flex;
    align-items: center;
    color: #000000;
  }
`;

export {
  LetterWriteInputRecipientLayoutWrapper,
  BottomButtonContainer,
  LetterWriteInputRecipientMain,
  LetterWriteInputContainer,
  RelationShipReceiverContainer,
  LetterWriteH1,
  LetterWriteCaption1,
  LetterWriteBody1,
  SituationTemplateContainer,
  SituationSlick,
  SituationSlickItem,
};
