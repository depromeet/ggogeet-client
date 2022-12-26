import { Body1, Body2, Body5, Caption1, Display6 } from "@/src/styles/commons";
import theme from "@/src/styles/theme";
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
    height: 56px;
  }
`;

const LetterWriteInputRecipientMain = styled.main`
  padding: 20px;
`;

const LetterWriteInputContainer = styled.div`
  margin-top: 28px;
  height: 33px;
  input {
    line-height: 150%;
    letter-spacing: -0.005em;
    color: ${theme.colors.white};
    ${Body5}

    &::placeholder {
      line-height: 22px;
      letter-spacing: -0.005em;
      color: ${theme.colors.gray4};
      ${Body5};
    }
  }
`;

const LetterWriteInputGuideMessage = styled.span<{ isShow: boolean }>`
  display: ${({ isShow }) => (isShow ? "block" : "none")};
  margin-top: 4px;
  line-height: 150%;
  letter-spacing: -0.005em;
  color: ${theme.colors.red};
  ${Caption1};
`;

const RelationShipReceiverContainer = styled.div`
  margin: 16px 0 36px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const LetterWriteH1 = styled.h1`
  line-height: 150%;
  color: ${theme.colors.white};
  ${Display6}
`;

const LetterWriteProfileContainer = styled.ul`
  margin-top: 20px;
  height: calc(100vh - 220px);
  overflow-y: auto;
  li {
    padding: 12px 0px;
    width: 100%;
    height: 60px;
    button {
      display: flex;
      gap: 12px;
      align-items: center;
      width: fit-content;
      .profile-image-default {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background-color: #c1c2ca;
      }
      span {
        line-height: 150%;
        letter-spacing: -0.005em;
        color: ${theme.colors.white};
        ${Body2};
      }
    }
  }
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

const LetterWriteSituationSliderWrapper = styled.div`
  margin-top: 36px;
`;

const LetterWriteSituationSliderItem = styled.div`
  display: flex !important;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 0 6px;
  & > div:first-of-type {
    /* 임시 */
    width: 100%;
    aspect-ratio: 1 / 1;
    background-color: rgba(217, 217, 217, 0.7);
  }
  p {
    padding: 0 22px;
    line-height: 150%;
    text-align: center;
    letter-spacing: -0.005em;
    color: ${theme.colors.gray2};
    ${Body1};
  }
`;

const LetterWriteCompletedLastSentence = styled.div<{ color: string }>`
  width: 100%;
  height: 105%;
  background-color: ${({ color }) => color};
  border-radius: ${theme.radius.md};
  .last-sentence-input {
  }
  .sender-name-date {
  }
`;

export {
  LetterWriteInputRecipientLayoutWrapper,
  BottomButtonContainer,
  LetterWriteInputRecipientMain,
  LetterWriteInputContainer,
  LetterWriteInputGuideMessage,
  RelationShipReceiverContainer,
  LetterWriteH1,
  LetterWriteCaption1,
  LetterWriteBody1,
  LetterWriteProfileContainer,
  LetterWriteSituationSliderWrapper,
  LetterWriteSituationSliderItem,
  LetterWriteCompletedLastSentence,
};
