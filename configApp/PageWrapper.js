/* eslint-disable react/display-name */
import React from "react";
import NProgress from "nprogress";
import Router from "next/router";
import AppHead from "../components/AppHead";

import Consumer, { AppProvider } from "./AppProvider";
import Alert from "../components/alerts/Alert";
// import routes from "./routes";

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const PageWrapper = (Comp) =>
  class extends React.Component {
    static async getInitialProps(args) {
      const { slug, apiRoute } = args.query;
      // const token = nextCookie(args).token;

      return {
        slug,
        apiRoute,
        // routes,
        ...(Comp.getInitialProps ? await Comp.getInitialProps(args) : null),
      };
    }
    render() {
      return (
        <AppProvider slug={this.props.slug}>
          <Consumer>
            {(context) => {
              return (
                <div>
                  <Alert />
                  <AppHead />
                  <Comp {...this.props} />
                </div>
              );
            }}
          </Consumer>
        </AppProvider>
      );
    }
  };

export default PageWrapper;
