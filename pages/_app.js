import "regenerator-runtime/runtime";
import React from "react";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../configApp/apolloClient";
import Head from "next/head";
import { AppProvider } from "../configApp/AppProvider";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "nprogress/nprogress.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <React.Fragment>
        <Head>
          <title>ProgressNet</title>
        </Head>

        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </React.Fragment>
    </ApolloProvider>
  );
}

export default MyApp;
