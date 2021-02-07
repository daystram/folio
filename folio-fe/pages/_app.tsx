import { AppProps } from "next/app";

import "./global.sass";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
