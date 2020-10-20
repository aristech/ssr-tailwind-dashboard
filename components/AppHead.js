import React from "react";
import Head from "next/head";

const AppHead = (props) => {
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <meta charSet="utf-8" />

        <title>ProgressNet Admin Panel</title>
        {/* <meta
            name="theme-color"
            content={pageContext.theme.palette.primary.main}
          /> */}
        <link rel="apple-touch-icon" href="/public/images/homescreen512.png" />
        <meta name="description" content="Progressnet Damage Control" />
        <meta
          name="apple-mobile-web-app-title"
          content="Progressnet Damage Control"
        />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="Progressnet Damage Control"
        />
        <meta name="theme-color" content="#2196f3" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.css"
        />
        <script src="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.js"></script>
        {/* <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/jvectormap/2.0.4/jquery-jvectormap.css"
          type="text/css"
          media="screen"
        /> */}
        <link
          rel="stylesheet"
          href="//cdn.datatables.net/1.10.16/css/jquery.dataTables.min.css"
          type="text/css"
          media="screen"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu+Condensed&display=swap"
          rel="stylesheet"
        ></link>

        <link rel="manifest" href="/manifest.json" />

        <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default AppHead;
