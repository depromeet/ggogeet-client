import styled from "@emotion/styled";

export const ButtonLayout = styled.button`
  width: 60px;
  height: 60px;
  font-size: 30px;
  background-color: ${({ theme }) => theme.colors.beige};
  color: ${({ theme }) => theme.colors.navy};
  border-radius: 50%;
  position: absolute;
  right: 20px;
  bottom: 20px;
`;
