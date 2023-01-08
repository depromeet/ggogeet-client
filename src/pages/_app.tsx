import type { AppProps } from "next/app";
import { Global, ThemeProvider } from "@emotion/react";
import { RecoilRoot, RecoilEnv } from "recoil";

import Head from "@/src/components/common/Head";
import Toast from "@/src/components/common/Toast";

import theme from "@/src/styles/theme";
import { global } from "@/src/styles/global";
import { queryClient } from "../react-query/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ErrorBoundary } from "react-error-boundary";

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Head />
          <Global styles={global} />
          <ErrorBoundary fallback={<div>error...</div>}>
            <Component {...pageProps} />
          </ErrorBoundary>
          <Toast />
        </ThemeProvider>
      </RecoilRoot>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
