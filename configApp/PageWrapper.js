/* eslint-disable react/display-name */
import React from "react";
import NProgress from "nprogress";
import Router from "next/router";
import AppHead from "../components/AppHead";

import Consumer, { AppProvider } from "./AppProvider";
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
        <AppProvider slug={this.props.slug} token={this.props.token}>
          <Consumer>
            {(context) => {
              return (
                <div>
                  <AppHead msg={context.msg} />

                  <Comp
                    {...this.props}
                    selected={context?.selected}
                    notifications={context?.notifications}
                    user={context?.user}
                    alert={context?.alert}
                  />
                </div>
              );
            }}
          </Consumer>
        </AppProvider>
      );
    }
  };

export default PageWrapper;
