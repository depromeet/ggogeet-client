import Textarea from "@/src/components/common/Textarea";
import styled from "@emotion/styled";

export const AddTextLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px 0 20px;
  flex: 1;
`;

export const LetterAddTextAreaWrapper = styled.div`
  margin: 20px 0 0 0;
`;

export const LetterAddTextArea = styled(Textarea)`
  height: 320px;
  background-color: ${({ theme }) => theme.colors.white};
`;
