import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <p className={"text-4xl"}>Hey it is Taiwlind Css</p>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
