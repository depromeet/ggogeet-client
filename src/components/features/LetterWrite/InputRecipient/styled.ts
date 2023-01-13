import {
  Body1,
  Body2,
  Body4,
  Body5,
  Caption1,
  Caption2,
  Display6,
} from "@/src/styles/commons";
import styled from "@emotion/styled";

const LetterWriteInputRecipientLayoutWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  @supports (-webkit-touch-callout: none) {
    min-height: fill-available;
    min-height: -webkit-fill-available;
    min-height: -moz-available;
  }
  background-color: ${({ theme: { colors } }) => colors.navy};
`;

const BottomButtonContainer = styled.div<{
  type?: string;
  bgColor?: string;
  gap?: number;
  fontWeight?: number;
  fontColor?: string;
}>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;

  button {
    display: flex;
    align-items: center;
    height: 56px;
    font-weight: ${({ fontWeight }) => fontWeight};
    color: ${({ fontColor }) => fontColor};
    background-color: ${({ bgColor }) => bgColor};
    gap: ${({ gap }) => `${gap}px`};
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
    color: ${({ theme }) => theme.colors.white};
    ${Body5}

    &::placeholder {
      line-height: 22px;
      letter-spacing: -0.005em;
      color: ${({ theme }) => theme.colors.gray4};
      ${Body5};
    }
  }
`;

const LetterWriteInputGuideMessage = styled.span<{ isShow: boolean }>`
  display: ${({ isShow }) => (isShow ? "block" : "none")};
  margin-top: 4px;
  line-height: 150%;
  letter-spacing: -0.005em;
  color: ${({ theme }) => theme.colors.red};
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
  color: ${({ theme }) => theme.colors.white};
  ${Display6}
`;

const LetterWriteProfileContainer = styled.ul`
  margin-top: 20px;
  height: calc(100vh - 220px);
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  li {
    padding: 12px 0px;
    width: 100%;
    height: 60px;
    button {
      display: flex;
      gap: 12px;
      align-items: center;
      width: fit-content;
      img,
      .profile-image-default {
        width: 36px;
        height: 36px;
        border-radius: 50%;
      }
      & > span {
        line-height: 150%;
        letter-spacing: -0.005em;
        color: ${({ theme }) => theme.colors.white};
        ${Body2};
      }
    }
  }
`;

const EmptyKakaoFriends = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  & > span {
    line-height: 150%;
    letter-spacing: -0.005em;
    ${Body4}
    color: ${({ theme }) => theme.colors.gray3};
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
  margin-top: 68px;
`;

const LetterWriteSituationSliderItem = styled.div`
  display: flex !important;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  word-break: keep-all;
  padding: 0 16px;

  & > div:first-of-type {
    height: 187px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    padding: 0 22px;
    line-height: 150%;
    text-align: center;
    letter-spacing: -0.005em;
    color: ${({ theme }) => theme.colors.gray2};
    ${Body1};
  }
`;

const LetterWriteCompletedLastSentenceOuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  & > span {
    line-height: 150%;
    text-align: center;
    letter-spacing: -0.005em;
    color: ${({ theme }) => theme.colors.gray2};
    ${Body2};
  }
`;

const LetterWriteCompletedLastSentence = styled.div<{
  color: string;
  calculatedInputTextWidth: number;
  isFocused?: boolean;
  inputValueLength?: number;
}>`
  margin-top: 20px;
  width: 100%;
  height: 332px;
  background-color: ${({ color }) => color};
  border-radius: ${({ theme }) => theme.radius.md};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  padding: 22px 20px 20px 20px;
  .completed-situation-image {
    height: 188px;
  }
  .completed-bottom-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    .last-sentence-input {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding-bottom: 4px;
      border-bottom: 1px solid ${({ theme }) => theme.colors.navy10};
      width: ${({ isFocused, inputValueLength }) =>
        isFocused !== undefined &&
        inputValueLength !== undefined &&
        inputValueLength === 0 &&
        (isFocused ? "30px" : "220px")};
      width: ${({ calculatedInputTextWidth, inputValueLength }) =>
        inputValueLength !== undefined &&
        inputValueLength > 0 &&
        `${30 + calculatedInputTextWidth}px`};

      span {
        display: inline-block;
        width: 8px;
        height: 20px;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: -0.01em;
        color: ${({ theme }) => theme.colors.navy70};
      }
      & > div {
        width: inherit;
        height: 24px;
        border: unset;
        padding: unset;
        input {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          padding: unset;
          line-height: 150%;
          text-align: center;
          letter-spacing: -0.5px;
          color: ${({ theme }) => theme.colors.navy};
          caret-color: ${({ theme }) => theme.colors.navy};
          ${Body4};

          &::placeholder {
            text-align: center;
            line-height: 150%;
            letter-spacing: -0.5px;
            color: ${({ theme }) => theme.colors.navy30};
            ${Body4};
          }

          &:focus {
            &::-webkit-input-placeholder {
              color: transparent;
            }
            &::-moz-placeholder {
              color: transparent;
            }
            &::placeholder {
              color: transparent;
            }
          }
        }
      }
    }
    .sender-name-date {
      display: flex;
      flex-direction: column;
      gap: 4px;
      text-align: center;
      .sender-name {
        display: flex;
        align-items: center;
        gap: 4px;
        span,
        strong {
          line-height: 150%;
        }
        span {
          color: ${({ theme }) => theme.colors.navy70};
          ${Caption2};
        }
        strong {
          letter-spacing: -0.005em;
          color: ${({ theme }) => theme.colors.gray6};
          ${Body2};
        }
      }
      .sender-date {
        font-family: "Monserrat";
        line-height: 150%;
        letter-spacing: -0.005em;
        color: ${({ theme }) => theme.colors.navy30};
        ${Caption1};
      }
    }
  }
`;

const LetterCompletedProgress = styled.div`
  z-index: 1004;
  height: 100vh;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding-top: 268px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.navy};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  p {
    line-height: 150%;
    text-align: center;
    letter-spacing: -0.005em;
    color: ${({ theme }) => theme.colors.gray2};
    ${Body5};
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
  EmptyKakaoFriends,
  LetterWriteSituationSliderWrapper,
  LetterWriteSituationSliderItem,
  LetterWriteCompletedLastSentenceOuterContainer,
  LetterWriteCompletedLastSentence,
  LetterCompletedProgress,
};
