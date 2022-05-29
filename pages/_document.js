import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang='eng'>
      <Head >
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,300&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      
    </Html>
  )
}