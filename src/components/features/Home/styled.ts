import { Body5 } from "@/src/styles/commons";
import styled from "@emotion/styled";

const HomeWrapper = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.navy};
  min-height: 100vh;
  @supports (-webkit-touch-callout: none) {
    min-height: fill-available;
    min-height: -webkit-fill-available;
    min-height: -moz-available;
  }
  header {
    padding-top: 52px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 28px;
    h1 {
      line-height: 150%;
      text-align: center;
      color: #c1c2ca;
      ${Body5}
    }
  }
  .home-storage,
  .home-memo,
  .home-send,
  .home-love,
  .home-get,
  .home-thank {
    position: absolute;
  }
  .home-storage,
  .home-memo,
  .home-send {
    z-index: 10;
  }
  .home-love,
  .home-get,
  .home-thank {
    z-index: 1;
  }
  .home-storage {
    top: 260px;
    left: 0;
  }
  .home-memo {
    bottom: 150px;
    right: 0;
  }
  .home-send {
    bottom: 40px;
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
  }
  .home-love {
    top: 240px;
    right: 0;
  }
  .home-get {
    top: 408px;
    left: 0;
  }
  .home-thank {
    bottom: 10px;
    right: 0;
  }
  /* footer {
    position: absolute;
    bottom: 20px;
    right: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  } */
`;

export { HomeWrapper };
