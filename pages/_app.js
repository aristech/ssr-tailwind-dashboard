import React from "react";
import Head from "next/head";
import { AppProvider } from "../configApp/AppProvider";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "nprogress/nprogress.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>ProgressNet</title>
      </Head>

      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </React.Fragment>
  );
}

export default MyApp;
