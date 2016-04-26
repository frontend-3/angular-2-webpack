'use strict';
const helpers = require('./helpers');

exports.tslint = {
  test: /\.ts$/,
  loader: 'tslint',
  exclude: /node_modules/
};

exports.ts = {
  test: /\.ts$/,
  loader: 'awesome-typescript-loader',
  exclude: [/\.(spec|e2e)\.ts$/]
};

exports.html = {
  test: /\.html$/,
  loader: 'raw',
  exclude: [helpers.root('src/index.html')]
};

exports.css = {
  test: /\.css$/,
  loader: 'raw-loader',
  exclude: /node_modules/
};

exports.json = {
  test: /\.json$/,
  loader: 'json-loader'
};

exports.svg = makeUrlLoader(/\.svg$/);
exports.eot = makeUrlLoader(/\.eot$/);
exports.woff = makeUrlLoader(/\.woff$/);
exports.woff2 = makeUrlLoader(/\.woff2$/);
exports.ttf = makeUrlLoader(/\.ttf$/);

function makeUrlLoader (pattern) {
  return {
    test: pattern,
    loader: 'url',
    exclude: /node_modules/
  };
}
