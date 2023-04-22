import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Inter } from "next/font/google";

import { Provider } from "react-redux";
import { store } from "@/core/store";

const sourceSansPro = Inter({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      {/* <main className={sourceSansPro.className}> */}
      <Component {...pageProps} />
      {/* </main> */}
    </Provider>
  );
}
