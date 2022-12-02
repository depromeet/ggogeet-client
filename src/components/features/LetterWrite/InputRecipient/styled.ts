import { Body1, Caption1, Header1 } from "@/src/styles/commons";
import styled from "@emotion/styled";

const LetterWriteInputRecipientLayoutWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme: { colors } }) => colors.navy};
`;

const BottomButtonContainer = styled.div<{ type?: string }>`
  width: 100%;
  position: fixed;
  padding: 20px;
  bottom: 0;
  left: 0;
  right: 0;

  button {
    /* FIXME: 공통 컴포넌트 BottomButton 참고 */
    height: 56px;
    border-radius: 2px;
  }
`;

const LetterWriteInputRecipientMain = styled.main`
  padding: 20px;
`;

const LetterWriteInputContainer = styled.div`
  margin-top: 28px;
  height: 33px;
  input {
    /* FIXME: 공통 style 이용 */
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: -0.005em;
    color: #ffffff;

    &::placeholder {
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      letter-spacing: -0.005em;
      color: #5b5d68;
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
  /* FIXME: 공통 style 이용 */
  font-weight: 600;
  font-size: 24px;
  line-height: 150%;
  color: #ffffff;
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
