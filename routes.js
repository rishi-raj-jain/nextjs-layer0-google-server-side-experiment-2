// This file was automatically added by layer0 deploy.
// You should commit this file to source control.
const { Router } = require("@layer0/core/router");
const { nextRoutes } = require("@layer0/next");

const routes = new Router()
  .get("/service-worker.js", ({ cache, serveStatic }) => {
    cache({
      edge: {
        maxAgeSeconds: 60 * 60 * 24 * 365,
      },
      browser: {
        maxAgeSeconds: 0,
      },
    });
    serveStatic(".next/static/service-worker.js");
  })
  .use(nextRoutes);

module.exports = routes;
