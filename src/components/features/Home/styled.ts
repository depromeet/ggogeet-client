import { Body5 } from "@/src/styles/commons";
import theme from "@/src/styles/theme";
import styled from "@emotion/styled";

const HomeWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: ${theme.colors.navy};
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
  .home-send {
    position: absolute;
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
