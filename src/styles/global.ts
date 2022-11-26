import { css, Theme } from '@emotion/react';

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

  textarea {
    resize: none;
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

  @font-face {
    font-family: 'pretendard_regular';
    src: url('/assets/fonts/Pretendard-Regular.woff2') format('woff2'),
      url('/assets/fonts/Pretendard-Regular.woff') format('woff'),
      url('/assets/fonts/Pretendard-Regular.ttf') format('ttf');
    font-display: swap;
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'pretendard_medium';
    src: url('/assets/fonts/Pretendard-Medium.woff2') format('woff2'),
      url('/assets/fonts/Pretendard-Medium.woff') format('woff'),
      url('/assets/fonts/Pretendard-Medium.ttf') format('ttf');
    font-display: swap;
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'pretendard_semiBold';
    src: url('/assets/fonts/Pretendard-SemiBold.woff2') format('woff2'),
      url('/assets/fonts/Pretendard-SemiBold.woff') format('woff'),
      url('/assets/fonts/Pretendard-SemiBold.ttf') format('ttf');
    font-display: swap;
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'pretendard_bold';
    src: url('/assets/fonts/Pretendard-Bold.woff2') format('woff2'),
      url('/assets/fonts/Pretendard-Bold.woff') format('woff'),
      url('/assets/fonts/Pretendard-Bold.ttf') format('ttf');
    font-display: swap;
    font-weight: 700;
    font-style: normal;
  }
`;
