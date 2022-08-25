import type { AppProps } from "next/app";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

function Account({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Account — Keymorph</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default Account;
