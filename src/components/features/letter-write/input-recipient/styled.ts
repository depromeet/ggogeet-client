import { Header1 } from '@/src/styles/commons';
import styled from '@emotion/styled';

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
  LetterWriteInputRecipientMain,
  LetterWriteH1,
  LetterWriteInputContainer,
};
