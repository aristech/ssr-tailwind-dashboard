const express = require("express");
const next = require("next");
const { createReadStream } = require("fs");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/sw.js", (req, res) => {
      res.setHeader("content-type", "text/javascript");
      createReadStream("./offline/serviceWorker.js").pipe(res);
      //app.render(req, res, actualPage, queryParams);
    });

    server.get("/admin/:slug", (req, res) => {
      const actualPage = "/admin";
      const queryParams = { slug: req.params.slug, apiRoute: "admin" };
      app.render(req, res, actualPage, queryParams);
    });
    server.get("/auth/:slug", (req, res) => {
      const actualPage = "/auth";
      const queryParams = { slug: req.params.slug, apiRoute: "auth" };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log("> Ready on Port :" + port);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
