import type { AppProps } from "next/app";
import { Global, ThemeProvider } from "@emotion/react";
import { RecoilRoot, RecoilEnv } from "recoil";

import Toast from "@/src/components/common/Toast";
import GA from "@/src/components/common/GA";

import theme from "@/src/styles/theme";
import { global } from "@/src/styles/global";
import { queryClient } from "../react-query/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ErrorBoundary } from "react-error-boundary";
import Head from "../components/common/Head/Head";
import InterceptorProvider from "@/src/utils/interceptorProvider";

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

declare global {
  interface Window {
    Kakao: any;
  }
}

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Head />
          <GA />

          <Global styles={global} />
          <ErrorBoundary fallback={<div>error...</div>}>
            <InterceptorProvider>
              <Component {...pageProps} />
            </InterceptorProvider>
          </ErrorBoundary>
          <Toast />
        </ThemeProvider>
      </RecoilRoot>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
