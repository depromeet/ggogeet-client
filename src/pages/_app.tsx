import type { AppProps } from "next/app";
import { Global, ThemeProvider } from "@emotion/react";
import theme from "@/src/styles/theme";
import { global } from "@/src/styles/global";
import { RecoilRoot } from "recoil";

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
