import { Body4 } from "@/src/styles/commons";
import styled from "@emotion/styled";

export const WelcomeModalContents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    margin: auto;
  }

  & > p {
    margin-top: 8px;
    line-height: 24px;
    color: ${({ theme: { colors } }) => colors.white};
    text-align: center;
    white-space: pre;

    ${Body4};
  }
`;

export const SliderWrapper = styled.div`
  .slick-slide {
    height: 211px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .slick-dots {
    position: unset;
    display: flex !important;
    justify-content: center;
    margin-top: 22px;

    li {
      width: 4px !important;
      height: 4px !important;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.gray6};
      margin: 0 4px;
      &.slick-active {
        background-color: ${({ theme }) => theme.colors.white};
      }
      button {
        width: inherit;
        height: inherit;
        &::before {
          display: none;
        }
      }
    }
  }
`;
