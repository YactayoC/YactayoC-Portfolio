import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/assets/logo.png" />
        <meta name="description" content="Sebastian Yactayo Developer - Portfolio" />
        <meta name="keywords" content="YactayoC, Sebastian Yactayo, Portfolio" />
        <meta name="author" content="Sebastian Yactayo" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
