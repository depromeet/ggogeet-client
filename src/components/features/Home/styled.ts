import { Body5 } from "@/src/styles/commons";
import styled from "@emotion/styled";

const HomeWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.navy};
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
    top: 29vh;
    left: 0;
  }
  .home-memo {
    bottom: 19.5vh;
    right: 0;
  }
  .home-send {
    bottom: 5vh;
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
  }
  .home-love {
    top: 25.7vh;
    right: 0;
  }
  .home-get {
    bottom: 27vh;
    left: -3vw;
  }
  .home-thank {
    bottom: 1.3vh;
    right: -2.2vw;
  }
  footer {
    position: absolute;
    bottom: 20px;
    right: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

export { HomeWrapper };
