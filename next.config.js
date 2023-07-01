/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const withFonts = require('next-fonts');
const withTM = require('next-transpile-modules')();
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
};

module.exports = withPlugins([[withTM], [withFonts]], nextConfig);
