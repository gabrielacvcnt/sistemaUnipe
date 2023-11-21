const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use('/alunos', createProxyMiddleware({
        target: 'http://104.248.61.212',
        changeOrigin: true,
    }));
};
