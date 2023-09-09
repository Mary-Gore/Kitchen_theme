export const server = done => {
  app.plugins.browsersync.init({
    proxy: "http://kitchen.dev",
    notify: false
  });

  done();
}
