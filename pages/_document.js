import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <script async crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1721485376950080" />
        <script async data-ad-client="ca-pub-1721485376950080" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" ></script>



        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-350058572" ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-350058572');
            `,
          }}
        />






      </Head>
      <body>
        <Main />
        <NextScript />







      </body>
    </Html>
  );
}
