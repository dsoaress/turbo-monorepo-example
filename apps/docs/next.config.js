/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')(['@dsoaress/components-library'])

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
}

module.exports = withTM(nextConfig)
