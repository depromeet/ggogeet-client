import { useRouter } from "next/router";

import { useAuth } from "@/src/hooks/useAuth";
import Layout from "@/src/components/features/signin/Layout";
import Background from "@/src/components/features/signin/Background";
import Content from "@/src/components/features/signin/Content";
import { useEffect } from "react";

export default function Signin() {
  const router = useRouter();
  const { getRefreshToken } = useAuth();

  useEffect(() => {
    if (!router.isReady) return;
    getRefreshToken() && router.push("/");
  }, [router.isReady]);
  return (
    <Layout>
      {/* background svgs */}
      {/* <Background /> */}

      {/* content */}
      <Content />
    </Layout>
  );
}
