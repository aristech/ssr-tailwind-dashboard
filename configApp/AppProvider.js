import React, { createContext, useState, useEffect } from "react";

import Router from "next/router";

import { Config } from "./config";

const { Provider, Consumer } = createContext();
// Then create a provider Component
function AppProvider(props) {
  const slug = props.slug;

  return <Provider value={{}}>{props.children}</Provider>;
}
AppProvider.getInitialProps = async (args) => {
  const { slug } = args.query;
  // const token = nextCookie(args).token;
  return { slug };
};

export { AppProvider };
export default Consumer;
