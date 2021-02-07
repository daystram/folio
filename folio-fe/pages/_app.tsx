import { AppProps } from "next/app";
import Head from "../components/head";

import "./_app.sass";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head
        title={"Danny August Ramaputra"}
        description={"Danny August Ramaputra's personal website and portfolio."}
      />
      <Component {...pageProps} />
    </>
  );
}
