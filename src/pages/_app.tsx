import type { AppProps } from "next/app";
import { Global, ThemeProvider } from "@emotion/react";
import { RecoilRoot, RecoilEnv } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Head from "@/src/components/common/Head";
import Toast from "@/src/components/common/Toast";

import theme from "@/src/styles/theme";
import { global } from "@/src/styles/global";

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Head />
          <Global styles={global} />
          <Component {...pageProps} />
          <Toast />
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
