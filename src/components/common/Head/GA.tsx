import Script from "next/script";
import { IS_PRODUCTION } from "@/src/constants";

export default function GA() {
  if (!IS_PRODUCTION) return <></>;

  return (
    <>
      <Script
        async
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-5PGHCZKNDN"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-5PGHCZKNDN');
      `,
        }}
      />
    </>
  );
}
