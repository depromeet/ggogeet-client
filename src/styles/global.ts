import { css, Theme } from "@emotion/react";

export const global = (theme: Theme) => css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: auto;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo",
      "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", sans-serif;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    background-color: transparent;
    padding: 0;
  }

  h1,
  h2,
  h3 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  input,
  textarea {
    appearance: none;
    outline: none;
  }
  input::placeholder,
  textarea::placeholder {
    color: #bcc1d0;
  }

  textarea {
    resize: none;
    font-family: inherit;
  }

  .a11y-hidden {
    position: absolute;
    clip: rect(0, 0, 0, 0);
    width: 1px;
    height: 1px;
    overflow: hidden;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
  }

  /* react-spring-bottom-sheet */

  [data-rsbs-overlay] {
    border-radius: 30px 30px 0px 0px;
    background-color: #f6f6f6;
  }

  [data-rsbs-header] {
    padding-bottom: 20px;
  }

  [data-rsbs-header]:before {
    height: 5px;
    border-radius: 6px;
  }
`;
