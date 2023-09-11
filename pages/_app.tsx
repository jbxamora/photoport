import type { AppProps } from "next/app";
// import { Analytics } from "@vercel/analytics/react";
import "../styles/index.css";
import { League_Spartan } from 'next/font/google'

const font = League_Spartan({ subsets: ['latin'] })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={font.className}>
      <Component {...pageProps} />
      {/* <Analytics /> */}
    </main>
  );
}

export default MyApp;

