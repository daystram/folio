import NextHead from 'next/head';

export default function Head({title, description}) {
  return (
    <NextHead>
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-174226035-1"></script>
      <script dangerouslySetInnerHTML={{
        __html: "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-174226035-1')",
      }}/>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
    </NextHead>
  )
}
