/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')();
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
};

module.exports = withPlugins([withTM], nextConfig);
