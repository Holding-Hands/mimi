var express = require('express');
var proxy = require('http-proxy-middleware');
var app = express();

module.exports = function (app) {
  app.use(
      '/api',
      proxy({target: 'http://39.97.33.178/api', changeOrigin: true})
  );
  app.use(
      proxy('/zhang', {target: 'http://106.54.54.237:8000/api/v1/recommend', changeOrigin: true}));
};





