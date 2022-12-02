import { Body1, Caption1, Header1 } from "@/src/styles/commons";
import { QueryString } from "@/src/types";
import styled from "@emotion/styled";

const LetterWriteInputRecipientLayoutWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const BottomButtonContainer = styled.div`
  width: calc(100% - 32px);
  position: fixed;
  bottom: 8px;
  margin: 0 auto;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;

  button {
    width: 100%;
    height: 56px;
    border-radius: 30px;
    &:first-of-type {
      border: 1px solid #767c8d;
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

export {
  LetterWriteInputRecipientLayoutWrapper,
  BottomButtonContainer,
  LetterWriteInputRecipientMain,
  LetterWriteInputContainer,
  RelationShipReceiverContainer,
  LetterWriteH1,
  LetterWriteCaption1,
  LetterWriteBody1,
};
