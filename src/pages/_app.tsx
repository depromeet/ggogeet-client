import type { AppProps } from 'next/app';
import { Global, ThemeProvider } from '@emotion/react';
import theme from '@/src/styles/theme';
import { global } from '@/src/styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={global} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
