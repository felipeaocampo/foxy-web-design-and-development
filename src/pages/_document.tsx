/*
Copyright 2025 Chainguard, Inc.
SPDX-License-Identifier: Apache-2.0
*/

/* eslint-disable */

import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        {/* GOOGLE CLOUD RUN (GCP) SGTM CONNECTION SCRIPT */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','customDL','GTM-5X25ZN8P');`,
          }}
        ></Script>
        {/* STAPE SGTM CONNECTION SCRIPT: NO CUSTOM DATALAYER */}
        {/* <Script
          id="g??gl?-t?g-m?n?g?r"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src="https://stape.grimmy.shop/ayrqiphndm.js?"+i;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','eodqo7qa=aWQ9R1RNLTVYMjVaTjhQ&apiKey=34775901');`,
          }}
        ></Script> */}
        {/* STAPE SGTM CONNECTION SCRIPT: CUSTOM DATALAYER */}
        {/* <Script
          id="g??gl?-t?g-m?n?g?r"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src="https://stape.grimmy.shop/ayrqiphndm.js?"+i;f.parentNode.insertBefore(j,f);})(window,document,'script','grimmyDL','eodqo7qa=aWQ9R1RNLTVYMjVaTjhQJmw9Z3JpbW15REw%3D&apiKey=34775901');`,
          }}
        ></Script> */}
      </Head>
      <body>
        <Main />
        <div id="outer-modal"></div>
        <NextScript />
      </body>
    </Html>
  );
}

// BEFORE STARTING AT CHAINGUARD
// import GoogleAnalytics from "@/components/google-analytics/google-analytics";
// import { Html, Head, Main, NextScript } from "next/document";
// import Script from "next/script";

// export default function Document() {
//   return (
//     <Html lang="en">
//       <Head>
//         {/* <GoogleAnalytics GA_MEASUREMENT_ID={"G-C68S2TB5DF"} /> */}
//         <Script id="google-tag-manager" strategy="afterInteractive">
//           {`
//         (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//         new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//         j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//         'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//         })(window,document,'script','dataLayer','${"G-C68S2TB5DF"}');
//         `}
//         </Script>
//       </Head>
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }
