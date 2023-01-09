import Image from "next/image";
import styled from "@emotion/styled";

export const Background = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    margin-top: -${({ theme }) => theme.spacing[4]};
    margin-bottom: -${({ theme }) => theme.spacing[4]};
  }
`;

export const Logo1 = styled(Image)`
  position: relative;
  width: fit-content;
  left: -5px;
  transform: rotate(10deg);
`;
export const Logo2 = styled(Image)`
  position: relative;
  margin-left: auto;
  width: fit-content;
  transform: rotate(-6deg);
`;
export const Logo3 = styled(Image)`
  position: relative;
  width: fit-content;
  transform: rotate(-6deg);
`;
export const Logo4 = styled(Image)`
  position: relative;
  margin-left: auto;
  width: fit-content;
`;
