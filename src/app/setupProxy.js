const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/auth',
    createProxyMiddleware({
      target: 'http://localhost:3001', // Cambia el puerto si es necesario
      changeOrigin: true,
    })
  );
};
