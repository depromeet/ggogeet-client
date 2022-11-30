import { Header1 } from '@/src/styles/commons';
import styled from '@emotion/styled';

const LetterWriteInputRecipientLayoutWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const BottomButtonContainer = styled.div<{ type?: string | string[] }>`
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
  }

  button:first-of-type {
    ${({ type }) => type === 'recipient-01' && `border: 1px solid #767c8d`};
  }
`;

const LetterWriteInputRecipientMain = styled.main`
  padding: 12px 16px;
  height: calc(100vh - 44px);
`;

const LetterWriteH1 = styled.h1`
  line-height: 150%;
  color: #767c8d;
  ${Header1}
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

export {
  LetterWriteInputRecipientLayoutWrapper,
  BottomButtonContainer,
  LetterWriteInputRecipientMain,
  LetterWriteH1,
  LetterWriteInputContainer,
};
