'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

require('../config/env');

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const {
  createCompiler,
  prepareProxy,
  prepareUrls,
} = require('react-dev-utils/WebpackDevServerUtils');
const paths = require('../config/paths');
const configFactory = require('../config/webpack.config');
const createDevServerConfig = require('../config/webpackDevServer.config');

const DEFAULT_PORT = 3000;
const HOST = '0.0.0.0';

const port = DEFAULT_PORT;
const config = configFactory('development');
const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
const appName = require(paths.appPackageJson).name;
const tscCompileOnError = process.env.TSC_COMPILE_ON_ERROR === 'true';
const urls = prepareUrls(protocol, HOST, port);

const devSocket = {
  warnings: warnings =>
    devServer.sockWrite(devServer.sockets, 'warnings', warnings),
  errors: errors =>
    devServer.sockWrite(devServer.sockets, 'errors', errors),
};

// Create a webpack compiler that is configured with custom messages.
const compiler = createCompiler({
  appName,
  config,
  devSocket,
  urls,
  useYarn: false,
  useTypeScript: true,
  tscCompileOnError,
  webpack,
});

// Load proxy config
const proxySetting = require(paths.appPackageJson).proxy;
const proxyConfig = prepareProxy(proxySetting, paths.appPublic);

// Serve webpack assets generated by the compiler over a web server.
const serverConfig = createDevServerConfig(
  proxyConfig,
  urls.lanUrlForConfig
);

const devServer = new WebpackDevServer(compiler, serverConfig);

devServer.listen(port, HOST, err => {
  if (err) {
    return console.log(err);
  }

  console.log('Starting the development server...\n');
});

['SIGINT', 'SIGTERM'].forEach(function(sig) {
  process.on(sig, function() {
    devServer.close();
    process.exit();
  });
});
