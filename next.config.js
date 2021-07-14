const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withTypescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');

const isProd = process.env.NODE_ENV === 'production';

module.exports = withPlugins([
  [withTypescript],
  [withCSS, {
    cssModules: false,
  }],
  [optimizedImages, {
    optimizeImages: true,
    optimizeImagesInDev: false,
  }],
], {
  basePath: isProd ? '/profmoda2' : '',
  assetPrefix: isProd ? 'https://cdn.statically.io/gh/ivansglazunov/profmoda2/master/docs/' : '',
});
