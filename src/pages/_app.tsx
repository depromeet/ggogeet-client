import type { AppProps } from "next/app";
import { Global, ThemeProvider } from "@emotion/react";
import theme from "@/src/styles/theme";
import { global } from "@/src/styles/global";
import Toast from "@/src/components/common/Toast";
import { RecoilRoot, RecoilEnv } from "recoil";

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <Component {...pageProps} />
        <Toast />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
