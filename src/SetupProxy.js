const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/goody', // 프록시를 사용할 API 엔드포인트에 맞게 수정
    createProxyMiddleware({
      target: 'http://27.96.134.23:4001',
      changeOrigin: true,
    })
  );
};